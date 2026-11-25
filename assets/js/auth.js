
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


// FORMULÁRIOS DE AUTENTICAÇÃO

const authForms = document.querySelectorAll("[data-auth-form]");

authForms.forEach(form => {

    form.addEventListener("submit", event => {

        event.preventDefault();

        const formType = form.dataset.authForm;
        const feedback = form.querySelector(".form-feedback");

        feedback.textContent = "";
        feedback.className = "form-feedback";

        // VALIDAR CADASTRO

        if (formType === "register") {

            const password = document.getElementById("register-password");
            const confirmation = document.getElementById("register-confirm");

            confirmation.setCustomValidity("");

            if (password.value !== confirmation.value) {

                confirmation.setCustomValidity("As senhas não coincidem.");

                feedback.textContent = "As senhas digitadas são diferentes.";
                feedback.classList.add("is-error");

                confirmation.reportValidity();

                return;
            }

        }

        // VALIDAR CAMPOS

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }

        // RETORNO VISUAL

        if (formType === "login") {

            feedback.textContent =
                "Formulário validado! A autenticação será conectada ao servidor.";

        }

        if (formType === "register") {

            feedback.textContent =
                "Cadastro preenchido corretamente! O envio será conectado ao servidor.";

        }

        feedback.classList.add("is-success");

    });

});
