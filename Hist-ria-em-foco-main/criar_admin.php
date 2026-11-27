<?php
// Cria um administrador. Uso (no terminal):  php criar_admin.php
// O cadastro pelo site só cria alunos; administradores são criados aqui.

if (PHP_SAPI !== "cli") {
    http_response_code(404);
    exit;
}

require_once __DIR__ . "/assets/config/conexao.php";

function perguntar($texto) {
    echo $texto;
    return trim(fgets(STDIN));
}

$nome  = perguntar("Nome: ");
$email = perguntar("E-mail: ");
$senha = perguntar("Senha (mín. 8 caracteres): ");

if (strlen($nome) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($senha) < 8) {
    exit("Dados inválidos.\n");
}

$pdo->prepare(
    "INSERT INTO usuarios (nome, email, senha, tipo)
     VALUES (:nome, :email, :senha, 'admin')"
)->execute([
    ":nome"  => $nome,
    ":email" => $email,
    ":senha" => password_hash($senha, PASSWORD_DEFAULT),
]);

echo "Administrador criado.\n";
