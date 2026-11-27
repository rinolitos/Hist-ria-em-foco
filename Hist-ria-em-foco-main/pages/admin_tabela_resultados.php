<?php
if (!function_exists("h")) {
    http_response_code(404);
    exit;
}
// Tabela de provas recentes. Incluída por admin.php (usa $recentes).
?>
<div class="admin-table-wrap">
    <table class="admin-table">
        <thead>
            <tr><th>Data</th><th>Aluno</th><th>Acertos</th><th>Nota</th></tr>
        </thead>
        <tbody>
        <?php foreach ($recentes as $r): ?>
            <tr>
                <td><?= h(dataBR($r["data_realizacao"])) ?></td>
                <td><?= h($r["nome"]) ?><br><small><?= h($r["email"]) ?></small></td>
                <td><?= (int) $r["acertos"] ?> de <?= (int) $r["total"] ?></td>
                <td><?= number_format((float) $r["nota"], 1, ",", ".") ?>%</td>
            </tr>
        <?php endforeach; ?>
        <?php if (!$recentes): ?>
            <tr><td colspan="4" class="admin-empty">Nenhuma prova realizada ainda.</td></tr>
        <?php endif; ?>
        </tbody>
    </table>
</div>
