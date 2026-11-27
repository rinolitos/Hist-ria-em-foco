<?php

require_once __DIR__ . "/../assets/config/protecao.php";
exigirAdmin();

require_once __DIR__ . "/../assets/config/conexao.php";

function h($texto) {
    return htmlspecialchars((string) $texto, ENT_QUOTES, "UTF-8");
}

function dataBR($data, $utc = true) {
    if (!$data) {
        return "—";
    }
    $d = new DateTime($data, new DateTimeZone($utc ? "UTC" : date_default_timezone_get()));
    $d->setTimezone(new DateTimeZone("America/Sao_Paulo"));
    return $d->format("d/m/Y H:i");
}

function avisar($tipo, $mensagem) {
    $_SESSION["flash"] = ["tipo" => $tipo, "mensagem" => $mensagem];
}

function voltar($secao) {
    header("Location: admin.php?secao=" . $secao);
    exit;
}

$secoes = [
    "geral"      => ["Visão geral", "⌂"],
    "questoes"   => ["Gerenciar questões", "✓"],
    "modulos"    => ["Módulos", "▥"],
    "alunos"     => ["Alunos", "♙"],
    "resultados" => ["Resultados", "▧"],
];

$secao = $_GET["secao"] ?? "geral";
if (!isset($secoes[$secao])) {
    $secao = "geral";
}

