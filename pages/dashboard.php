<?php
require_once __DIR__ . "/../assets/config/protecao.php";
exigirLogin();
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

              <div class="topbar-welcome">
                <span>Bem-vindo(a),</span>
                <strong><?= htmlspecialchars($_SESSION["usuario_nome"] ?? "Estudante", ENT_QUOTES, "UTF-8") ?></strong>
               </div>

                    <div class="topbar-avatar">
                    <?= strtoupper(substr($_SESSION["usuario_nome"] ?? "E", 0, 1)) ?>
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
                            <span class="stat-label">Progresso geral</span>
                            <span class="stat-icon progress-icon">◴</span>
                        </div>

                        <strong class="stat-value">--</strong>
                        
                        <div class="stat-progress">
                            <div style="width: 0%"></div>
                        </div>

                        <span class="stat-description">
                            Progresso dos estudos
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Módulos estudados</span>
                            <span class="stat-icon modules-icon">▤</span>
                        </div>

                        <strong class="stat-value">-- <small>/ 08</small></strong>

                        <span class="stat-description">
                            Temas da plataforma
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Provas realizadas</span>
                            <span class="stat-icon exams-icon">✓</span>
                        </div>

                       <strong class="stat-value">--</strong>

                        <span class="stat-description">
                            Avaliações concluídas
                        </span>

                    </article>

                    <article class="stat-card">

                        <div class="stat-top">
                            <span class="stat-label">Média nas provas</span>
                            <span class="stat-icon average-icon">★</span>
                        </div>

                        <strong class="stat-value">--</strong>

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
                            <span>CONTINUE DE ONDE PAROU</span>
                            <span class="continue-status">Em andamento</span>
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

                            <div class="continue-progress-info">
                                <span>Progresso da aula</span>
                                <strong>60%</strong>
                            </div>

                            <div class="continue-progress">
                                <div style="width: 60%"></div>
                            </div>

                          <a href="aula.php" class="button button-primary">
                        Continuar estudando →
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

                            <div class="activity-item">

                                <div class="activity-icon activity-video">
                                    ▶
                                </div>

                                <div class="activity-info">
                                    <strong>Aula de Grécia Antiga</strong>
                                    <span>Conteúdo estudado</span>
                                </div>

                                <span class="activity-date">Hoje</span>

                            </div>

                            <div class="activity-item">

                                <div class="activity-icon activity-exam">
                                    ✓
                                </div>

                                <div class="activity-info">
                                    <strong>Prova de Roma Antiga</strong>
                                    <span>Avaliação concluída</span>
                                </div>

                                <span class="activity-date">Ontem</span>

                            </div>

                            <div class="activity-item">

                                <div class="activity-icon activity-study">
                                    ▤
                                </div>

                                <div class="activity-info">
                                    <strong>Introdução às Cruzadas</strong>
                                    <span>Conteúdo iniciado</span>
                                </div>

                                <span class="activity-date">Anterior</span>

                            </div>

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
                                <span>Em andamento</span>
                                <span class="module-progress-dot ongoing"></span>
                            </div>

                            <div class="module-card-progress">
                                <div style="width: 60%"></div>
                            </div>

                           <a href="aula.php">
                             Acessar módulo →
                            </a>

                        </article>

                        <article class="dashboard-module-card">

                            <div class="module-card-number">02</div>

                            <span class="module-period">IDADE MÉDIA</span>

                            <h3>As Cruzadas</h3>

                            <div class="module-card-footer">
                                <span>Não iniciado</span>
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
                                <span>Não iniciado</span>
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
                                <span>Não iniciado</span>
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
