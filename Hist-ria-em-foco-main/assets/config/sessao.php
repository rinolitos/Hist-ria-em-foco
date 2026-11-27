<?php

if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        "httponly" => true,
        "samesite" => "Lax",
    ]);
    session_start();
}

// ---------------------------------------------------------------
// Proteção CSRF para formulários
// ---------------------------------------------------------------

function csrfToken() {
    if (empty($_SESSION["csrf"])) {
        $_SESSION["csrf"] = bin2hex(random_bytes(32));
    }
    return $_SESSION["csrf"];
}

function csrfCampo() {
    return '<input type="hidden" name="csrf" value="' . csrfToken() . '">';
}

function csrfValido() {
    $enviado = $_POST["csrf"] ?? "";
    return is_string($enviado)
        && !empty($_SESSION["csrf"])
        && hash_equals($_SESSION["csrf"], $enviado);
}

?>
