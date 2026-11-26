
// ========================================
// HISTÓRIA EM FOCO
// BANCO DEMONSTRATIVO DE 30 QUESTÕES
// ========================================

const questionBank = [

    // GRÉCIA E ROMA ANTIGA

    {
        topic: "Grécia Antiga",
        question: "Qual cidade-Estado grega ficou conhecida por desenvolver uma experiência de democracia na Antiguidade?",
        options: [
            "Esparta",
            "Atenas",
            "Corinto",
            "Tebas"
        ],
        answer: 1,
        explanation: "Atenas desenvolveu uma forma de democracia direta, embora a participação política fosse restrita aos cidadãos homens."
    },

    {
        topic: "Grécia Antiga",
        question: "Qual filósofo grego ficou conhecido pelo método de questionamento chamado método socrático?",
        options: [
            "Aristóteles",
            "Platão",
            "Sócrates",
            "Pitágoras"
        ],
        answer: 2,
        explanation: "Sócrates utilizava perguntas e diálogos para estimular a reflexão e a investigação filosófica."
    },

    {
        topic: "Roma Antiga",
        question: "Qual foi a primeira forma de governo de Roma, antes da República?",
        options: [
            "Monarquia",
            "Democracia",
            "Império",
            "Ditadura"
        ],
        answer: 0,
        explanation: "Roma começou sua organização política como monarquia, antes de se tornar uma República."
    },

    {
        topic: "Roma Antiga",
        question: "Quem é tradicionalmente considerado o primeiro imperador romano?",
        options: [
            "Júlio César",
            "Nero",
            "Rômulo",
            "Augusto"
        ],
        answer: 3,
        explanation: "Otávio Augusto tornou-se o primeiro imperador romano em 27 a.C."
    },


    // CRUZADAS

    {
        topic: "Cruzadas",
        question: "Qual papa convocou a Primeira Cruzada durante o Concílio de Clermont, em 1095?",
        options: [
            "Gregório VII",
            "Urbano II",
            "Inocêncio III",
            "Leão X"
        ],
        answer: 1,
        explanation: "O papa Urbano II convocou a Primeira Cruzada em 1095, incentivando uma expedição militar rumo ao Oriente."
    },

    {
        topic: "Cruzadas",
        question: "Qual cidade foi conquistada pelos cruzados em 1099 durante a Primeira Cruzada?",
        options: [
            "Constantinopla",
            "Roma",
            "Jerusalém",
            "Alexandria"
        ],
        answer: 2,
        explanation: "Os cruzados conquistaram Jerusalém em 1099, estabelecendo centros de poder cristão na região."
    },

    {
        topic: "Cruzadas",
        question: "Qual líder muçulmano reconquistou Jerusalém em 1187?",
        options: [
            "Saladino",
            "Maomé",
            "Suleimão",
            "Harun al-Rashid"
        ],
        answer: 0,
        explanation: "Saladino liderou forças muçulmanas que reconquistaram Jerusalém em 1187."
    },


    // RENASCIMENTO

    {
        topic: "Renascimento",
        question: "Qual movimento intelectual valorizava o ser humano e a retomada dos estudos da Antiguidade clássica?",
        options: [
            "Feudalismo",
            "Mercantilismo",
            "Escolástica",
            "Humanismo"
        ],
        answer: 3,
        explanation: "O Humanismo foi uma das principais bases intelectuais do Renascimento, valorizando o conhecimento e as capacidades humanas."
    },

    {
        topic: "Renascimento",
        question: "Qual artista renascentista pintou a obra Mona Lisa?",
        options: [
            "Leonardo da Vinci",
            "Michelangelo",
            "Rafael Sanzio",
            "Donatello"
        ],
        answer: 0,
        explanation: "Mona Lisa é uma das obras mais conhecidas de Leonardo da Vinci."
    },

    {
        topic: "Renascimento",
        question: "Qual inovação tecnológica contribuiu para ampliar a circulação de livros e conhecimentos na Europa?",
        options: [
            "Máquina a vapor",
            "Telégrafo",
            "Imprensa de tipos móveis",
            "Telefone"
        ],
        answer: 2,
        explanation: "A imprensa de tipos móveis, associada a Gutenberg na Europa, facilitou a reprodução de textos."
    },

    {
        topic: "Renascimento",
        question: "Qual cidade italiana foi um dos principais centros do Renascimento?",
        options: [
            "Londres",
            "Florença",
            "Moscou",
            "Lisboa"
        ],
        answer: 1,
        explanation: "Florença foi um importante centro cultural e artístico do Renascimento italiano."
    },


    // REVOLUÇÃO FRANCESA

    {
        topic: "Revolução Francesa",
        question: "Qual grupo social representava a maior parte da população francesa antes da Revolução de 1789?",
        options: [
            "Nobreza",
            "Alto clero",
            "Terceiro Estado",
            "Família real"
        ],
        answer: 2,
        explanation: "O Terceiro Estado reunia a maior parte da população francesa e concentrava grande parte das obrigações tributárias."
    },

    {
        topic: "Revolução Francesa",
        question: "Em que data ocorreu a tomada da Bastilha, símbolo do início da Revolução Francesa?",
        options: [
            "14 de julho de 1789",
            "1º de janeiro de 1792",
            "5 de maio de 1789",
            "18 de novembro de 1799"
        ],
        answer: 0,
        explanation: "A Bastilha foi tomada em 14 de julho de 1789, data que se tornou símbolo da Revolução Francesa."
    },

    {
        topic: "Revolução Francesa",
        question: "Qual documento de 1789 defendia princípios como liberdade e igualdade jurídica?",
        options: [
            "Código de Hamurábi",
            "Carta Magna",
            "Tratado de Versalhes",
            "Declaração dos Direitos do Homem e do Cidadão"
        ],
        answer: 3,
        explanation: "A Declaração dos Direitos do Homem e do Cidadão apresentou princípios fundamentais da Revolução Francesa."
    },

    {
        topic: "Revolução Francesa",
        question: "Qual acontecimento marcou a chegada de Napoleão Bonaparte ao poder em 1799?",
        options: [
            "Revolução de Outubro",
            "Golpe do 18 de Brumário",
            "Congresso de Viena",
            "Tomada da Bastilha"
        ],
        answer: 1,
        explanation: "O golpe do 18 de Brumário, em 1799, levou Napoleão Bonaparte ao poder na França."
    },


    // REVOLUÇÃO HAITIANA

    {
        topic: "Revolução Haitiana",
        question: "Qual era o nome da colônia francesa onde começou a Revolução Haitiana?",
        options: [
            "Nova França",
            "Martinica",
            "Saint-Domingue",
            "Guadalupe"
        ],
        answer: 2,
        explanation: "A Revolução Haitiana começou em Saint-Domingue, colônia francesa baseada principalmente na produção de açúcar e café."
    },

    {
        topic: "Revolução Haitiana",
        question: "Em que ano começou a Revolução Haitiana?",
        options: [
            "1776",
            "1791",
            "1804",
            "1815"
        ],
        answer: 1,
        explanation: "A grande insurreição que iniciou o processo revolucionário ocorreu em 1791."
    },

    {
        topic: "Revolução Haitiana",
        question: "Em que ano o Haiti conquistou sua independência?",
        options: [
            "1791",
            "1799",
            "1802",
            "1804"
        ],
        answer: 3,
        explanation: "O Haiti declarou sua independência em 1º de janeiro de 1804."
    },


    // PRIMEIRA GUERRA MUNDIAL

    {
        topic: "Primeira Guerra Mundial",
        question: "Qual acontecimento desencadeou a crise que levou ao início da Primeira Guerra Mundial?",
        options: [
            "Assassinato de Francisco Ferdinando",
            "Queda do Muro de Berlim",
            "Revolução Russa",
            "Invasão da Polônia"
        ],
        answer: 0,
        explanation: "O assassinato do arquiduque Francisco Ferdinando ocorreu em Sarajevo, em junho de 1914."
    },

    {
        topic: "Primeira Guerra Mundial",
        question: "Qual foi uma característica marcante dos combates na Frente Ocidental?",
        options: [
            "Uso exclusivo de navios",
            "Ausência de armamentos modernos",
            "Guerra de trincheiras",
            "Combates exclusivamente aéreos"
        ],
        answer: 2,
        explanation: "A guerra de trincheiras marcou boa parte dos combates na Frente Ocidental."
    },

    {
        topic: "Primeira Guerra Mundial",
        question: "Em que ano os Estados Unidos entraram na Primeira Guerra Mundial?",
        options: [
            "1914",
            "1915",
            "1916",
            "1917"
        ],
        answer: 3,
        explanation: "Os Estados Unidos entraram na guerra em 1917, fortalecendo o lado dos Aliados."
    },

    {
        topic: "Primeira Guerra Mundial",
        question: "Qual tratado formalizou as condições de paz impostas à Alemanha após a Primeira Guerra Mundial?",
        options: [
            "Tratado de Utrecht",
            "Tratado de Versalhes",
            "Tratado de Tordesilhas",
            "Tratado de Maastricht"
        ],
        answer: 1,
        explanation: "O Tratado de Versalhes, assinado em 1919, estabeleceu as condições de paz com a Alemanha."
    },


    // SEGUNDA GUERRA MUNDIAL

    {
        topic: "Segunda Guerra Mundial",
        question: "Qual acontecimento é considerado o marco inicial da Segunda Guerra Mundial?",
        options: [
            "Ataque a Pearl Harbor",
            "Queda de Berlim",
            "Invasão da Polônia pela Alemanha",
            "Revolução Russa"
        ],
        answer: 2,
        explanation: "A invasão alemã da Polônia ocorreu em 1º de setembro de 1939 e levou Reino Unido e França a declarar guerra à Alemanha."
    },

    {
        topic: "Segunda Guerra Mundial",
        question: "Qual país realizou o ataque a Pearl Harbor em dezembro de 1941?",
        options: [
            "Alemanha",
            "Japão",
            "Itália",
            "União Soviética"
        ],
        answer: 1,
        explanation: "O Japão atacou a base norte-americana de Pearl Harbor, levando os Estados Unidos a entrar diretamente na guerra."
    },

    {
        topic: "Segunda Guerra Mundial",
        question: "Como é chamado o genocídio promovido pelo regime nazista contra os judeus e outros grupos perseguidos?",
        options: [
            "Holocausto",
            "Iluminismo",
            "Apartheid",
            "Imperialismo"
        ],
        answer: 0,
        explanation: "O Holocausto foi o genocídio promovido pelo regime nazista, que assassinou cerca de seis milhões de judeus, além de perseguir e matar outros grupos."
    },

    {
        topic: "Segunda Guerra Mundial",
        question: "Em qual ano ocorreu a rendição alemã, encerrando a guerra na Europa?",
        options: [
            "1939",
            "1941",
            "1943",
            "1945"
        ],
        answer: 3,
        explanation: "A Alemanha se rendeu em maio de 1945, encerrando a guerra na Europa."
    },


    // GUERRA FRIA

    {
        topic: "Guerra Fria",
        question: "Quais foram as duas principais superpotências rivais durante a Guerra Fria?",
        options: [
            "França e Inglaterra",
            "Alemanha e Japão",
            "Estados Unidos e União Soviética",
            "China e Índia"
        ],
        answer: 2,
        explanation: "Estados Unidos e União Soviética lideraram os dois principais blocos políticos e econômicos da Guerra Fria."
    },

    {
        topic: "Guerra Fria",
        question: "Qual organização militar foi criada em 1949 sob liderança dos Estados Unidos?",
        options: [
            "Pacto de Varsóvia",
            "OTAN",
            "ONU",
            "Liga das Nações"
        ],
        answer: 1,
        explanation: "A OTAN foi criada em 1949 como uma aliança militar liderada pelos Estados Unidos."
    },

    {
        topic: "Guerra Fria",
        question: "Qual acontecimento de 1962 elevou significativamente as tensões entre Estados Unidos e União Soviética?",
        options: [
            "Crise dos Mísseis de Cuba",
            "Queda do Muro de Berlim",
            "Revolução Francesa",
            "Guerra do Golfo"
        ],
        answer: 0,
        explanation: "A Crise dos Mísseis de Cuba representou um dos momentos de maior tensão da Guerra Fria."
    },

    {
        topic: "Guerra Fria",
        question: "Qual acontecimento simbólico ocorreu em Berlim em novembro de 1989?",
        options: [
            "Construção do Muro",
            "Criação da OTAN",
            "Início da Primeira Guerra",
            "Queda do Muro de Berlim"
        ],
        answer: 3,
        explanation: "A queda do Muro de Berlim, em 9 de novembro de 1989, simbolizou o enfraquecimento da divisão política da Europa."
    }

];


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