// ===================================================================
// AÇÕES (POST)
// ===================================================================

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $acao = $_POST["acao"] ?? "";

    if (!csrfValido()) {
        avisar("erro", "Sessão expirada. Recarregue a página e tente novamente.");
        voltar($secao);
    }

    try {

        // ---------------- QUESTÕES ----------------
        if ($acao === "questao_salvar") {

            $id        = (int) ($_POST["id"] ?? 0);
            $moduloId  = (int) ($_POST["modulo_id"] ?? 0);
            $enunciado = trim($_POST["enunciado"] ?? "");
            $alt       = [];
            foreach (["a", "b", "c", "d"] as $l) {
                $alt[$l] = trim($_POST["alternativa_$l"] ?? "");
            }
            $correta = strtoupper($_POST["alternativa_correta"] ?? "");

            $existeModulo = $pdo->prepare("SELECT 1 FROM modulos WHERE id = :id");
            $existeModulo->execute([":id" => $moduloId]);

            $erro = null;
            if (!$existeModulo->fetch()) {
                $erro = "Escolha um módulo válido.";
            } elseif ($enunciado === "" || mb_strlen($enunciado) > 2000) {
                $erro = "Digite o enunciado (até 2000 caracteres).";
            } elseif (in_array("", $alt, true) || max(array_map("mb_strlen", $alt)) > 500) {
                $erro = "Preencha as quatro alternativas (até 500 caracteres cada).";
            } elseif (count(array_unique($alt)) < 4) {
                $erro = "As alternativas devem ser diferentes entre si.";
            } elseif (!in_array($correta, ["A", "B", "C", "D"], true)) {
                $erro = "Marque a alternativa correta.";
            }

            if ($erro) {
                avisar("erro", $erro);
                voltar("questoes" . ($id ? "&editar=$id" : ""));
            }

            $params = [
                ":m" => $moduloId, ":e" => $enunciado,
                ":a" => $alt["a"], ":b" => $alt["b"], ":c" => $alt["c"], ":d" => $alt["d"],
                ":c0" => $correta,
            ];

            if ($id > 0) {
                $params[":id"] = $id;
                $pdo->prepare(
                    "UPDATE questoes SET modulo_id = :m, enunciado = :e,
                     alternativa_a = :a, alternativa_b = :b, alternativa_c = :c,
                     alternativa_d = :d, alternativa_correta = :c0 WHERE id = :id"
                )->execute($params);
                avisar("sucesso", "Questão atualizada.");
            } else {
                $pdo->prepare(
                    "INSERT INTO questoes (modulo_id, enunciado, alternativa_a, alternativa_b,
                     alternativa_c, alternativa_d, alternativa_correta)
                     VALUES (:m, :e, :a, :b, :c, :d, :c0)"
                )->execute($params);
                avisar("sucesso", "Questão cadastrada.");
            }
            voltar("questoes");
        }

        if ($acao === "questao_excluir") {
            $id = (int) ($_POST["id"] ?? 0);
            try {
                $pdo->prepare("DELETE FROM questoes WHERE id = :id")->execute([":id" => $id]);
                avisar("sucesso", "Questão excluída.");
            } catch (PDOException $e) {
                avisar("erro", "Esta questão já foi usada em provas e não pode ser excluída. Edite o texto, se necessário.");
            }
            voltar("questoes");
        }

        // ---------------- MÓDULOS ----------------
        if ($acao === "modulo_salvar") {

            $id        = (int) ($_POST["id"] ?? 0);
            $titulo    = trim($_POST["titulo"] ?? "");
            $descricao = trim($_POST["descricao"] ?? "");

            if ($titulo === "" || mb_strlen($titulo) > 150 || mb_strlen($descricao) > 2000) {
                avisar("erro", "Digite um título (até 150 caracteres) e uma descrição válida.");
                voltar("modulos" . ($id ? "&editar=$id" : ""));
            }

            if ($id > 0) {
                $pdo->prepare("UPDATE modulos SET titulo = :t, descricao = :d WHERE id = :id")
                    ->execute([":t" => $titulo, ":d" => $descricao, ":id" => $id]);
                avisar("sucesso", "Módulo atualizado.");
            } else {
                $pdo->prepare("INSERT INTO modulos (titulo, descricao) VALUES (:t, :d)")
                    ->execute([":t" => $titulo, ":d" => $descricao]);
                avisar("sucesso", "Módulo cadastrado.");
            }
            voltar("modulos");
        }

        if ($acao === "modulo_excluir") {
            $id = (int) ($_POST["id"] ?? 0);
            try {
                $pdo->prepare("DELETE FROM modulos WHERE id = :id")->execute([":id" => $id]);
                avisar("sucesso", "Módulo excluído.");
            } catch (PDOException $e) {
                avisar("erro", "Este módulo possui questões e não pode ser excluído.");
            }
            voltar("modulos");
        }

        // ---------------- ALUNOS ----------------
        if ($acao === "aluno_excluir") {
            $id = (int) ($_POST["id"] ?? 0);
            $apagou = $pdo->prepare("DELETE FROM usuarios WHERE id = :id AND tipo = 'aluno'");
            $apagou->execute([":id" => $id]);
            avisar($apagou->rowCount() ? "sucesso" : "erro",
                   $apagou->rowCount() ? "Aluno excluído, junto com o histórico dele." : "Aluno não encontrado.");
            voltar("alunos");
        }

    } catch (PDOException $e) {
        error_log($e->getMessage());
        avisar("erro", "Erro ao acessar o banco de dados.");
        voltar($secao);
    }

    voltar($secao);
}

// ===================================================================
// DADOS PARA A PÁGINA (GET)
// ===================================================================

$flash = $_SESSION["flash"] ?? null;
unset($_SESSION["flash"]);

$erroBanco = null;
$modulos = [];

