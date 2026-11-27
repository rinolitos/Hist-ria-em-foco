
// ========================================
// HISTÓRIA EM FOCO
// PROVA — as questões vêm do banco (api_prova.php)
// ========================================


// ========================================
// ELEMENTOS DA PÁGINA
// ========================================

const questionNumber = document.getElementById("question-number");
const questionTopic = document.getElementById("question-topic");
const questionText = document.getElementById("question-text");

const answerOptions = document.getElementById("answer-options");
const answerFeedback = document.getElementById("answer-feedback");

const progressLabel = document.getElementById("progress-label");
const progressBar = document.getElementById("exam-progress-bar");
const answeredLabel = document.getElementById("answered-label");

const questionMap = document.getElementById("question-map");
const mapCount = document.getElementById("map-count");

const completionPercentage = document.getElementById("completion-percentage");
const completionBar = document.getElementById("completion-bar");

const previousButton = document.getElementById("previous-question");
const nextButton = document.getElementById("next-question");

const finishButton = document.getElementById("finish-exam");
const finishModal = document.getElementById("finish-modal");

const cancelFinishButton = document.getElementById("cancel-finish");
const confirmFinishButton = document.getElementById("confirm-finish");

const modalDescription = document.getElementById("modal-description");


// ========================================
// CONFIGURAÇÃO DA AVALIAÇÃO
// ========================================

let TOTAL_QUESTIONS = 10;

let selectedQuestions = [];
let answers = [];
let currentIndex = 0;


// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] =
            [shuffled[randomIndex], shuffled[i]];

    }

    return shuffled;

}


function createElement(tag, className, text) {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;

}


// ========================================
// INICIAR PROVA
// ========================================

async function initializeExam() {

    questionText.textContent = "Carregando a avaliação...";

    try {

        const response = await fetch("api_prova.php", {
            credentials: "same-origin",
            cache: "no-store"
        });

        if (response.status === 401) {
            window.location.href = "login.php";
            return;
        }

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        selectedQuestions = Array.isArray(data.questoes)
            ? data.questoes
            : [];

    } catch (error) {

        console.error("Erro ao carregar a prova:", error);

        questionText.textContent =
            "Não foi possível carregar a avaliação. Tente novamente em instantes.";

        return;

    }

    if (selectedQuestions.length === 0) {

        questionText.textContent =
            "Ainda não há questões cadastradas para a avaliação.";

        return;

    }

    TOTAL_QUESTIONS = selectedQuestions.length;

    answers = Array(TOTAL_QUESTIONS).fill(null);

    currentIndex = 0;

    renderQuestionMap();

    renderQuestion();

    updateProgress();

}


// ========================================
// MOSTRAR QUESTÃO
// ========================================

function renderQuestion() {

    const question = selectedQuestions[currentIndex];

    questionNumber.textContent =
        `QUESTÃO ${String(currentIndex + 1).padStart(2, "0")}`;

    questionTopic.textContent = question.topic.toUpperCase();

    questionText.textContent = question.question;

    answerOptions.replaceChildren();

    question.options.forEach((option, index) => {

        const button = createElement("button", "answer-option");

        button.type = "button";

        button.setAttribute(
            "aria-pressed",
            String(answers[currentIndex] === index)
        );

        if (answers[currentIndex] === index) {
            button.classList.add("selected");
        }

        const letter = createElement(
            "span",
            "option-letter",
            String.fromCharCode(65 + index)
        );

        const text = createElement(
            "span",
            "option-text",
            option
        );

        button.append(letter, text);

        button.addEventListener("click", () => {

            answers[currentIndex] = index;

            renderQuestion();

            updateProgress();

            answerFeedback.textContent =
                "Resposta selecionada. Você ainda pode alterá-la antes de finalizar.";

        });

        answerOptions.appendChild(button);

    });

    previousButton.disabled = currentIndex === 0;

    nextButton.textContent =
        currentIndex === TOTAL_QUESTIONS - 1
            ? "Revisar avaliação"
            : "Próxima questão →";

    answerFeedback.textContent =
        answers[currentIndex] === null
            ? "Você ainda não respondeu esta questão."
            : "Alternativa selecionada.";

    updateQuestionMap();

}


