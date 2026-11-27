<?php

require_once __DIR__ . "/../assets/config/sessao.php";

$mensagem = "";
$tipoMensagem = "";

// Limite simples de tentativas: 5 erros bloqueiam por 60 segundos
$bloqueadoAte = (int) ($_SESSION["login_bloqueio"] ?? 0);

if ($_SERVER["REQUEST_METHOD"] === "POST" && !csrfValido()) {

    $mensagem = "Sessão expirada. Recarregue a página e tente novamente.";
    $tipoMensagem = "erro";

} elseif ($_SERVER["REQUEST_METHOD"] === "POST" && $bloqueadoAte > time()) {

    $mensagem = "Muitas tentativas. Aguarde alguns instantes e tente novamente.";
    $tipoMensagem = "erro";

} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = trim($_POST["email"] ?? "");
    $senha = $_POST["senha"] ?? "";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        $mensagem = "Digite um e-mail válido.";
        $tipoMensagem = "erro";

    } elseif (empty($senha)) {

        $mensagem = "Digite sua senha.";
        $tipoMensagem = "erro";

    } else {

        try {

            require_once __DIR__ . "/../assets/config/conexao.php";

            $sql = "SELECT id, nome, email, senha, tipo
                    FROM usuarios
                    WHERE email = :email
                    LIMIT 1";

            $consulta = $pdo->prepare($sql);

            $consulta->execute([
                ":email" => $email
            ]);

            $usuario = $consulta->fetch();

            if ($usuario && password_verify($senha, $usuario["senha"])) {

                if (!in_array($usuario["tipo"], ["aluno", "admin"], true)) {
                    $mensagem = "Tipo de usuário inválido.";
                    $tipoMensagem = "erro";
                } else {

                    session_regenerate_id(true);
                    unset($_SESSION["login_falhas"], $_SESSION["login_bloqueio"]);

                    $_SESSION["usuario_id"] = $usuario["id"];
                    $_SESSION["usuario_nome"] = $usuario["nome"];
                    $_SESSION["usuario_email"] = $usuario["email"];
                    $_SESSION["usuario_tipo"] = $usuario["tipo"];

                    if ($usuario["tipo"] === "admin") {
                        header("Location: admin.php");
                    } else {
                        header("Location: dashboard.php");
                    }

                    exit;
                }

            } else {

                $_SESSION["login_falhas"] = ($_SESSION["login_falhas"] ?? 0) + 1;

                if ($_SESSION["login_falhas"] >= 5) {
                    $_SESSION["login_bloqueio"] = time() + 60;
                    $_SESSION["login_falhas"] = 0;
                }

                $mensagem = "E-mail ou senha incorretos.";
                $tipoMensagem = "erro";

            }

        } catch (PDOException $e) {

            $mensagem = "Não foi possível realizar o login. Verifique a conexão com o banco de dados.";
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

    <title>Entrar | História em Foco</title>

    <link rel="stylesheet" href="../assets/css/global.css">
    <link rel="stylesheet" href="../assets/css/pages.css">
    <script src="../assets/js/auth.js" defer></script>

    
</head>

<body class="auth-page">

    <div class="auth-shell">

        <aside class="auth-aside">

            <a href="../index.html" class="logo">
                <span class="logo-icon">HF</span>
                <span>História <strong>em Foco</strong></span>
            </a>

            <div class="auth-aside-content">

                <span class="eyebrow">SEU CONHECIMENTO COMEÇA AQUI</span>

                <h1>
                    A História não para.
                    <span>Seu aprendizado também não.</span>
                </h1>

                <p>
                    Continue explorando acontecimentos, civilizações
                    e transformações que marcaram a humanidade.
                </p>

                <div class="auth-highlights">

                    <div class="auth-highlight">
                        <span>01</span>
                        <div>
                            <strong>Aprenda no seu ritmo</strong>
                            <small>Aulas organizadas por períodos históricos.</small>
                        </div>
                    </div>

                    <div class="auth-highlight">
                        <span>02</span>
                        <div>
                            <strong>Acompanhe sua evolução</strong>
                            <small>Consulte seu desempenho nas avaliações.</small>
                        </div>
                    </div>

                    <div class="auth-highlight">
                        <span>03</span>
                        <div>
                            <strong>Amplie seu conhecimento</strong>
                            <small>Explore os acontecimentos que mudaram o mundo.</small>
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

                    <span class="eyebrow">BEM-VINDO DE VOLTA</span>

                    <h2>Acesse sua conta</h2>

                    <p>
                        Entre com seus dados para continuar
                        de onde você parou.
                    </p>

                </div>

                <form id="login-form" method="POST" action="login.php">
                    <?= csrfCampo() ?>

                    <div class="form-group">

                        <label for="login-email">E-mail</label>

                        <input
                            type="email"
                            id="login-email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            autocomplete="email"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="login-password">Senha</label>

                        <div class="password-field">

                            <input
                                type="password"
                                id="login-password"
                                name="senha"
                                placeholder="Digite sua senha"
                                autocomplete="current-password"
                                minlength="6"
                                required
                            >

                            <button
                                type="button"
                                class="password-toggle"
                                data-toggle-password="login-password"
                                aria-label="Mostrar senha"
                            >
                                Mostrar
                            </button>

                        </div>

                    </div>

                    <div class="auth-options">

                        <label class="remember-option">
                            <input type="checkbox" name="lembrar">
                            <span>Manter conectado</span>
                        </label>

                    </div>

                    <button type="submit" class="button button-primary auth-submit">
                        Entrar na plataforma →
                    </button>

                   <p class="form-feedback" role="status" aria-live="polite"
                    style="display: <?= $mensagem !== "" ? "block" : "none" ?>;
                    color: <?= $tipoMensagem === "erro" ? "#dc2626" : "#16a34a" ?>;">
                    <?= htmlspecialchars($mensagem, ENT_QUOTES, 'UTF-8') ?>
                    </p>

                </form>

                <div class="auth-divider">
                    <span>OU</span>
                </div>

                <div class="auth-switch">

                    <p>
                        Ainda não possui uma conta?
                    </p>

                    <a href="cadastro.php">
                        Criar minha conta
                    </a>

                </div>

                <p class="auth-legal">
                    Ao acessar a plataforma, você poderá acompanhar
                    seus estudos e seu desempenho.
                </p>

            </div>

        </main>

    </div>

</body>
</html>
