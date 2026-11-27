
// ========================================
// HISTÓRIA EM FOCO
// PAINEL DE DESEMPENHO
// ========================================


const averageGrade = document.getElementById("average-grade");
const totalExams = document.getElementById("total-exams");
const bestGrade = document.getElementById("best-grade");
const totalCorrect = document.getElementById("total-correct");

const emptySection = document.getElementById("performance-empty");

const chartSection = document.getElementById("chart-section");
const chartBars = document.getElementById("chart-bars");
const chartDescription = document.getElementById("chart-description");

const topicSection = document.getElementById("topic-section");
const topicList = document.getElementById("topic-performance-list");

const historySection = document.getElementById("exam-history-section");
const historyList = document.getElementById("exam-history-list");

const historyCounter = document.getElementById("history-counter");
const historyFilter = document.getElementById("history-filter");

const currentYear = document.getElementById("current-year");

let examHistory = [];


// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function createElement(tag, className, content) {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content !== undefined) {
        element.textContent = content;
    }

    return element;

}


function getGrade(result) {

    if (!result.total || result.total <= 0) {
        return 0;
    }

    return (result.correct / result.total) * 10;

}


function formatGrade(value) {

    return Number(value).toFixed(1).replace(".", ",");

}


function formatDate(dateValue) {

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "Data não disponível";
    }

    return date.toLocaleDateString("pt-BR");

}


// ========================================
// CARREGAR HISTÓRICO
// ========================================

async function loadHistory() {

    try {

        const response = await fetch("api_tentativas.php", {
            credentials: "same-origin"
        });

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const parsedHistory = await response.json();

        if (Array.isArray(parsedHistory)) {

            examHistory = parsedHistory
                .filter(item =>
                    item &&
                    Array.isArray(item.questions) &&
                    Number.isFinite(Number(item.total)) &&
                    Number(item.total) > 0 &&
                    Number.isFinite(Number(item.correct))
                )
                .sort((a, b) =>
                    new Date(b.date).getTime() -
                    new Date(a.date).getTime()
                );

        }

    } catch (error) {

        console.error(
            "Não foi possível carregar o histórico:",
            error
        );

        examHistory = [];

    }

}


// ========================================
// RESUMO GERAL
// ========================================

function renderStatistics() {

    const examCount = examHistory.length;

    if (examCount === 0) {

        averageGrade.textContent = "0,0";
        totalExams.textContent = "0";
        bestGrade.textContent = "0,0";
        totalCorrect.textContent = "0";

        return;

    }

    const grades = examHistory.map(getGrade);

    const average =
        grades.reduce((sum, grade) => sum + grade, 0) / examCount;

    const best = Math.max(...grades);

    const correctAnswers = examHistory.reduce(
        (sum, result) => sum + Number(result.correct),
        0
    );

    averageGrade.textContent = formatGrade(average);

    totalExams.textContent = examCount;

    bestGrade.textContent = formatGrade(best);

    totalCorrect.textContent = correctAnswers;

}


// ========================================
// AVALIAÇÃO DO GRÁFICO
// ========================================

function getFilteredHistory() {

    const filterValue = historyFilter.value;

    if (filterValue === "all") {
        return examHistory;
    }

    return examHistory.slice(
        0,
        Number(filterValue)
    );

}


// ========================================
// CRIAR GRÁFICO DE NOTAS
// ========================================

function renderChart() {

    chartBars.replaceChildren();

    const filteredHistory = getFilteredHistory();

    const chartHistory = filteredHistory
        .slice(0, 10)
        .reverse();

    if (chartHistory.length === 0) {

        chartDescription.textContent =
            "Ainda não existem avaliações para exibir.";

        return;

    }

    chartHistory.forEach((result, index) => {

        const grade = getGrade(result);

        const percentage = Math.max(
            2,
            (grade / 10) * 100
        );

        const column = createElement(
            "div",
            "chart-column"
        );

        const value = createElement(
            "span",
            "chart-bar-value",
            formatGrade(grade)
        );

        const barArea = createElement(
            "div",
            "chart-bar-area"
        );

        const bar = createElement(
            "div",
            "chart-bar"
        );

        bar.style.height = `${percentage}%`;

        bar.setAttribute(
            "title",
            `Avaliação ${index + 1}: nota ${formatGrade(grade)}`
        );

        bar.setAttribute("role", "img");

        bar.setAttribute(
            "aria-label",
            `Nota ${formatGrade(grade)} de 10`
        );

        const date = createElement(
            "span",
            "chart-bar-date",
            formatDate(result.date)
        );

        barArea.appendChild(bar);

        column.append(
            value,
            barArea,
            date
        );

        chartBars.appendChild(column);

    });

    chartDescription.textContent =
        filteredHistory.length > 10
            ? `Mostrando as 10 avaliações mais recentes de ${filteredHistory.length} selecionadas.`
            : `Exibindo ${chartHistory.length} avaliações em ordem cronológica.`;

}


