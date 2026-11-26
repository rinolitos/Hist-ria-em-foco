<?php

$mensagem = "";
$tipoMensagem = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nome = trim($_POST["nome"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $senha = $_POST["senha"] ?? "";
    $confirmarSenha = $_POST["confirmar_senha"] ?? "";

    if (strlen($nome) < 3) {

        $mensagem = "Digite um nome com pelo menos 3 caracteres.";
        $tipoMensagem = "erro";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        $mensagem = "Digite um e-mail válido.";
        $tipoMensagem = "erro";

    } elseif (strlen($senha) < 6) {

        $mensagem = "A senha deve ter pelo menos 6 caracteres.";
        $tipoMensagem = "erro";

    } elseif ($senha !== $confirmarSenha) {

        $mensagem = "As senhas não coincidem.";
        $tipoMensagem = "erro";

    } else {

        try {

            require_once __DIR__ . "/../assets/config/conexao.php";

            // Verifica se o e-mail já está cadastrado
            $consulta = $pdo->prepare(
                "SELECT id FROM usuarios WHERE email = :email"
            );

            $consulta->execute([
                ":email" => $email
            ]);

            if ($consulta->fetch()) {

                $mensagem = "Este e-mail já está cadastrado.";
                $tipoMensagem = "erro";

            } else {

                // Protege a senha
                $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

                // Cadastra o usuário como aluno
                $sql = "INSERT INTO usuarios
                        (nome, email, senha, tipo, data_cadastro)
                        VALUES
                        (:nome, :email, :senha, 'aluno', NOW())";

                $cadastro = $pdo->prepare($sql);

                $cadastro->execute([
                    ":nome" => $nome,
                    ":email" => $email,
                    ":senha" => $senhaHash
                ]);

                $mensagem = "Cadastro realizado com sucesso!";
                $tipoMensagem = "sucesso";

            }

        } catch (PDOException $e) {

            $mensagem = "Não foi possível realizar o cadastro. Verifique a conexão com o banco de dados.";
            $tipoMensagem = "erro";

        }

    }
}

?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Criar conta | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/pages.css"> 
</head>

<body class="auth-page">

    <div class="auth-shell">

        <aside class="auth-aside">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <div class="auth-aside-content">

                <span class="eyebrow">FAÇA PARTE DA NOSSA PLATAFORMA</span>

                <h1>
                    Toda grande jornada começa com
                    <span>uma nova descoberta.</span>
                </h1>

                <p>
                    Crie sua conta e tenha acesso a uma experiência
                    de aprendizado voltada aos grandes acontecimentos
                    da História.
                </p>

                <div class="auth-highlights">

                    <div class="auth-highlight">
                        <span>01</span>
                        <div>
                            <strong>Oito temas históricos</strong>
                            <small>Explore diferentes épocas e civilizações.</small>
                        </div>
                    </div>

                    <div class="auth-highlight">
                        <span>02</span>
                        <div>
                            <strong>Aulas organizadas</strong>
                            <small>Estude com conteúdos estruturados.</small>
                        </div>
                    </div>

                    <div class="auth-highlight">
                        <span>03</span>
                        <div>
                            <strong>Avalie seu conhecimento</strong>
                            <small>Realize provas e acompanhe suas notas.</small>
                        </div>
                    </div>

                </div>

            </div>

            <span class="auth-aside-footer">
                HISTÓRIA EM FOCO · CONHECIMENTO QUE ATRAVESSA SÉCULOS
            </span>

        </aside>

        <main class="auth-main">

            <div class="auth-card">

                <a href="../index.html" class="back-home">
                    ← Voltar para o início
                </a>

                <div class="auth-heading">

                    <span class="eyebrow">COMECE SUA JORNADA</span>

                    <h2>Crie sua conta</h2>

                    <p>
                        Preencha os campos abaixo para fazer
                        parte da nossa plataforma.
                    </p>

                </div>

                <form id="register-form" method="POST" action="cadastro.php">

                    <div class="form-group">

                        <label for="register-name">Nome completo</label>

                        <input
                            type="text"
                            id="register-name"
                            name="nome"
                            placeholder="Digite seu nome completo"
                            autocomplete="name"
                            minlength="3"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="register-email">E-mail</label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            autocomplete="email"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="register-password">Senha</label>

                        <div class="password-field">

                            <input
                                type="password"
                                id="register-password"
                                name="senha"
                                placeholder="Crie uma senha"
                                autocomplete="new-password"
                                minlength="6"
                                required
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-toggle-password="register-password"
                                aria-label="Mostrar senha"
                            >
                                Mostrar
                            </button>

                        </div>

                        <small class="field-hint">
                            A senha deve ter pelo menos 6 caracteres.
                        </small>

                    </div>

                    <div class="form-group">

                        <label for="register-confirm">Confirmar senha</label>

                        <div class="password-field">

                            <input
                                type="password"
                                id="register-confirm"
                                name="confirmar_senha"
                                placeholder="Digite a senha novamente"
                                autocomplete="new-password"
                                minlength="6"
                                required
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-toggle-password="register-confirm"
                                aria-label="Mostrar senha"
                            >
                                Mostrar
                            </button>

                        </div>

                    </div>

                    <button type="submit" class="button button-primary auth-submit">
                        Criar minha conta →
                    </button>

                <p class="form-feedback" role="status" aria-live="polite"style="display: <?= $mensagem !== "" ? "block" : "none" ?>;
                color: <?= $tipoMensagem === "erro" ? "#dc2626" : "#16a34a" ?>;">
                <?= htmlspecialchars($mensagem, ENT_QUOTES, "UTF-8") ?>
                </p>
                </form>

                <div class="auth-divider">
                    <span>OU</span>
                </div>

                <div class="auth-switch">

                    <p>
                        Já possui uma conta?
                    </p>

                    <a href="login.php">
                        Fazer login
                    </a>

                </div>

                <p class="auth-legal">
                    História em Foco — Conhecimento que atravessa séculos.
                </p>

            </div>

        </main>

    </div>

</body>
</html>
