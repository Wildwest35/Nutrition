<?php
//Access: Everyone
//Purpose: Get Category Letter

    @session_start();
    include 'corsAccess.php'; 
/*     echo $_SESSION['categoryLetter'];
    die(); */
    if(isset($_SESSION['category'])) {
        $category = $_SESSION['category'];
    } else {
        $category = 'u';
        $_SESSION['category'] = $category;
    }

    echo json_encode(['status' => 'ok', 'data' => $category]);
    die();
?>