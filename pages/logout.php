<?php

require_once __DIR__ . "/../assets/config/sessao.php";

// Limpa os dados da sessão
$_SESSION = [];

// Destrói a sessão
session_destroy();

// Retorna para a página de login
header("Location: login.php");
exit;

?>