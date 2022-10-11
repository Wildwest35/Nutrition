<?php
//Access: Authenticated Users
//Purpose: Destroy the Session of the user

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_SESSION['idUser']) && isset($_SESSION['nameUser'])) {
            unset($_SESSION['idUser']);
            unset($_SESSION['nameUser']);
            echo json_encode(['status' => 'ok', 'data' => true]);
        } else {
            echo json_encode(['status' => 'error', 'data' => false]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>