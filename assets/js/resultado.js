
// ========================================
// HISTÓRIA EM FOCO
// RESULTADO E HISTÓRICO DE AVALIAÇÕES
// ========================================

const RESULT_KEY = "historiaEmFoco_lastResult";
const HISTORY_KEY = "historiaEmFoco_examHistory";
const SAVED_ATTEMPT_KEY = "historiaEmFoco_savedAttempt";

const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");

const resultScore = document.getElementById("result-score");
const resultPercentage = document.getElementById("result-percentage");
const resultDate = document.getElementById("result-date");

const resultCorrect = document.getElementById("result-correct");
const resultWrong = document.getElementById("result-wrong");
const resultTotal = document.getElementById("result-total");

const reviewCount = document.getElementById("review-count");
const questionList = document.getElementById("result-question-list");

const scoreCircle = document.getElementById("score-circle");

const currentYear = document.getElementById("current-year");


// ========================================
// ELEMENTOS AUXILIARES
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


// ========================================
// SALVAR A AVALIAÇÃO NO HISTÓRICO
// ========================================

function saveResultToHistory(result) {

    try {

        const savedAttempt = sessionStorage.getItem(SAVED_ATTEMPT_KEY);

        if (savedAttempt === result.date) {
            return;
        }

        const storedHistory = localStorage.getItem(HISTORY_KEY);

        let history = storedHistory
            ? JSON.parse(storedHistory)
            : [];

        if (!Array.isArray(history)) {
            history = [];
        }

        const alreadyExists = history.some(
            item => item.date === result.date
        );

        if (!alreadyExists) {

            history.unshift(result);

            history = history.slice(0, 50);

            localStorage.setItem(
                HISTORY_KEY,
                JSON.stringify(history)
            );

        }

        sessionStorage.setItem(
            SAVED_ATTEMPT_KEY,
            result.date
        );

    } catch (error) {

        console.error(
            "Não foi possível salvar o histórico:",
            error
        );

    }

}


// ========================================
// CARREGAR RESULTADO
// ========================================

function loadResult() {

    let result;

    try {

        const savedResult = sessionStorage.getItem(RESULT_KEY);

        result = savedResult ? JSON.parse(savedResult) : null;

    } catch (error) {

        console.error("Erro ao carregar resultado:", error);

    }

    if (
        !result ||
        !Array.isArray(result.questions) ||
        result.questions.length === 0
    ) {

        showEmptyResult();

        return;

    }

    saveResultToHistory(result);

    renderSummary(result);

    renderQuestionReview(result.questions);

}


// ========================================
// RESULTADO VAZIO
// ========================================

function showEmptyResult() {

    resultTitle.textContent = "Nenhuma avaliação encontrada.";

    resultMessage.textContent =
        "Você ainda não concluiu uma avaliação nesta sessão.";

    resultScore.textContent = "--";

    resultPercentage.textContent =
        "Nenhum resultado disponível";

    resultDate.textContent =
        "Realize uma avaliação para visualizar seu desempenho.";

    resultCorrect.textContent = "0";
    resultWrong.textContent = "0";
    resultTotal.textContent = "0";

    document.querySelector(".result-stats").hidden = true;
    document.querySelector(".result-review").hidden = true;
    document.querySelector(".result-actions").hidden = true;

    const emptyCard = createElement("section", "result-empty");

    const title = createElement(
        "h2",
        "",
        "Comece sua avaliação"
    );

    const paragraph = createElement(
        "p",
        "",
        "Realize uma prova para receber sua nota e conferir a correção das questões."
    );

    const button = createElement(
        "a",
        "button button-primary",
        "Iniciar avaliação →"
    );

    button.href = "prova.php";

    emptyCard.append(title, paragraph, button);

    document.querySelector(".result-container")
        .insertBefore(
            emptyCard,
            document.querySelector(".result-hero").nextSibling
        );

}


// ========================================
// RESUMO DA NOTA
// ========================================

