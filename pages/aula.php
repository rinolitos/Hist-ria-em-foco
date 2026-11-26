<?php
require_once __DIR__ . "/../assets/config/sessao.php";

// Modo temporário de testes.
// Cria uma sessão de visitante apenas para visualizar as aulas.
if (!isset($_SESSION["usuario_id"])) {
    $_SESSION["usuario_id"] = 0;
    $_SESSION["usuario_nome"] = "Visitante";
    $_SESSION["usuario_tipo"] = "aluno";
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Estude História com aulas organizadas, conteúdos e materiais complementares.">

    <title>Aula | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/aula.css">

    <script src="../assets/js/aula.js" defer></script>
</head>

<body class="lesson-page">

    <header class="lesson-header">

        <div class="lesson-header-content">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <nav class="lesson-header-navigation">

                <a href="dashboard.html">Área do aluno</a>

                <a href="cursos.html" class="lesson-nav-highlight">
                    Meus conteúdos
                </a>

                <div class="lesson-user">
                    <span class="lesson-user-avatar">E</span>
                    <span>Estudante</span>
                </div>

            </nav>

        </div>

    </header>

    <main>

        <section class="lesson-hero">

            <div class="lesson-container">

                <div class="lesson-breadcrumb">
                    <a href="dashboard.html">Área do aluno</a>
                    <span>/</span>
                    <a href="cursos.html">Conteúdos</a>
                    <span>/</span>
                    <strong id="lesson-breadcrumb-title">Aula</strong>
                </div>

                <div class="lesson-hero-content">

                    <div class="lesson-hero-text">

                        <span class="eyebrow" id="lesson-category">
                            CONTEÚDO HISTÓRICO
                        </span>

                        <div class="lesson-module-number" id="lesson-number">
                            MÓDULO 01
                        </div>

                        <h1 id="lesson-title">
                            Carregando conteúdo...
                        </h1>

                        <p id="lesson-short-description">
                            Prepare-se para explorar este período histórico.
                        </p>

                        <div class="lesson-meta">

                            <span>
                                <span class="meta-symbol">▤</span>
                                <span id="lesson-section-count">3 capítulos</span>
                            </span>

                            <span>
                                <span class="meta-symbol">◷</span>
                                Aula escrita
                            </span>

                            <span>
                                <span class="meta-symbol">✓</span>
                                Material de estudo
                            </span>

                        </div>

                    </div>

                    <div class="lesson-hero-decoration">
                        <span id="lesson-hero-letter">H</span>
                        <small>HISTÓRIA EM FOCO</small>
                    </div>

                </div>

            </div>

        </section>

        <section class="lesson-main-area">

            <div class="lesson-container lesson-layout">

                <div class="lesson-main-column">

                    <!-- VIDEOAULA -->

                    <section class="lesson-video-card">

                        <div class="lesson-section-heading">
                            <div>
                                <span class="eyebrow">APRENDA VISUALMENTE</span>
                                <h2>Videoaula</h2>
                            </div>

                            <span class="video-badge">
                                CONTEÚDO COMPLEMENTAR
                            </span>
                        </div>

                        <div class="lesson-video-frame">

                            <iframe
                                id="lesson-video"
                                title="Videoaula de História"
                                hidden
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>

                            <div class="video-placeholder" id="video-placeholder">

                                <div class="video-placeholder-symbol">▶</div>

                                <span class="video-placeholder-label">
                                    HISTÓRIA EM FOCO
                                </span>

                                <h3>Conheça este período histórico</h3>

                                <p>
                                    A videoaula complementar será adicionada
                                    a este módulo.
                                </p>

                            </div>

                        </div>

                        <p class="video-caption">
                            Utilize a videoaula como complemento ao conteúdo escrito.
                        </p>

                    </section>

                    <!-- INTRODUÇÃO -->

                    <section class="lesson-text-card" id="lesson-intro">

                        <div class="lesson-section-heading">
                            <div>
                                <span class="eyebrow">01 — CONTEXTO HISTÓRICO</span>
                                <h2>Introdução</h2>
                            </div>
                        </div>

                        <p id="lesson-introduction"></p>

                    </section>

                    <!-- DESENVOLVIMENTO -->

                    <section class="lesson-development" id="lesson-content">

                        <div class="lesson-section-heading">
                            <div>
                                <span class="eyebrow">02 — APROFUNDAMENTO</span>
                                <h2>Desenvolvimento do conteúdo</h2>
                            </div>
                        </div>

                        <div class="lesson-sections-list" id="lesson-sections"></div>

                    </section>

                    <!-- DATAS IMPORTANTES -->

                    <section class="lesson-text-card" id="lesson-timeline">

                        <div class="lesson-section-heading">
                            <div>
                                <span class="eyebrow">03 — LINHA DO TEMPO</span>
                                <h2>Datas importantes</h2>
                            </div>
                        </div>

                        <div class="lesson-dates-list" id="lesson-dates"></div>

                    </section>

                    <!-- PERSONAGENS -->

                    <section class="lesson-text-card" id="lesson-characters">

                        <div class="lesson-section-heading">
                            <div>
                                <span class="eyebrow">04 — FIGURAS HISTÓRICAS</span>
                                <h2>Personagens importantes</h2>
                            </div>
                        </div>

                        <div class="lesson-people-grid" id="lesson-people"></div>

                    </section>

                    <!-- RESUMO -->

                    <section class="lesson-summary-card" id="lesson-summary-section">

                        <span class="lesson-summary-label">
                            05 — REVISÃO FINAL
                        </span>

                        <h2>Resumo da aula</h2>

                        <p id="lesson-summary"></p>

                    </section>

                    <!-- NAVEGAÇÃO -->

                    <div class="lesson-bottom-navigation">

                        <a href="cursos.html" class="button button-outline">
                            ← Voltar aos conteúdos
                        </a>

                        <a
                            href="prova.html"
                            class="button button-primary"
                            id="start-exam"
                        >
                            Realizar avaliação →
                        </a>

                    </div>

                    <div class="lesson-module-navigation">

                        <a href="#" id="previous-module" hidden>
                            ← Módulo anterior
                        </a>

                        <a href="#" id="next-module" hidden>
                            Próximo módulo →
                        </a>

                    </div>

                </div>

                <!-- MENU LATERAL -->

                <aside class="lesson-sidebar">

                    <div class="lesson-sidebar-card">

                        <span class="eyebrow">NESTA AULA</span>

                        <h3>Conteúdo do módulo</h3>

                        <nav class="lesson-outline">

                            <a href="#lesson-intro">
                                <span>01</span>
                                Introdução
                            </a>

                            <a href="#lesson-content">
                                <span>02</span>
                                Desenvolvimento
                            </a>

                            <a href="#lesson-timeline">
                                <span>03</span>
                                Datas importantes
                            </a>

                            <a href="#lesson-characters">
                                <span>04</span>
                                Personagens históricos
                            </a>

                            <a href="#lesson-summary-section">
                                <span>05</span>
                                Resumo final
                            </a>

                        </nav>

                    </div>

                    <div class="lesson-sidebar-card">

                        <span class="eyebrow">SUA APRENDIZAGEM</span>

                        <h3>Ao concluir esta aula</h3>

                        <ul class="lesson-learning-list">

                            <li>
                                <span>✓</span>
                                Compreender o contexto histórico.
                            </li>

                            <li>
                                <span>✓</span>
                                Reconhecer acontecimentos importantes.
                            </li>

                            <li>
                                <span>✓</span>
                                Identificar personagens históricos.
                            </li>

                            <li>
                                <span>✓</span>
                                Revisar os principais conceitos.
                            </li>

                        </ul>

                    </div>

                    <div class="lesson-all-modules">

                        <span class="eyebrow">BIBLIOTECA</span>

                        <h3>Outros módulos</h3>

                        <nav id="lesson-module-list"></nav>

                    </div>

                </aside>

            </div>

        </section>

    </main>

    <footer class="lesson-footer">

        <div class="lesson-container lesson-footer-content">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <p>Conhecimento que atravessa séculos.</p>

            <span>
                © <span id="current-year"></span> História em Foco.
            </span>

        </div>

    </footer>

    <div class="lesson-toast" id="lesson-toast" role="status" aria-live="polite"></div>

</body>
</html>
