// Pede confirmação antes de enviar formulários de exclusão do painel.
document.querySelectorAll("form[data-confirmar]").forEach(form => {

    form.addEventListener("submit", event => {

        if (!window.confirm(form.dataset.confirmar)) {
            event.preventDefault();
        }

    });

});