try {

    $modulos = $pdo->query("SELECT id, titulo, descricao FROM modulos ORDER BY id")->fetchAll();

    if ($secao === "geral") {
        $stats = [
            "alunos"    => (int) $pdo->query("SELECT COUNT(*) FROM usuarios WHERE tipo = 'aluno'")->fetchColumn(),
            "modulos"   => count($modulos),
            "questoes"  => (int) $pdo->query("SELECT COUNT(*) FROM questoes")->fetchColumn(),
            "provas"    => (int) $pdo->query("SELECT COUNT(*) FROM tentativas")->fetchColumn(),
            "media"     => $pdo->query("SELECT AVG(nota) FROM tentativas")->fetchColumn(),
        ];
    }

    if ($secao === "questoes") {
        $filtro = (int) ($_GET["modulo"] ?? 0);
        $sql = "SELECT q.*, m.titulo AS modulo FROM questoes q
                JOIN modulos m ON m.id = q.modulo_id";
        $params = [];
        if ($filtro > 0) {
            $sql .= " WHERE q.modulo_id = :m";
            $params[":m"] = $filtro;
        }
        $sql .= " ORDER BY q.modulo_id, q.id";
        $consulta = $pdo->prepare($sql);
        $consulta->execute($params);
        $listaQuestoes = $consulta->fetchAll();
        $totalQuestoes = (int) $pdo->query("SELECT COUNT(*) FROM questoes")->fetchColumn();

        $edicao = null;
        $editarId = (int) ($_GET["editar"] ?? 0);
        if ($editarId > 0) {
            $c = $pdo->prepare("SELECT * FROM questoes WHERE id = :id");
            $c->execute([":id" => $editarId]);
            $edicao = $c->fetch() ?: null;
        }
    }

    if ($secao === "modulos") {
        $contagem = $pdo->query(
            "SELECT m.id, COUNT(q.id) AS questoes
             FROM modulos m LEFT JOIN questoes q ON q.modulo_id = m.id GROUP BY m.id"
        )->fetchAll(PDO::FETCH_KEY_PAIR);

        $edicao = null;
        $editarId = (int) ($_GET["editar"] ?? 0);
        foreach ($modulos as $m) {
            if ($m["id"] == $editarId) {
                $edicao = $m;
            }
        }
    }

    if ($secao === "alunos") {
        $alunos = $pdo->query(
            "SELECT u.id, u.nome, u.email, u.data_cadastro,
                    COUNT(t.id) AS provas, AVG(t.nota) AS media
             FROM usuarios u LEFT JOIN tentativas t ON t.usuario_id = u.id
             WHERE u.tipo = 'aluno'
             GROUP BY u.id, u.nome, u.email, u.data_cadastro
             ORDER BY u.nome"
        )->fetchAll();
    }

    if ($secao === "resultados" || $secao === "geral") {
        $recentes = $pdo->query(
            "SELECT t.data_realizacao, t.nota, u.nome, u.email,
                    (SELECT COUNT(*) FROM respostas_tentativa r WHERE r.tentativa_id = t.id) AS total,
                    (SELECT COALESCE(SUM(r.correta), 0) FROM respostas_tentativa r WHERE r.tentativa_id = t.id) AS acertos
             FROM tentativas t JOIN usuarios u ON u.id = t.usuario_id
             ORDER BY t.data_realizacao DESC, t.id DESC LIMIT " . ($secao === "geral" ? 5 : 50)
        )->fetchAll();
    }

    if ($secao === "resultados") {
        $porModulo = $pdo->query(
            "SELECT m.titulo, COUNT(r.id) AS respostas, COALESCE(SUM(r.correta), 0) AS acertos
             FROM modulos m
             LEFT JOIN questoes q ON q.modulo_id = m.id
             LEFT JOIN respostas_tentativa r ON r.questao_id = q.id
             GROUP BY m.id, m.titulo ORDER BY m.id"
        )->fetchAll();
    }

} catch (PDOException $e) {
    error_log($e->getMessage());
    $erroBanco = "Não foi possível consultar o banco de dados. Verifique se o arquivo sql/banco.sql foi importado.";
}

$nomeAdmin = $_SESSION["usuario_nome"] ?? "Administrador";

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Painel administrativo da plataforma História em Foco.">

    <title>Administração | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/dashboard.css">
    <link rel="stylesheet" href="../assets/css/admin.css">

    <script src="../assets/js/dashboard.js" defer></script>
    <script src="../assets/js/admin.js" defer></script>
</head>