const TOTAL_QUESTIONS = 10;

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

function initializeExam() {

    if (questionBank.length < TOTAL_QUESTIONS) {

        questionText.textContent =
            "Não existem questões suficientes para iniciar a avaliação.";

        return;

    }

    selectedQuestions = shuffleArray(questionBank)
        .slice(0, TOTAL_QUESTIONS);

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

function completeExam() {

    const correctCount = selectedQuestions.filter(
        (question, index) => answers[index] === question.answer
    ).length;

    const wrongCount = TOTAL_QUESTIONS - correctCount;

    const percentage = Math.round(
        (correctCount / TOTAL_QUESTIONS) * 100
    );

    const result = {

        date: new Date().toISOString(),

        total: TOTAL_QUESTIONS,

        correct: correctCount,

        wrong: wrongCount,

        percentage: percentage,

        questions: selectedQuestions.map((question, index) => ({

            topic: question.topic,

            question: question.question,

            options: question.options,

            selected: answers[index],

            correctAnswer: question.answer,

            explanation: question.explanation

        }))

    };

    try {

        sessionStorage.setItem(
            "historiaEmFoco_lastResult",
            JSON.stringify(result)
        );

        window.location.href = "resultado.php";

    } catch (error) {

        console.error("Não foi possível salvar o resultado:", error);

        modalDescription.textContent =
            "Não foi possível guardar o resultado nesta sessão. Verifique as configurações do navegador e tente novamente.";

    }

}

confirmFinishButton.addEventListener("click", completeExam);


// ========================================
// INICIAR A APLICAÇÃO
// ========================================

initializeExam();
