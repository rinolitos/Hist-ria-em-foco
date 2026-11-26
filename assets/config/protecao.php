
<?php

require_once __DIR__ . "/sessao.php";

function exigirLogin() {

    if (!isset($_SESSION["usuario_id"])) {
        header("Location: /Hist-ria-em-foco/pages/login.php");
        exit;
    }

}

function exigirAdmin() {

    exigirLogin();

    if (($_SESSION["usuario_tipo"] ?? "") !== "admin") {
        header("Location: /Hist-ria-em-foco/pages/dashboard.php");
        exit;
    }

}

?>