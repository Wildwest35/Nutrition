<?php
//Access: Everyone
//Purpose: Logout active user

    @session_start();
    include 'corsAccess.php'; 

    if($_SESSION) {
        session_destroy();
        echo json_encode(['status' => 'ok', 'data' => true]);
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
	die();
?>