<body class="dashboard-page admin-page">

    <div class="dashboard-layout">

        <!-- MENU LATERAL -->

        <aside class="sidebar" id="sidebar">

            <a href="../index.html" class="logo sidebar-logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <div class="sidebar-label">
                MENU ADMINISTRATIVO
            </div>

            <nav class="sidebar-navigation">
                <?php foreach ($secoes as $chave => [$rotulo, $icone]): ?>
                    <a href="admin.php?secao=<?= h($chave) ?>"
                       class="sidebar-link<?= $chave === $secao ? " active" : "" ?>">
                        <span class="sidebar-icon"><?= h($icone) ?></span>
                        <span><?= h($rotulo) ?></span>
                    </a>
                <?php endforeach; ?>
            </nav>

            <div class="sidebar-bottom">

                <div class="sidebar-bottom-label">SUA CONTA</div>

                <div class="sidebar-user">
                    <div class="user-avatar"><?= h(mb_strtoupper(mb_substr($nomeAdmin, 0, 1))) ?></div>
                    <div class="sidebar-user-info">
                        <strong><?= h($nomeAdmin) ?></strong>
                        <span>Administração</span>
                    </div>
                </div>

                <a href="logout.php" class="sidebar-link logout-link">
                    <span class="sidebar-icon">↪</span>
                    <span>Sair da conta</span>
                </a>

                <div class="sidebar-footer">
                    História em Foco © <span id="current-year"></span>
                </div>

            </div>

        </aside>

        <!-- ÁREA PRINCIPAL -->

        <main class="dashboard-main">

            <header class="dashboard-topbar">

                <div class="topbar-left">

                    <button class="sidebar-toggle" id="sidebar-toggle" type="button"
                            aria-label="Abrir menu" aria-expanded="false">☰</button>

                    <div>
                        <span class="breadcrumb">Administração /</span>
                        <strong><?= h($secoes[$secao][0]) ?></strong>
                    </div>

                </div>

                <div class="topbar-right">
                    <div class="topbar-welcome">
                        <span>Painel de controle</span>
                        <strong><?= h($nomeAdmin) ?></strong>
                    </div>
                    <div class="topbar-avatar"><?= h(mb_strtoupper(mb_substr($nomeAdmin, 0, 1))) ?></div>
                </div>

            </header>

            <div class="dashboard-container">

                <section class="dashboard-welcome">
                    <div>
                        <span class="eyebrow">GERENCIAMENTO DA PLATAFORMA</span>
                        <h1><?= h($secoes[$secao][0]) ?></h1>
                    </div>
                </section>

                <?php if ($flash): ?>
                    <div class="admin-flash admin-flash-<?= h($flash["tipo"]) ?>" role="status">
                        <?= h($flash["mensagem"]) ?>
                    </div>
                <?php endif; ?>

                <?php if ($erroBanco): ?>
                    <div class="admin-flash admin-flash-erro" role="alert"><?= h($erroBanco) ?></div>
                <?php elseif ($secao === "geral"): ?>

                    <section class="dashboard-stats">

                        <article class="stat-card">
                            <div class="stat-top">
                                <span class="stat-label">Alunos cadastrados</span>
                                <span class="stat-icon progress-icon">♙</span>
                            </div>
                            <strong class="stat-value"><?= $stats["alunos"] ?></strong>
                            <span class="stat-description">Contas de alunos</span>
                        </article>

                        <article class="stat-card">
                            <div class="stat-top">
                                <span class="stat-label">Módulos</span>
                                <span class="stat-icon modules-icon">▤</span>
                            </div>
                            <strong class="stat-value"><?= $stats["modulos"] ?></strong>
                            <span class="stat-description">Temas históricos</span>
                        </article>

                        <article class="stat-card">
                            <div class="stat-top">
                                <span class="stat-label">Questões cadastradas</span>
                                <span class="stat-icon exams-icon">✓</span>
                            </div>
                            <strong class="stat-value"><?= $stats["questoes"] ?></strong>
                            <span class="stat-description">
                                <?= $stats["questoes"] < 10 ? "Cadastre ao menos 10 para uma prova completa" : "Banco de questões" ?>
                            </span>
                        </article>

                        <article class="stat-card">
                            <div class="stat-top">
                                <span class="stat-label">Provas realizadas</span>
                                <span class="stat-icon average-icon">★</span>
                            </div>
                            <strong class="stat-value"><?= $stats["provas"] ?></strong>
                            <span class="stat-description">
                                <?= $stats["media"] !== null && $stats["media"] !== false
                                    ? "Média geral: " . number_format((float) $stats["media"], 1, ",", ".") . "%"
                                    : "Nenhuma prova ainda" ?>
                            </span>
                        </article>

                    </section>

                    <section class="admin-section">
                        <div class="section-title-row">
                            <div>
                                <span class="eyebrow">ACOMPANHAMENTO</span>
                                <h2>Últimas provas</h2>
                            </div>
                            <a class="text-link" href="admin.php?secao=resultados">Ver todos →</a>
                        </div>
                        <?php include __DIR__ . "/admin_tabela_resultados.php"; ?>
                    </section>

                <?php elseif ($secao === "questoes"): ?>

                    <section class="admin-section">

                        <div class="section-title-row">
                            <div>
                                <span class="eyebrow">AVALIAÇÕES</span>
                                <h2><?= $edicao ? "Editar questão #" . (int) $edicao["id"] : "Nova questão" ?></h2>
                                <p>A prova sorteia 10 questões do banco, de todos os módulos.</p>
                            </div>
                        </div>

                        <form method="POST" action="admin.php?secao=questoes" class="admin-form">
                            <?= csrfCampo() ?>
                            <input type="hidden" name="acao" value="questao_salvar">
                            <input type="hidden" name="id" value="<?= $edicao ? (int) $edicao["id"] : 0 ?>">

                            <label for="q-modulo">Módulo</label>
                            <select id="q-modulo" name="modulo_id" required>
                                <?php foreach ($modulos as $m): ?>
                                    <option value="<?= (int) $m["id"] ?>"
                                        <?= $edicao && $edicao["modulo_id"] == $m["id"] ? "selected" : "" ?>>
                                        <?= h($m["titulo"]) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>

                            <label for="q-enunciado">Enunciado</label>
                            <textarea id="q-enunciado" name="enunciado" rows="3" maxlength="2000" required><?= h($edicao["enunciado"] ?? "") ?></textarea>

                            <?php foreach (["a", "b", "c", "d"] as $l): ?>
                                <label for="q-<?= $l ?>">Alternativa <?= strtoupper($l) ?></label>
                                <input type="text" id="q-<?= $l ?>" name="alternativa_<?= $l ?>"
                                       maxlength="500" required
                                       value="<?= h($edicao["alternativa_$l"] ?? "") ?>">
                            <?php endforeach; ?>

                            <label for="q-correta">Alternativa correta</label>
                            <select id="q-correta" name="alternativa_correta" required>
                                <?php foreach (["A", "B", "C", "D"] as $l): ?>
                                    <option value="<?= $l ?>"
                                        <?= $edicao && $edicao["alternativa_correta"] === $l ? "selected" : "" ?>><?= $l ?></option>
                                <?php endforeach; ?>
                            </select>

                            <div class="admin-form-actions">
                                <button type="submit" class="button button-primary">
                                    <?= $edicao ? "Salvar alterações" : "Cadastrar questão" ?>
                                </button>
                                <?php if ($edicao): ?>
                                    <a href="admin.php?secao=questoes" class="button button-outline">Cancelar</a>
                                <?php endif; ?>
                            </div>
                        </form>

                    </section>

                    <section class="admin-section">

                        <div class="section-title-row">
                            <div>
                                <span class="eyebrow">BANCO DE QUESTÕES</span>
                                <h2><?= (int) $totalQuestoes ?> questões</h2>
                            </div>
                            <form method="GET" action="admin.php" class="admin-filter">
                                <input type="hidden" name="secao" value="questoes">
                                <label for="filtro-modulo" class="sr-only">Filtrar por módulo</label>
                                <select id="filtro-modulo" name="modulo" onchange="this.form.submit()">
                                    <option value="0">Todos os módulos</option>
                                    <?php foreach ($modulos as $m): ?>
                                        <option value="<?= (int) $m["id"] ?>" <?= $filtro == $m["id"] ? "selected" : "" ?>>
                                            <?= h($m["titulo"]) ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </form>
                        </div>

                        <div class="admin-table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>#</th><th>Módulo</th><th>Enunciado</th><th>Correta</th><th>Ações</th></tr>
                                </thead>
                                <tbody>
                                <?php foreach ($listaQuestoes as $q): ?>
                                    <tr>
                                        <td><?= (int) $q["id"] ?></td>
                                        <td><?= h($q["modulo"]) ?></td>
                                        <td><?= h($q["enunciado"]) ?></td>
                                        <td><?= h($q["alternativa_correta"]) ?></td>
                                        <td class="admin-actions">
                                            <a class="button button-outline admin-small"
                                               href="admin.php?secao=questoes&amp;editar=<?= (int) $q["id"] ?>">Editar</a>
                                            <form method="POST" action="admin.php?secao=questoes"
                                                  data-confirmar="Excluir esta questão?">
                                                <?= csrfCampo() ?>
                                                <input type="hidden" name="acao" value="questao_excluir">
                                                <input type="hidden" name="id" value="<?= (int) $q["id"] ?>">
                                                <button type="submit" class="button button-outline admin-small admin-danger">Excluir</button>
                                            </form>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                                <?php if (!$listaQuestoes): ?>
                                    <tr><td colspan="5" class="admin-empty">Nenhuma questão encontrada.</td></tr>
                                <?php endif; ?>
                                </tbody>
                            </table>
                        </div>

                    </section>

                <?php elseif ($secao === "modulos"): ?>

                    <section class="admin-section">
                        <div class="section-title-row">
                            <div>
                                <span class="eyebrow">ORGANIZAÇÃO DO CURSO</span>
                                <h2><?= $edicao ? "Editar módulo #" . (int) $edicao["id"] : "Novo módulo" ?></h2>
                            </div>
                        </div>

                        <form method="POST" action="admin.php?secao=modulos" class="admin-form">
                            <?= csrfCampo() ?>
                            <input type="hidden" name="acao" value="modulo_salvar">
                            <input type="hidden" name="id" value="<?= $edicao ? (int) $edicao["id"] : 0 ?>">

                            <label for="m-titulo">Título</label>
                            <input type="text" id="m-titulo" name="titulo" maxlength="150" required
                                   value="<?= h($edicao["titulo"] ?? "") ?>">

                            <label for="m-descricao">Descrição</label>
                            <textarea id="m-descricao" name="descricao" rows="3" maxlength="2000"><?= h($edicao["descricao"] ?? "") ?></textarea>

                            <div class="admin-form-actions">
                                <button type="submit" class="button button-primary">
                                    <?= $edicao ? "Salvar alterações" : "Cadastrar módulo" ?>
                                </button>
                                <?php if ($edicao): ?>
                                    <a href="admin.php?secao=modulos" class="button button-outline">Cancelar</a>
                                <?php endif; ?>
                            </div>
                        </form>
                    </section>

                    <section class="admin-section">
                        <div class="admin-table-wrap">
                            <table class="admin-table">
                                <thead><tr><th>#</th><th>Título</th><th>Questões</th><th>Ações</th></tr></thead>
                                <tbody>
                                <?php foreach ($modulos as $m): ?>
                                    <tr>
                                        <td><?= (int) $m["id"] ?></td>
                                        <td>
                                            <strong><?= h($m["titulo"]) ?></strong><br>
                                            <small><?= h($m["descricao"]) ?></small>
                                        </td>
                                        <td><?= (int) ($contagem[$m["id"]] ?? 0) ?></td>
                                        <td class="admin-actions">
                                            <a class="button button-outline admin-small"
                                               href="admin.php?secao=modulos&amp;editar=<?= (int) $m["id"] ?>">Editar</a>
                                            <form method="POST" action="admin.php?secao=modulos"
                                                  data-confirmar="Excluir este módulo?">
                                                <?= csrfCampo() ?>
                                                <input type="hidden" name="acao" value="modulo_excluir">
                                                <input type="hidden" name="id" value="<?= (int) $m["id"] ?>">
                                                <button type="submit" class="button button-outline admin-small admin-danger">Excluir</button>
                                            </form>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                        <p class="admin-note">
                            O texto das aulas ainda fica no arquivo <code>assets/js/aula.js</code>;
                            aqui você gerencia os módulos usados nas questões e nas provas.
                        </p>
                    </section>

                <?php elseif ($secao === "alunos"): ?>

                    <section class="admin-section">
                        <div class="admin-table-wrap">
                            <table class="admin-table">
                                <thead>
                                    <tr><th>Nome</th><th>E-mail</th><th>Cadastro</th><th>Provas</th><th>Média</th><th>Ações</th></tr>
                                </thead>
                                <tbody>
                                <?php foreach ($alunos as $a): ?>
                                    <tr>
                                        <td><?= h($a["nome"]) ?></td>
                                        <td><?= h($a["email"]) ?></td>
                                        <td><?= h(dataBR($a["data_cadastro"], false)) ?></td>
                                        <td><?= (int) $a["provas"] ?></td>
                                        <td><?= $a["media"] !== null ? number_format((float) $a["media"], 1, ",", ".") . "%" : "—" ?></td>
                                        <td class="admin-actions">
                                            <form method="POST" action="admin.php?secao=alunos"
                                                  data-confirmar="Excluir este aluno e todo o histórico dele?">
                                                <?= csrfCampo() ?>
                                                <input type="hidden" name="acao" value="aluno_excluir">
                                                <input type="hidden" name="id" value="<?= (int) $a["id"] ?>">
                                                <button type="submit" class="button button-outline admin-small admin-danger">Excluir</button>
                                            </form>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                                <?php if (!$alunos): ?>
                                    <tr><td colspan="6" class="admin-empty">Nenhum aluno cadastrado.</td></tr>
                                <?php endif; ?>
                                </tbody>
                            </table>
                        </div>
                    </section>

                <?php elseif ($secao === "resultados"): ?>

                    <section class="admin-section">
                        <div class="section-title-row">
                            <div>
                                <span class="eyebrow">ACOMPANHAMENTO</span>
                                <h2>Aproveitamento por módulo</h2>
                                <p>Percentual de acertos considerando todas as respostas dos alunos.</p>
                            </div>
                        </div>
                        <div class="admin-table-wrap">
                            <table class="admin-table">
                                <thead><tr><th>Módulo</th><th>Respostas</th><th>Acertos</th><th>Aproveitamento</th></tr></thead>
                                <tbody>
                                <?php foreach ($porModulo as $p): ?>
                                    <tr>
                                        <td><?= h($p["titulo"]) ?></td>
                                        <td><?= (int) $p["respostas"] ?></td>
                                        <td><?= (int) $p["acertos"] ?></td>
                                        <td><?= $p["respostas"] > 0 ? round($p["acertos"] / $p["respostas"] * 100) . "%" : "—" ?></td>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section class="admin-section">
                        <div class="section-title-row">
                            <div>
                                <h2>Últimas 50 provas</h2>
                            </div>
                        </div>
                        <?php include __DIR__ . "/admin_tabela_resultados.php"; ?>
                    </section>

                <?php endif; ?>

            </div>

        </main>

    </div>

    <div class="sidebar-overlay" id="sidebar-overlay"></div>

    <div class="dashboard-toast" id="dashboard-toast"
         role="status" aria-live="polite"></div>

</body>
</html>
