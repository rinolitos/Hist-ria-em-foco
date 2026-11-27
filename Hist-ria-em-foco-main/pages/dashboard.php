<?php
require_once __DIR__ . "/../assets/config/protecao.php";
exigirLogin();
require_once __DIR__ . "/../assets/config/conexao.php";

$provas = 0;
$media = null;
$melhor = null;
$acertosTotal = 0;
$respostasTotal = 0;
$recentes = [];

try {

    $resumo = $pdo->prepare(
        "SELECT COUNT(*) AS provas, AVG(nota) AS media, MAX(nota) AS melhor
         FROM tentativas WHERE usuario_id = :id"
    );
    $resumo->execute([":id" => (int) $_SESSION["usuario_id"]]);
    $r = $resumo->fetch();
    $provas = (int) $r["provas"];
    $media  = $r["media"] !== null ? (float) $r["media"] : null;
    $melhor = $r["melhor"] !== null ? (float) $r["melhor"] : null;

    $contagem = $pdo->prepare(
        "SELECT COUNT(*) AS respostas, COALESCE(SUM(r.correta), 0) AS acertos
         FROM respostas_tentativa r
         JOIN tentativas t ON t.id = r.tentativa_id
         WHERE t.usuario_id = :id"
    );
    $contagem->execute([":id" => (int) $_SESSION["usuario_id"]]);
    $c = $contagem->fetch();
    $respostasTotal = (int) $c["respostas"];
    $acertosTotal   = (int) $c["acertos"];

    $ultimas = $pdo->prepare(
        "SELECT t.data_realizacao, t.nota,
                (SELECT COUNT(*) FROM respostas_tentativa r WHERE r.tentativa_id = t.id) AS total,
                (SELECT COALESCE(SUM(r.correta), 0) FROM respostas_tentativa r WHERE r.tentativa_id = t.id) AS acertos
         FROM tentativas t WHERE t.usuario_id = :id
         ORDER BY t.data_realizacao DESC, t.id DESC LIMIT 3"
    );
    $ultimas->execute([":id" => (int) $_SESSION["usuario_id"]]);
    $recentes = $ultimas->fetchAll();

} catch (PDOException $e) {
    error_log($e->getMessage());
}

function formatarPorcentagem($valor) {
    return $valor === null ? "--" : number_format($valor, 1, ",", ".") . "%";
}

