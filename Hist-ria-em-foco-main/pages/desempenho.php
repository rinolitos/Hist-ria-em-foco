<?php
require_once __DIR__ . "/../assets/config/protecao.php";
exigirLogin();
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Acompanhe suas notas, avaliações e evolução na plataforma História em Foco.">

    <title>Meu desempenho | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/desempenho.css">

    <script src="../assets/js/desempenho.js" defer></script>
</head>

<body class="performance-page">

    <!-- CABEÇALHO -->

    <header class="performance-header">

        <div class="performance-header-content">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <nav class="performance-navigation">

                <a href="dashboard.php">Área do aluno</a>

                <a href="cursos.php">Conteúdos</a>

               <div class="performance-user">
                 <span class="performance-avatar">
                <?= strtoupper(substr($_SESSION["usuario_nome"] ?? "E", 0, 1)) ?>
                </span>

                <?= htmlspecialchars($_SESSION["usuario_nome"] ?? "Estudante", ENT_QUOTES, "UTF-8") ?>
            </div>

            </nav>

        </div>

    </header>

    <main class="performance-container">

        <!-- BREADCRUMB -->

        <div class="performance-breadcrumb">

            <a href="dashboard.php">Área do aluno</a>

            <span>/</span>

            <strong>Meu desempenho</strong>

        </div>

        <!-- APRESENTAÇÃO -->

        <section class="performance-welcome">

            <div>

                <span class="eyebrow">ACOMPANHE SUA EVOLUÇÃO</span>

                <h1>Meu desempenho</h1>

                <p>
                    Acompanhe seus resultados, identifique seus pontos
                    fortes e continue evoluindo nos estudos.
                </p>

            </div>

            <a href="prova.php" class="button button-primary">
                Nova avaliação →
            </a>

        </section>

        <!-- INDICADORES -->

        <section class="performance-stats">

            <article class="performance-stat-card">

                <div class="performance-stat-icon average-stat">
                    ◷
                </div>

                <span class="performance-stat-label">Média geral</span>

                <strong id="average-grade">0,0</strong>

                <small>De 0 a 10</small>

            </article>

            <article class="performance-stat-card">

                <div class="performance-stat-icon exams-stat">
                    ▤
                </div>

                <span class="performance-stat-label">Provas realizadas</span>

                <strong id="total-exams">0</strong>

                <small>Avaliações concluídas</small>

            </article>

            <article class="performance-stat-card">

                <div class="performance-stat-icon best-stat">
                    ★
                </div>

                <span class="performance-stat-label">Melhor nota</span>

                <strong id="best-grade">0,0</strong>

                <small>Seu melhor resultado</small>

            </article>

            <article class="performance-stat-card">

                <div class="performance-stat-icon correct-stat">
                    ✓
                </div>

                <span class="performance-stat-label">Acertos totais</span>

                <strong id="total-correct">0</strong>

                <small>Questões respondidas corretamente</small>

            </article>

        </section>

        <!-- DESEMPENHO VAZIO -->

        <section class="performance-empty" id="performance-empty" hidden>

            <div class="performance-empty-icon">▥</div>

            <h2>Seu histórico está começando!</h2>

            <p>
                Você ainda não possui avaliações registradas.
                Realize sua primeira prova para acompanhar sua evolução
                e visualizar seus resultados aqui.
            </p>

            <a href="prova.php" class="button button-primary">
                Realizar primeira avaliação →
            </a>

        </section>

        <!-- GRÁFICO -->

        <section class="performance-chart-card" id="chart-section">

            <div class="performance-section-heading">

                <div>
                    <span class="eyebrow">EVOLUÇÃO DAS NOTAS</span>

                    <h2>Histórico de desempenho</h2>

                    <p>
                        Visualize suas notas nas avaliações anteriores.
                    </p>
                </div>

                <label class="history-filter">

                    <span>Exibir:</span>

                    <select id="history-filter">

                        <option value="5">Últimas 5 provas</option>

                        <option value="10">Últimas 10 provas</option>

                        <option value="all">Todas as provas</option>

                    </select>

                </label>

            </div>

            <div class="chart-legend">
                <span class="chart-legend-dot"></span>
                Nota da avaliação
            </div>

            <div class="chart-area">

                <div class="chart-axis">

                    <span>10</span>
                    <span>7,5</span>
                    <span>5</span>
                    <span>2,5</span>
                    <span>0</span>

                </div>

                <div class="chart-content">

                    <div class="chart-guides">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                    <div class="chart-bars" id="chart-bars">

                    </div>

                </div>

            </div>

            <div class="chart-description" id="chart-description">
                Suas avaliações aparecerão neste gráfico.
            </div>

        </section>

        <!-- DESEMPENHO POR CONTEÚDO -->

        <section class="topic-performance-card" id="topic-section">

            <div class="performance-section-heading">

                <div>

                    <span class="eyebrow">ANÁLISE POR CONTEÚDO</span>

                    <h2>Desempenho por matéria</h2>

                    <p>
                        Veja seu aproveitamento nos diferentes temas históricos.
                    </p>

                </div>

            </div>

            <div class="topic-performance-list" id="topic-performance-list">

            </div>

        </section>

        <!-- AVALIAÇÕES ANTERIORES -->

        <section class="exam-history-section" id="exam-history-section">

            <div class="performance-section-heading">

                <div>

                    <span class="eyebrow">SUAS TENTATIVAS</span>

                    <h2>Avaliações anteriores</h2>

                    <p>
                        Consulte as notas e os resultados das provas realizadas.
                    </p>

                </div>

                <span class="history-counter" id="history-counter">
                    0 avaliações
                </span>

            </div>

            <div class="exam-history-table-wrapper">

                <table class="exam-history-table">

                    <thead>

                        <tr>
                            <th>AVALIAÇÃO</th>
                            <th>DATA</th>
                            <th>ACERTOS</th>
                            <th>NOTA</th>
                            <th>APROVEITAMENTO</th>
                        </tr>

                    </thead>

                    <tbody id="exam-history-list">

                    </tbody>

                </table>

            </div>

        </section>

        <!-- FINAL -->

        <section class="performance-footer-card">

            <div>

                <span class="eyebrow">CONTINUE SUA JORNADA</span>

                <h2>Conhecimento se constrói a cada etapa.</h2>

                <p>
                    Continue estudando, revise os conteúdos e faça novas
                    avaliações para acompanhar sua evolução.
                </p>

            </div>

            <div class="performance-footer-buttons">

                <a href="cursos.php" class="button button-outline">
                    Estudar conteúdos
                </a>

                <a href="prova.php" class="button button-primary">
                    Nova avaliação →
                </a>

            </div>

        </section>

    </main>

    <!-- RODAPÉ -->

    <footer class="performance-footer">

        <div class="performance-footer-content">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <span>
                © <span id="current-year"></span> História em Foco.
            </span>

        </div>

    </footer>

</body>
</html>
