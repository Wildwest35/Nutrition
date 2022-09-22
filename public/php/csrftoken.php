<?php
//Access: Everyone
//Purpose: Csrf Token

    @session_start();
    include 'corsAccess.php'; 

    $key = bin2hex(random_bytes(32));
    $_SESSION['token_csrf'] = hash_hmac('sha256', 'random csrf string: login.php', $key);
    $_SESSION['maxTime'] = 60*60;
    $_SESSION['key_time'] = time();

    session_regenerate_id(true);
    
    echo json_encode(['status' => 'ok', 'data' => $_SESSION['token_csrf']]);
?>