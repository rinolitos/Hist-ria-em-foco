
// ELEMENTOS DA PÁGINA

const searchInput = document.getElementById("course-search");
const filterButtons = document.querySelectorAll("[data-filter]");
const courseCards = document.querySelectorAll(".course-card");

const visibleCount = document.getElementById("visible-count");
const emptyMessage = document.getElementById("courses-empty");
const clearFiltersButton = document.getElementById("clear-filters");

const toast = document.getElementById("courses-toast");

let activeFilter = "todos";
let toastTimeout;


// IDENTIFICAÇÃO DOS MÓDULOS

const moduleSlugs = {
    "Grécia e Roma Antiga": "grecia-roma",
    "As Cruzadas": "cruzadas",
    "Renascimento": "renascimento",
    "Revolução Francesa": "revolucao-francesa",
    "Revolução Haitiana": "revolucao-haitiana",
    "Primeira Guerra Mundial": "primeira-guerra",
    "Segunda Guerra Mundial": "segunda-guerra",
    "Guerra Fria": "guerra-fria"
};


// FILTRAR OS MÓDULOS

function filterCourses() {

    const searchTerm = searchInput
        ? searchInput.value.trim().toLocaleLowerCase("pt-BR")
        : "";

    let visibleCourses = 0;

    courseCards.forEach(card => {

        const category = card.dataset.category;

        const cardText = card.textContent
            .toLocaleLowerCase("pt-BR");

        const matchesCategory =
            activeFilter === "todos" || category === activeFilter;

        const matchesSearch =
            cardText.includes(searchTerm);

        const shouldShow =
            matchesCategory && matchesSearch;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCourses++;
        }

    });

    if (visibleCount) {
        visibleCount.textContent = String(visibleCourses).padStart(2, "0");
    }

    if (emptyMessage) {
        emptyMessage.hidden = visibleCourses !== 0;
    }

}


// PESQUISA EM TEMPO REAL

if (searchInput) {
    searchInput.addEventListener("input", filterCourses);
}


// FILTROS POR PERÍODO

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        activeFilter = button.dataset.filter;

        filterButtons.forEach(item => {

            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");

        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        filterCourses();

    });

});


// LIMPAR PESQUISA E FILTROS

if (clearFiltersButton) {

    clearFiltersButton.addEventListener("click", () => {

        if (searchInput) {
            searchInput.value = "";
        }

        activeFilter = "todos";

        filterButtons.forEach(button => {

            const isAll = button.dataset.filter === "todos";

            button.classList.toggle("active", isAll);

            button.setAttribute(
                "aria-pressed",
                String(isAll)
            );

        });

        filterCourses();

    });

}


// NOTIFICAÇÕES

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}


// ACESSAR OS MÓDULOS

const moduleButtons = document.querySelectorAll("[data-module-access]");

moduleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const moduleName = button.dataset.moduleAccess;
        const moduleSlug = moduleSlugs[moduleName];

        if (!moduleSlug) {

            showToast("Não foi possível localizar este módulo.");

            return;

        }

        window.location.href =
            `aula.php?modulo=${encodeURIComponent(moduleSlug)}`;

    });

});


// ANO DO RODAPÉ

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// INICIALIZAR CATÁLOGO

filterCourses();