function renderSummary(result) {

    const grade = (result.correct / result.total) * 10;

    const formattedGrade = grade
        .toFixed(1)
        .replace(".", ",");

    resultScore.textContent = formattedGrade;

    resultPercentage.textContent =
        `${result.percentage}% de aproveitamento`;

    resultCorrect.textContent = result.correct;
    resultWrong.textContent = result.wrong;
    resultTotal.textContent = result.total;

    reviewCount.textContent =
        `${result.total} questões`;

    if (grade >= 9) {

        resultTitle.textContent = "Excelente desempenho!";

        resultMessage.textContent =
            "Você demonstrou ótimo domínio dos conteúdos históricos.";

    } else if (grade >= 7) {

        resultTitle.textContent = "Muito bom trabalho!";

        resultMessage.textContent =
            "Você teve um bom resultado. Continue aprofundando seus conhecimentos.";

    } else if (grade >= 5) {

        resultTitle.textContent = "Você está evoluindo!";

        resultMessage.textContent =
            "Revise as questões e continue estudando para avançar.";

    } else {

        resultTitle.textContent = "Continue aprendendo!";

        resultMessage.textContent =
            "A revisão das respostas é uma oportunidade para aprender e melhorar.";

    }

    const date = new Date(result.date);

    if (!Number.isNaN(date.getTime())) {

        resultDate.textContent =
            `Finalizada em ${date.toLocaleDateString("pt-BR")} às ${date.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit"
            })}`;

    }

    // GRÁFICO CIRCULAR DA NOTA

    const rotation = result.percentage * 3.6;

    scoreCircle.style.background =
        `conic-gradient(
            var(--gold) 0deg,
            var(--gold) ${rotation}deg,
            #E8E2D5 ${rotation}deg,
            #E8E2D5 360deg
        )`;

    scoreCircle.style.border = "none";

    const innerCircle = document.createElement("div");

    innerCircle.className = "score-inner-circle";

    innerCircle.style.position = "absolute";
    innerCircle.style.inset = "7px";
    innerCircle.style.borderRadius = "50%";
    innerCircle.style.backgroundColor = "white";
    innerCircle.style.display = "flex";
    innerCircle.style.alignItems = "center";
    innerCircle.style.justifyContent = "center";

    const content = document.createElement("div");

    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.flexDirection = "column";

    const number = createElement(
        "strong",
        "",
        formattedGrade
    );

    const label = createElement(
        "span",
        "",
        "NOTA"
    );

    content.append(number, label);
    innerCircle.appendChild(content);

    scoreCircle.style.position = "relative";
    scoreCircle.replaceChildren(innerCircle);

}


// ========================================
// REVISAR AS RESPOSTAS
// ========================================

function renderQuestionReview(questions) {

    questionList.replaceChildren();

    questions.forEach((question, index) => {

        const isCorrect =
            question.selected === question.correctAnswer;

        const article = createElement(
            "article",
            `review-question ${isCorrect ? "correct" : "wrong"}`
        );

        const header = createElement(
            "div",
            "review-question-header"
        );

        const number = createElement(
            "span",
            "review-question-number",
            `QUESTÃO ${String(index + 1).padStart(2, "0")} • ${question.topic}`
        );

        const status = createElement(
            "span",
            `review-status ${isCorrect ? "correct" : "wrong"}`,
            isCorrect ? "✓ CORRETA" : "✕ INCORRETA"
        );

        header.append(number, status);

        const content = createElement(
            "div",
            "review-question-content"
        );

        const title = createElement(
            "h3",
            "",
            question.question
        );

        const selectedAnswer = question.selected === null
            ? "Não respondida"
            : `${String.fromCharCode(65 + question.selected)}. ${question.options[question.selected]}`;

        const selectedLine = createElement(
            "div",
            "review-answer-line"
        );

        const selectedLabel = createElement(
            "span",
            "",
            "SUA RESPOSTA"
        );

        const selectedText = createElement(
            "strong",
            "",
            selectedAnswer
        );

        selectedLine.append(selectedLabel, selectedText);

        const correctLine = createElement(
            "div",
            "review-answer-line correct-answer"
        );

        const correctLabel = createElement(
            "span",
            "",
            "RESPOSTA CORRETA"
        );

        const correctText = createElement(
            "strong",
            "",
            `${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}`
        );

        correctLine.append(correctLabel, correctText);

        const explanationBox = createElement(
            "div",
            "review-explanation"
        );

        const explanationLabel = createElement(
            "span",
            "",
            "ENTENDA A RESPOSTA"
        );

        const explanationText = createElement(
            "p",
            "",
            question.explanation
        );

        explanationBox.append(
            explanationLabel,
            explanationText
        );

        content.append(
            title,
            selectedLine,
            correctLine,
            explanationBox
        );

        article.append(header, content);

        questionList.appendChild(article);

    });

}


// ========================================
// ANO DO RODAPÉ
// ========================================

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// INICIAR
// ========================================

loadResult();
