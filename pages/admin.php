
<?php

require_once __DIR__ . "/../assets/config/protecao.php";
exigirAdmin();

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

                <a href="admin.php" class="sidebar-link active">
                    <span class="sidebar-icon">⌂</span>
                    <span>Visão geral</span>
                </a>

                <a href="#aulas" class="sidebar-link">
                    <span class="sidebar-icon">▤</span>
                    <span>Gerenciar aulas</span>
                </a>

                <a href="#questoes" class="sidebar-link">
                    <span class="sidebar-icon">✓</span>
                    <span>Gerenciar questões</span>
                </a>

                <a href="#modulos" class="sidebar-link">
                    <span class="sidebar-icon">▥</span>
                    <span>Módulos</span>
                </a>

                <a href="#resultados" class="sidebar-link">
                    <span class="sidebar-icon">▧</span>
                    <span>Resultados</span>
                </a>

            </nav>

            <div class="sidebar-bottom">

                <div class="sidebar-bottom-label">
                    SUA CONTA
                </div>

                <div class="sidebar-user">

                    <div class="user-avatar">A</div>

                    <div class="sidebar-user-info">
                        <strong>Administrador</strong>
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
                        <span class="breadcrumb">Administração /</span>
                        <strong>Visão geral</strong>
                    </div>

                </div>

                <div class="topbar-right">

                    <div class="topbar-welcome">
                        <span>Painel de controle</span>
                        <strong>Administrador</strong>
                    </div>

                    <div class="topbar-avatar">A</div>

                </div>

            </header>

            <div class="dashboard-container">

                <!-- BOAS-VINDAS -->

                <section class="dashboard-welcome">

                    <div>
                        <span class="eyebrow">GERENCIAMENTO DA PLATAFORMA</span>

                        <h1>Painel administrativo</h1>

                        <p>
                            Gerencie os conteúdos e acompanhe as atividades
                            da plataforma História em Foco.
                        </p>
                    </div>

                </section>

                <!-- INDICADORES -->

                <section class="dashboard-stats">

                    <article class="stat-card">
                        <div class="stat-top">
                            <span class="stat-label">Alunos cadastrados</span>
                            <span class="stat-icon progress-icon">♙</span>
                        </div>

                        <strong class="stat-value">--</strong>

                        <span class="stat-description">
                            Dados disponíveis após integração
                        </span>
                    </article>

                    <article class="stat-card">
                        <div class="stat-top">
                            <span class="stat-label">Módulos disponíveis</span>
                            <span class="stat-icon modules-icon">▤</span>
                        </div>

                        <strong class="stat-value">08</strong>

                        <span class="stat-description">
                            Temas históricos
                        </span>
                    </article>

                    <article class="stat-card">
                        <div class="stat-top">
                            <span class="stat-label">Questões cadastradas</span>
                            <span class="stat-icon exams-icon">✓</span>
                        </div>

                        <strong class="stat-value">--</strong>

                        <span class="stat-description">
                            Aguardando banco de dados
                        </span>
                    </article>

                    <article class="stat-card">
                        <div class="stat-top">
                            <span class="stat-label">Provas realizadas</span>
                            <span class="stat-icon average-icon">★</span>
                        </div>

                        <strong class="stat-value">--</strong>

                        <span class="stat-description">
                            Resultados dos alunos
                        </span>
                    </article>

                </section>

                <!-- GERENCIAMENTO -->

                <section class="admin-section" id="aulas">

                    <div class="section-title-row">
                        <div>
                            <span class="eyebrow">CONTEÚDO EDUCACIONAL</span>
                            <h2>Gerenciamento de aulas</h2>
                            <p>Organize os conteúdos disponibilizados aos alunos.</p>
                        </div>
                    </div>

                    <div class="admin-card">
                        <div class="admin-card-icon">▤</div>

                        <div>
                            <h3>Gerenciar aulas</h3>
                            <p>
                                Cadastrar, editar e organizar as aulas dos
                                módulos históricos.
                            </p>
                        </div>

                        <span class="admin-status">Em desenvolvimento</span>
                    </div>

                </section>

                <section class="admin-section" id="questoes">

                    <div class="section-title-row">
                        <div>
                            <span class="eyebrow">AVALIAÇÕES</span>
                            <h2>Gerenciamento de questões</h2>
                            <p>Organize as perguntas utilizadas nas provas.</p>
                        </div>
                    </div>

                    <div class="admin-card">
                        <div class="admin-card-icon">✓</div>

                        <div>
                            <h3>Gerenciar questões</h3>
                            <p>
                                Cadastrar enunciados, alternativas e respostas
                                corretas para cada módulo.
                            </p>
                        </div>

                        <span class="admin-status">Em desenvolvimento</span>
                    </div>

                </section>

                <!-- MÓDULOS -->

                <section class="dashboard-modules admin-section" id="modulos">

                    <div class="section-title-row">
                        <div>
                            <span class="eyebrow">ORGANIZAÇÃO DO CURSO</span>
                            <h2>Módulos da plataforma</h2>
                            <p>Os oito temas disponíveis no História em Foco.</p>
                        </div>
                    </div>

                    <div class="dashboard-module-grid">

                        <article class="dashboard-module-card">
                            <div class="module-card-number">01</div>
                            <span class="module-period">ANTIGUIDADE</span>
                            <h3>Grécia e Roma Antiga</h3>
                            <div class="admin-module-status">Módulo 01</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">02</div>
                            <span class="module-period">IDADE MÉDIA</span>
                            <h3>As Cruzadas</h3>
                            <div class="admin-module-status">Módulo 02</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">03</div>
                            <span class="module-period">IDADE MODERNA</span>
                            <h3>Renascimento</h3>
                            <div class="admin-module-status">Módulo 03</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">04</div>
                            <span class="module-period">IDADE CONTEMPORÂNEA</span>
                            <h3>Revolução Francesa</h3>
                            <div class="admin-module-status">Módulo 04</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">05</div>
                            <span class="module-period">IDADE CONTEMPORÂNEA</span>
                            <h3>Revolução Haitiana</h3>
                            <div class="admin-module-status">Módulo 05</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">06</div>
                            <span class="module-period">SÉCULO XX</span>
                            <h3>Primeira Guerra Mundial</h3>
                            <div class="admin-module-status">Módulo 06</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">07</div>
                            <span class="module-period">SÉCULO XX</span>
                            <h3>Segunda Guerra Mundial</h3>
                            <div class="admin-module-status">Módulo 07</div>
                        </article>

                        <article class="dashboard-module-card">
                            <div class="module-card-number">08</div>
                            <span class="module-period">SÉCULO XX</span>
                            <h3>Guerra Fria</h3>
                            <div class="admin-module-status">Módulo 08</div>
                        </article>

                    </div>

                </section>

                <!-- RESULTADOS -->

                <section class="admin-section" id="resultados">

                    <div class="section-title-row">
                        <div>
                            <span class="eyebrow">ACOMPANHAMENTO</span>
                            <h2>Resultados dos alunos</h2>
                            <p>
                                Consulte o desempenho dos estudantes após
                                a integração com o banco de dados.
                            </p>
                        </div>
                    </div>

                    <div class="admin-card">
                        <div class="admin-card-icon">▥</div>

                        <div>
                            <h3>Desempenho e avaliações</h3>
                            <p>
                                Acompanhar notas, provas realizadas e
                                resultados por módulo.
                            </p>
                        </div>

                        <span class="admin-status">Em desenvolvimento</span>
                    </div>

                </section>

                <!-- AVISO -->

                <section class="dashboard-quote">
                    <span>“</span>

                    <p>
                        O conhecimento é a ferramenta que transforma
                        a compreensão da História.
                    </p>

                    <small>HISTÓRIA EM FOCO</small>
                </section>

            </div>

        </main>

    </div>

    <div class="sidebar-overlay" id="sidebar-overlay"></div>

    <div class="dashboard-toast" id="dashboard-toast"
         role="status" aria-live="polite"></div>

</body>
</html>