// ========================================
// MAPA DE QUESTÕES
// ========================================

function renderQuestionMap() {

    questionMap.replaceChildren();

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {

        const button = createElement(
            "button",
            "map-question",
            String(i + 1).padStart(2, "0")
        );

        button.type = "button";

        button.setAttribute(
            "aria-label",
            `Ir para a questão ${i + 1}`
        );

        button.addEventListener("click", () => {

            currentIndex = i;

            renderQuestion();

            updateProgress();

        });

        questionMap.appendChild(button);

    }

}


function updateQuestionMap() {

    const buttons = questionMap.querySelectorAll(".map-question");

    buttons.forEach((button, index) => {

        button.classList.toggle("current", index === currentIndex);

        button.classList.toggle(
            "answered",
            answers[index] !== null
        );

        button.setAttribute(
            "aria-current",
            index === currentIndex ? "step" : "false"
        );

    });

}


// ========================================
// ATUALIZAR PROGRESSO
// ========================================

function updateProgress() {

    const answeredCount = answers.filter(
        answer => answer !== null
    ).length;

    const percentage =
        Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

    const currentPercentage =
        ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;

    progressLabel.textContent =
        `Questão ${currentIndex + 1} de ${TOTAL_QUESTIONS}`;

    progressBar.style.width = `${currentPercentage}%`;

    answeredLabel.textContent =
        `${answeredCount} de ${TOTAL_QUESTIONS} respondidas`;

    mapCount.textContent =
        `${answeredCount}/${TOTAL_QUESTIONS}`;

    completionPercentage.textContent =
        `${percentage}%`;

    completionBar.style.width =
        `${percentage}%`;

}


// ========================================
// NAVEGAÇÃO
// ========================================

previousButton.addEventListener("click", () => {

    if (currentIndex > 0) {

        currentIndex--;

        renderQuestion();

        updateProgress();

    }

});


nextButton.addEventListener("click", () => {

    if (currentIndex < TOTAL_QUESTIONS - 1) {

        currentIndex++;

        renderQuestion();

        updateProgress();

    } else {

        openFinishModal();

    }

});


// ========================================
// FINALIZAÇÃO
// ========================================

function openFinishModal() {

    const answeredCount = answers.filter(
        answer => answer !== null
    ).length;

    const unansweredCount =
        TOTAL_QUESTIONS - answeredCount;

    if (unansweredCount > 0) {

        modalDescription.textContent =
            `Você respondeu ${answeredCount} de ${TOTAL_QUESTIONS} questões. Ainda existem ${unansweredCount} questões sem resposta. Deseja finalizar mesmo assim?`;

    } else {

        modalDescription.textContent =
            "Você respondeu todas as questões. Deseja finalizar sua avaliação e conferir o resultado?";

    }

    finishModal.hidden = false;

    cancelFinishButton.focus();

}


function closeFinishModal() {

    finishModal.hidden = true;

}

finishButton.addEventListener("click", openFinishModal);

cancelFinishButton.addEventListener("click", closeFinishModal);

finishModal.addEventListener("click", event => {

    if (event.target === finishModal) {
        closeFinishModal();
    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && !finishModal.hidden) {
        closeFinishModal();
    }

});


// ========================================
// CORRIGIR E SALVAR RESULTADO
// ========================================

async function completeExam() {

    if (selectedQuestions.length === 0) {
        return;
    }

    confirmFinishButton.disabled = true;

    try {

        const response = await fetch("api_prova.php", {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers: answers })
        });

        if (!response.ok) {

            const data = await response.json().catch(() => ({}));

            throw new Error(data.erro || "HTTP " + response.status);

        }

        const result = await response.json();

        sessionStorage.setItem(
            "historiaEmFoco_lastResult",
            JSON.stringify(result)
        );

        window.location.href = "resultado.php";

    } catch (error) {

        console.error("Não foi possível enviar a prova:", error);

        confirmFinishButton.disabled = false;

        modalDescription.textContent =
            "Não foi possível enviar sua prova. " + error.message;

    }

}

confirmFinishButton.addEventListener("click", completeExam);


// ========================================
// INICIAR A APLICAÇÃO
// ========================================

initializeExam();
