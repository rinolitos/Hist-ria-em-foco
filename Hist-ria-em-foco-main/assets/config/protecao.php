<?php

require_once __DIR__ . "/sessao.php";

/**
 * Pasta pública onde ficam as páginas (ex.: /Hist-ria-em-foco/pages).
 * Calculada a partir do script atual, então funciona com qualquer
 * nome de pasta do projeto.
 */
function urlPaginas() {
    return rtrim(str_replace("\\", "/", dirname($_SERVER["SCRIPT_NAME"])), "/");
}

function exigirLogin() {

    // usuario_id precisa ser um id real (> 0)
    if (empty($_SESSION["usuario_id"])) {
        header("Location: " . urlPaginas() . "/login.php");
        exit;
    }

}

function exigirAdmin() {

    exigirLogin();

    if (($_SESSION["usuario_tipo"] ?? "") !== "admin") {
        header("Location: " . urlPaginas() . "/dashboard.php");
        exit;
    }

}

?>
