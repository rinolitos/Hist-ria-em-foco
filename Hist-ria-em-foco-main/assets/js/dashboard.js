
// ========================================
// MENU LATERAL
// ========================================

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function openSidebar() {

    if (!sidebar || !sidebarOverlay || !sidebarToggle) {
        return;
    }

    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");

    sidebarToggle.setAttribute("aria-expanded", "true");
    sidebarToggle.setAttribute("aria-label", "Fechar menu");

}

function closeSidebar() {

    if (!sidebar || !sidebarOverlay || !sidebarToggle) {
        return;
    }

    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    sidebarToggle.setAttribute("aria-expanded", "false");
    sidebarToggle.setAttribute("aria-label", "Abrir menu");

}

if (sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        const isOpen = sidebar.classList.contains("open");

        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }

    });

}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeSidebar();
    }

});


// ========================================
// DATA ATUAL
// ========================================

const currentYear = document.getElementById("current-year");
const welcomeDate = document.getElementById("welcome-date");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (welcomeDate) {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    welcomeDate.textContent =
        `Hoje é ${formattedDate}. Continue sua jornada pelo conhecimento histórico.`;

}


// ========================================
// LIBERAR PROVA E DESEMPENHO
// ========================================

const comingSoonLinks = document.querySelectorAll("[data-coming-soon]");

const workingPages = [
    "prova.php",
    "desempenho.php"
];

workingPages.forEach(destination => {

    const link = document.querySelector(
        `a[href="${destination}"]`
    );

    if (link) {

        link.removeAttribute("data-coming-soon");

        const badge = link.querySelector(".menu-badge");

        if (badge) {
            badge.remove();
        }

    }

});


// ========================================
// NOTIFICAÇÕES
// ========================================

const toast = document.getElementById("dashboard-toast");

let toastTimeout;

function showDashboardToast(message) {

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


// ========================================
// LINKS DE PÁGINAS FUTURAS
// ========================================

comingSoonLinks.forEach(link => {

    const destination = link.getAttribute("href");

    if (workingPages.includes(destination)) {
        return;
    }

    link.addEventListener("click", event => {

        event.preventDefault();

        if (destination === "aula.php") {

            window.location.href =
                "aula.php?modulo=grecia-roma";

            return;

        }

        showDashboardToast(
            "Esta área será disponibilizada nas próximas etapas do projeto."
        );

        closeSidebar();

    });

});
