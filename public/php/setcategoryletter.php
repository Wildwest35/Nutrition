<?php
//Access: Everyone
//Purpose: Set Category Letter

    @session_start();
    include 'corsAccess.php'; 

    if(isset($_POST['category'])) {
        $category = $_POST['category'];
        $_SESSION['category'] = $category;
    } else {
        $category = 'u';
        $_SESSION['category'] = $category;
    }

    echo json_encode(['status' => 'ok', 'data' => true]);
    die();
?>