<?php
// API da prova do aluno logado.
//   GET  -> sorteia as questões (sem o gabarito) e guarda o sorteio na sessão
//   POST -> recebe as respostas, corrige no servidor e grava a tentativa

require_once __DIR__ . "/../assets/config/sessao.php";

header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-store");

function responder($codigo, $dados) {
    http_response_code($codigo);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}

const LETRAS = ["A", "B", "C", "D"];
const QUESTOES_POR_PROVA = 10;

$usuarioId = (int) ($_SESSION["usuario_id"] ?? 0);

if ($usuarioId <= 0) {
    responder(401, ["erro" => "Não autenticado."]);
}

function formatarQuestao($q, $comGabarito) {
    $dados = [
        "id"       => (int) $q["id"],
        "topic"    => $q["modulo"],
        "question" => $q["enunciado"],
        "options"  => [
            $q["alternativa_a"], $q["alternativa_b"],
            $q["alternativa_c"], $q["alternativa_d"],
        ],
    ];
    if ($comGabarito) {
        $dados["correctAnswer"] = array_search($q["alternativa_correta"], LETRAS, true);
    }
    return $dados;
}

$colunas = "q.id, q.modulo_id, q.enunciado, q.alternativa_a, q.alternativa_b,
            q.alternativa_c, q.alternativa_d, q.alternativa_correta, m.titulo AS modulo";

try {
    require_once __DIR__ . "/../assets/config/conexao.php";

    // ---------------------------------------------------------------
    // GET: iniciar prova
    // ---------------------------------------------------------------
    if ($_SERVER["REQUEST_METHOD"] === "GET") {

        $todas = $pdo->query(
            "SELECT $colunas FROM questoes q JOIN modulos m ON m.id = q.modulo_id"
        )->fetchAll();

        if (!$todas) {
            responder(200, ["questoes" => []]);
        }

        shuffle($todas);
        $sorteadas = array_slice($todas, 0, QUESTOES_POR_PROVA);

        $_SESSION["prova_atual"] = array_map(
            fn($q) => (int) $q["id"],
            $sorteadas
        );

        responder(200, [
            "questoes" => array_map(fn($q) => formatarQuestao($q, false), $sorteadas),
        ]);
    }

    // ---------------------------------------------------------------
    // POST: finalizar prova
    // ---------------------------------------------------------------
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        responder(405, ["erro" => "Método não permitido."]);
    }

    // Exigir JSON evita que um formulário de outro site dispare este POST (CSRF)
    if (stripos($_SERVER["CONTENT_TYPE"] ?? "", "application/json") !== 0) {
        responder(415, ["erro" => "Envie application/json."]);
    }

    $ids = $_SESSION["prova_atual"] ?? [];

    if (!$ids) {
        responder(409, ["erro" => "Nenhuma prova em andamento. Inicie uma nova prova."]);
    }

    $corpo = json_decode(file_get_contents("php://input"), true);
    $respostas = $corpo["answers"] ?? null;

    if (!is_array($respostas) || count($respostas) !== count($ids)) {
        responder(400, ["erro" => "Respostas inválidas."]);
    }

    $marcas = implode(",", array_fill(0, count($ids), "?"));
    $consulta = $pdo->prepare(
        "SELECT $colunas FROM questoes q JOIN modulos m ON m.id = q.modulo_id
         WHERE q.id IN ($marcas)"
    );
    $consulta->execute($ids);

    $porId = [];
    foreach ($consulta->fetchAll() as $q) {
        $porId[(int) $q["id"]] = $q;
    }

    $linhas = [];
    $revisao = [];
    $modulos = [];
    $acertos = 0;

    foreach (array_values($ids) as $i => $questaoId) {

        // questão removida pelo admin durante a prova
        if (!isset($porId[$questaoId])) {
            unset($_SESSION["prova_atual"]);
            responder(409, ["erro" => "A prova foi alterada. Inicie uma nova prova."]);
        }

        $q = $porId[$questaoId];
        $r = $respostas[$i] ?? null;
        $indice = (is_int($r) && $r >= 0 && $r <= 3) ? $r : null;
        $marcada = $indice === null ? null : LETRAS[$indice];
        $correta = $marcada !== null && $marcada === $q["alternativa_correta"] ? 1 : 0;

        $acertos += $correta;
        $modulos[$q["modulo_id"]] = true;
        $linhas[] = [$questaoId, $marcada, $correta];

        $item = formatarQuestao($q, true);
        $item["selected"] = $indice;
        $revisao[] = $item;
    }

    $total = count($linhas);
    $nota = round($acertos / $total * 100, 2);

    // Prova de um único módulo guarda o módulo; prova mista fica NULL
    $moduloId = count($modulos) === 1 ? (int) array_key_first($modulos) : null;
    $agora = gmdate("Y-m-d H:i:s");

    $pdo->beginTransaction();

    $pdo->prepare(
        "INSERT INTO tentativas (usuario_id, modulo_id, nota, data_realizacao)
         VALUES (:u, :m, :n, :d)"
    )->execute([":u" => $usuarioId, ":m" => $moduloId, ":n" => $nota, ":d" => $agora]);

    $tentativaId = (int) $pdo->lastInsertId();

    $insere = $pdo->prepare(
        "INSERT INTO respostas_tentativa (tentativa_id, questao_id, alternativa_marcada, correta)
         VALUES (:t, :q, :a, :c)"
    );
    foreach ($linhas as [$questaoId, $marcada, $correta]) {
        $insere->execute([":t" => $tentativaId, ":q" => $questaoId, ":a" => $marcada, ":c" => $correta]);
    }

    $pdo->commit();

    // A prova só pode ser enviada uma vez
    unset($_SESSION["prova_atual"]);

    responder(200, [
        "date"       => gmdate("c"),
        "total"      => $total,
        "correct"    => $acertos,
        "wrong"      => $total - $acertos,
        "percentage" => (int) round($acertos / $total * 100),
        "questions"  => $revisao,
    ]);

} catch (PDOException $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    error_log($e->getMessage());
    responder(500, ["erro" => "Erro ao acessar o banco de dados."]);
}
