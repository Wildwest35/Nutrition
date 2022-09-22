<?php
//Access: Everyone
//Purpose: Check language

    @session_start();
    include 'corsAccess.php'; 

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];

        if($lang !== 'en' && $lang !== 'gr') {
            $lang = 'gr';
        } 
        echo json_encode(['status' => 'ok', 'data' => $lang]);
        die();
    } else {
        $lang = 'gr';
        echo json_encode(['status' => 'error', 'data' => $lang]);
    }
    die();
?>