<?php

// Os valores abaixo são os padrões de desenvolvimento (XAMPP/WAMP).
// Em produção, defina as variáveis de ambiente DB_HOST, DB_USER, DB_PASS e DB_NAME.
$host    = getenv("DB_HOST") ?: "localhost";
$usuario = getenv("DB_USER") ?: "root";
$senha   = getenv("DB_PASS") ?: "";
$banco   = getenv("DB_NAME") ?: "historia_em_foco";

$pdo = new PDO(
    "mysql:host=$host;dbname=$banco;charset=utf8mb4",
    $usuario,
    $senha,
    [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]
);

?>