function quandoFoi($dataUtc) {
    $d = new DateTime($dataUtc, new DateTimeZone("UTC"));
    $d->setTimezone(new DateTimeZone("America/Sao_Paulo"));
    $hoje = new DateTime("now", new DateTimeZone("America/Sao_Paulo"));
    $dias = (int) $hoje->setTime(0, 0)->diff((clone $d)->setTime(0, 0))->format("%a");
    if ($dias === 0) return "Hoje";
    if ($dias === 1) return "Ontem";
    return $d->format("d/m/Y");
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Acompanhe seus estudos na plataforma História em Foco.">

    <title>Dashboard | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/dashboard.css">

    <script src="../assets/js/dashboard.js" defer></script>
</head>

<body class="dashboard-page">

    <div class="dashboard-layout">

        <!-- MENU LATERAL -->

        <aside class="sidebar" id="sidebar">

            <a href="../index.html" class="logo sidebar-logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <div class="sidebar-label">
                MENU PRINCIPAL
            </div>

            <nav class="sidebar-navigation">

                <a href="dashboard.php" class="sidebar-link active">
                    <span class="sidebar-icon">⌂</span>
                    <span>Visão geral</span>
                </a>

                <a href="cursos.php" class="sidebar-link">
                    <span class="sidebar-icon">▤</span>
                    <span>Meus conteúdos</span>
                </a>

                <a href="prova.php" class="sidebar-link" data-coming-soon>
                    <span class="sidebar-icon">✓</span>
                    <span>Avaliações</span>
                    <span class="menu-badge">Em breve</span>
                </a>

                <a href="desempenho.php" class="sidebar-link" data-coming-soon>
                    <span class="sidebar-icon">▥</span>
                    <span>Meu desempenho</span>
                    <span class="menu-badge">Em breve</span>
                </a>

            </nav>

            <div class="sidebar-bottom">

                <div class="sidebar-bottom-label">
                    SUA CONTA
                </div>

                <div class="sidebar-user">

                  <div class="user-avatar">
                    <?= strtoupper(substr($_SESSION["usuario_nome"] ?? "E", 0, 1)) ?>
                    </div>

                    <div class="sidebar-user-info">
                        <span><?= htmlspecialchars($_SESSION["usuario_nome"] ?? "Estudante", ENT_QUOTES, "UTF-8") ?></span>
                        <span>Aluno</span>
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

                    <button
                        class="sidebar-toggle"
                        id="sidebar-toggle"
                        type="button"
                        aria-label="Abrir menu"
                        aria-expanded="false"
                    >
                        ☰
                    </button>

                    <div>
                        <span class="breadcrumb">Área do aluno /</span>
                        <strong>Visão geral</strong>
                    </div>

                </div>

                <div class="topbar-right">

                    <div class="topbar-welcome">
                        <span>Bem-vindo(a),</span>
                        <strong><?= htmlspecialchars($_SESSION["usuario_nome"] ?? "Estudante", ENT_QUOTES, "UTF-8") ?></strong>
                    </div>

                    <div class="topbar-avatar">
                        <?= htmlspecialchars(mb_strtoupper(mb_substr($_SESSION["usuario_nome"] ?? "E", 0, 1)), ENT_QUOTES, "UTF-8") ?>
                    </div>

                </div>

            </header>

            <div class="dashboard-container">

                <!-- BOAS-VINDAS -->

                <section class="dashboard-welcome">

                    <div>
                        <span class="eyebrow">SUA JORNADA DE APRENDIZADO</span>

                        <h1>Olá, <?= htmlspecialchars($_SESSION["usuario_nome"] ?? "estudante", ENT_QUOTES, "UTF-8") ?>!</h1>

                        <p id="welcome-date">
                            Continue sua jornada pelo conhecimento histórico.
                        </p>
                    </div>

                    <a href="cursos.php" class="button button-primary">
                        Explorar conteúdos →
                    </a>

                </section>

                <!-- INDICADORES -->

                <section class="dashboard-stats">

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Melhor nota</span>
                            <span class="stat-icon progress-icon">◴</span>
                        </div>

                        <strong class="stat-value"><?= formatarPorcentagem($melhor) ?></strong>

                        <div class="stat-progress">
                            <div style="width: <?= (int) round($melhor ?? 0) ?>%"></div>
                        </div>

                        <span class="stat-description">
                            Seu melhor resultado em provas
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Questões acertadas</span>
                            <span class="stat-icon modules-icon">▤</span>
                        </div>

                        <strong class="stat-value"><?= $acertosTotal ?> <small>/ <?= $respostasTotal ?></small></strong>

                        <span class="stat-description">
                            Acertos em todas as provas
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Provas realizadas</span>
                            <span class="stat-icon exams-icon">✓</span>
                        </div>

                        <strong class="stat-value"><?= $provas ?></strong>

                        <span class="stat-description">
                            Avaliações concluídas
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Média nas provas</span>
                            <span class="stat-icon average-icon">★</span>
                        </div>

                        <strong class="stat-value"><?= formatarPorcentagem($media) ?></strong>

                        <span class="stat-description">
                            Média de desempenho
                        </span>

                    </article>

                </section>

                <!-- CONTEÚDO PRINCIPAL -->

                <section class="dashboard-content-grid">

                    <!-- CONTINUAR ESTUDANDO -->

                    <article class="continue-card">

                        <div class="continue-header">
                            <span>COMECE POR AQUI</span>
                            <span class="continue-status">Sugestão</span>
                        </div>

                        <div class="continue-content">

                            <span class="continue-category">
                                ANTIGUIDADE
                            </span>

                            <h2>Grécia e Roma Antiga</h2>

                            <p>
                                Conheça as civilizações que influenciaram
                                a política, a filosofia e a cultura ocidental.
                            </p>

                            <a href="aula.php?modulo=grecia-roma" class="button button-primary">
                        Estudar este módulo →
                        </a>

                        </div>

                        <div class="continue-decoration">
                            <span>Α</span>
                        </div>

                    </article>

                    <!-- ATIVIDADES RECENTES -->

                    <article class="recent-card">

                        <div class="section-title-row">

                            <div>
                                <span class="eyebrow">ACOMPANHAMENTO</span>
                                <h2>Atividades recentes</h2>
                            </div>

                        </div>

                        <div class="activity-list">

                            <?php foreach ($recentes as $t): ?>
                                <div class="activity-item">

                                    <div class="activity-icon activity-exam">
                                        ✓
                                    </div>

                                    <div class="activity-info">
                                        <strong>Prova concluída</strong>
                                        <span><?= (int) $t["acertos"] ?> de <?= (int) $t["total"] ?> acertos · <?= formatarPorcentagem((float) $t["nota"]) ?></span>
                                    </div>

                                    <span class="activity-date"><?= htmlspecialchars(quandoFoi($t["data_realizacao"]), ENT_QUOTES, "UTF-8") ?></span>

                                </div>
                            <?php endforeach; ?>

                            <?php if (!$recentes): ?>
                                <div class="activity-item">

                                    <div class="activity-icon activity-study">
                                        ▤
                                    </div>

                                    <div class="activity-info">
                                        <strong>Nenhuma atividade ainda</strong>
                                        <span>Faça sua primeira prova para ver o histórico aqui.</span>
                                    </div>

                                </div>
                            <?php endif; ?>

                        </div>

                    </article>

                </section>

                <!-- MÓDULOS -->

                <section class="dashboard-modules">

                    <div class="section-title-row">

                        <div>
                            <span class="eyebrow">EXPLORE A HISTÓRIA</span>
                            <h2>Seus módulos de estudo</h2>
                            <p>Uma jornada pelos principais acontecimentos históricos.</p>
                        </div>

                        <a href="cursos.php" class="text-link">
                            Ver todos →
                        </a>

                    </div>

                    <div class="dashboard-module-grid">

                        <article class="dashboard-module-card">

                            <div class="module-card-number">01</div>

                            <span class="module-period">ANTIGUIDADE</span>

                            <h3>Grécia e Roma Antiga</h3>

                            <div class="module-card-footer">
                                <span>Disponível</span>
                                <span class="module-progress-dot"></span>
                            </div>

                            <div class="module-card-progress">
                                <div style="width: 0%"></div>
                            </div>

                           <a href="aula.php?modulo=grecia-roma">
                             Acessar módulo →
                            </a>

                        </article>

                        <article class="dashboard-module-card">

                            <div class="module-card-number">02</div>

                            <span class="module-period">IDADE MÉDIA</span>

                            <h3>As Cruzadas</h3>

                            <div class="module-card-footer">
                                <span>Disponível</span>
                                <span class="module-progress-dot"></span>
                            </div>

                            <div class="module-card-progress">
                                <div style="width: 0%"></div>
                            </div>

                            <a href="cursos.php">
                                Acessar módulo →
                            </a>

                        </article>

                        <article class="dashboard-module-card">

                            <div class="module-card-number">03</div>

                            <span class="module-period">IDADE MODERNA</span>

                            <h3>Renascimento</h3>

                            <div class="module-card-footer">
                                <span>Disponível</span>
                                <span class="module-progress-dot"></span>
                            </div>

                            <div class="module-card-progress">
                                <div style="width: 0%"></div>
                            </div>

                            <a href="cursos.php">
                                Acessar módulo →
                            </a>

                        </article>

                        <article class="dashboard-module-card">

                            <div class="module-card-number">04</div>

                            <span class="module-period">IDADE MODERNA</span>

                            <h3>Revolução Francesa</h3>

                            <div class="module-card-footer">
                                <span>Disponível</span>
                                <span class="module-progress-dot"></span>
                            </div>

                            <div class="module-card-progress">
                                <div style="width: 0%"></div>
                            </div>

                            <a href="cursos.php">
                                Acessar módulo →
                            </a>

                        </article>

                    </div>

                </section>

                <!-- MENSAGEM FINAL -->

                <section class="dashboard-quote">

                    <span>“</span>

                    <p>
                        Estudar o passado é compreender melhor
                        as transformações do presente.
                    </p>

                    <small>HISTÓRIA EM FOCO</small>

                </section>

            </div>

        </main>

    </div>

    <div class="sidebar-overlay" id="sidebar-overlay"></div>

    <div class="dashboard-toast" id="dashboard-toast" role="status" aria-live="polite"></div>

</body>
</html>
