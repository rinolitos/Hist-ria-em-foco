
// MOSTRAR E OCULTAR SENHA

const passwordButtons = document.querySelectorAll("[data-toggle-password]");

passwordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const inputId = button.dataset.togglePassword;
        const passwordInput = document.getElementById(inputId);

        if (!passwordInput) {
            return;
        }

        const isPassword = passwordInput.type === "password";

        passwordInput.type = isPassword ? "text" : "password";

        button.textContent = isPassword ? "Ocultar" : "Mostrar";

        button.setAttribute(
            "aria-label",
            isPassword ? "Ocultar senha" : "Mostrar senha"
        );

    });

});