// ========================================
// DESEMPENHO POR CONTEÚDO
// ========================================

function renderTopicPerformance() {

    topicList.replaceChildren();

    const topicResults = {};

    examHistory.forEach(result => {

        result.questions.forEach(question => {

            const topic = question.topic || "Outros conteúdos";

            if (!topicResults[topic]) {

                topicResults[topic] = {
                    correct: 0,
                    total: 0
                };

            }

            topicResults[topic].total++;

            if (question.selected === question.correctAnswer) {

                topicResults[topic].correct++;

            }

        });

    });

    const topics = Object.entries(topicResults)
        .sort((a, b) =>
            b[1].total - a[1].total
        );

    if (topics.length === 0) {

        const message = createElement(
            "p",
            "topic-empty-message",
            "Ainda não existem questões registradas para analisar."
        );

        topicList.appendChild(message);

        return;

    }

    topics.forEach(([topic, data]) => {

        const percentage = Math.round(
            (data.correct / data.total) * 100
        );

        const item = createElement(
            "div",
            "topic-performance-item"
        );

        const top = createElement(
            "div",
            "topic-performance-top"
        );

        const name = createElement(
            "strong",
            "",
            topic
        );

        const result = createElement(
            "span",
            "",
            `${percentage}%`
        );

        top.append(name, result);

        const bottom = createElement(
            "div",
            "topic-performance-bottom"
        );

        const track = createElement(
            "div",
            "topic-performance-track"
        );

        const progress = createElement(
            "div",
            ""
        );

        progress.style.width = `${percentage}%`;

        const description = createElement(
            "small",
            "",
            `${data.correct} de ${data.total} acertos`
        );

        track.appendChild(progress);

        bottom.append(track, description);

        item.append(top, bottom);

        topicList.appendChild(item);

    });

}


// ========================================
// LISTA DE AVALIAÇÕES ANTERIORES
// ========================================

function renderExamHistory() {

    historyList.replaceChildren();

    const filteredHistory = getFilteredHistory();

    historyCounter.textContent =
        `${filteredHistory.length} ${filteredHistory.length === 1 ? "avaliação" : "avaliações"}`;

    filteredHistory.forEach((result, index) => {

        const row = document.createElement("tr");

        const grade = getGrade(result);

        const dateCell = createElement(
            "td",
            "",
            formatDate(result.date)
        );

        const titleCell = createElement(
            "td",
            "",
            `Avaliação ${examHistory.length - examHistory.indexOf(result)}`
        );

        const correctCell = createElement(
            "td",
            "",
            `${result.correct}/${result.total}`
        );

        const gradeCell = document.createElement("td");

        const gradeValue = createElement(
            "strong",
            "history-grade",
            formatGrade(grade)
        );

        gradeCell.appendChild(gradeValue);

        const percentageCell = document.createElement("td");

        const status = createElement(
            "span",
            "history-status",
            `${Math.round((grade / 10) * 100)}% de aproveitamento`
        );

        percentageCell.appendChild(status);

        row.append(
            titleCell,
            dateCell,
            correctCell,
            gradeCell,
            percentageCell
        );

        historyList.appendChild(row);

    });

}


// ========================================
// ESTADO VAZIO OU COM DADOS
// ========================================

function renderPage() {

    const hasHistory = examHistory.length > 0;

    emptySection.hidden = hasHistory;

    chartSection.hidden = !hasHistory;

    topicSection.hidden = !hasHistory;

    historySection.hidden = !hasHistory;

    renderStatistics();

    renderChart();

    renderTopicPerformance();

    renderExamHistory();

}


// ========================================
// ALTERAR FILTRO
// ========================================

historyFilter.addEventListener("change", () => {

    renderChart();

    renderExamHistory();

});


// ========================================
// ANO DO RODAPÉ
// ========================================

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// ========================================
// INICIALIZAR
// ========================================

loadHistory().then(renderPage);
