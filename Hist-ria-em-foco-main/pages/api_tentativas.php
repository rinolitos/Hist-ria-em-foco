<?php
// API de avaliações do aluno logado.
//   GET -> lista as tentativas do usuário (com as respostas)
// As tentativas são gravadas por api_prova.php.
// Tabelas usadas: tentativas, respostas_tentativa, questoes, modulos.

require_once __DIR__ . "/../assets/config/sessao.php";

header("Content-Type: application/json; charset=utf-8");

function responder($codigo, $dados) {
    http_response_code($codigo);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}

const LETRAS = ["A", "B", "C", "D"];

$usuarioId = (int) ($_SESSION["usuario_id"] ?? 0);

if ($usuarioId <= 0) {
    responder(401, ["erro" => "Não autenticado."]);
}

try {
    require_once __DIR__ . "/../assets/config/conexao.php";

    // ---------------------------------------------------------------
    // GET: histórico
    // ---------------------------------------------------------------
    if ($_SERVER["REQUEST_METHOD"] === "GET") {

        $consulta = $pdo->prepare(
            "SELECT id, data_realizacao
             FROM tentativas WHERE usuario_id = :id
             ORDER BY data_realizacao DESC, id DESC LIMIT 50"
        );
        $consulta->execute([":id" => $usuarioId]);
        $tentativas = $consulta->fetchAll();

        if (!$tentativas) {
            responder(200, []);
        }

        $ids = array_column($tentativas, "id");
        $marcas = implode(",", array_fill(0, count($ids), "?"));

        $consulta = $pdo->prepare(
            "SELECT r.tentativa_id, r.alternativa_marcada, r.correta,
                    q.enunciado, q.alternativa_a, q.alternativa_b,
                    q.alternativa_c, q.alternativa_d, q.alternativa_correta,
                    m.titulo AS modulo
             FROM respostas_tentativa r
             JOIN questoes q ON q.id = r.questao_id
             JOIN modulos  m ON m.id = q.modulo_id
             WHERE r.tentativa_id IN ($marcas)
             ORDER BY r.id"
        );
        $consulta->execute($ids);

        $porTentativa = [];
        foreach ($consulta->fetchAll() as $r) {
            $marcada = $r["alternativa_marcada"] === null
                ? null
                : array_search($r["alternativa_marcada"], LETRAS, true);

            $porTentativa[$r["tentativa_id"]][] = [
                "topic"         => $r["modulo"],
                "question"      => $r["enunciado"],
                "options"       => [
                    $r["alternativa_a"], $r["alternativa_b"],
                    $r["alternativa_c"], $r["alternativa_d"],
                ],
                "selected"      => $marcada === false ? null : $marcada,
                "correctAnswer" => array_search($r["alternativa_correta"], LETRAS, true),
            ];
        }

        $lista = [];
        foreach ($tentativas as $t) {
            $questoes = $porTentativa[$t["id"]] ?? [];
            $total = count($questoes);
            $acertos = 0;
            foreach ($questoes as $q) {
                if ($q["selected"] === $q["correctAnswer"]) {
                    $acertos++;
                }
            }

            $lista[] = [
                "date"       => gmdate("c", strtotime($t["data_realizacao"] . " UTC")),
                "total"      => $total,
                "correct"    => $acertos,
                "wrong"      => $total - $acertos,
                "percentage" => $total > 0 ? (int) round($acertos / $total * 100) : 0,
                "questions"  => $questoes,
            ];
        }

        responder(200, $lista);
    }

    responder(405, ["erro" => "Método não permitido."]);

} catch (PDOException $e) {
    error_log($e->getMessage());
    responder(500, ["erro" => "Erro ao acessar o banco de dados."]);
}
