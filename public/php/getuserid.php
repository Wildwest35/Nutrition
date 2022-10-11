<?php
//Access: Authenticated Users
//Purpose: Save the id of the user in a Session

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['idUser']) && isset($_POST['nameUser'])) {
            if(isset($_SESSION['idUser']) && isset($_SESSION['nameUser'])) {
                unset($_SESSION['idUser']);
                unset($_SESSION['nameUser']);
            }
            $idUser = filter_var($_POST['idUser'], FILTER_SANITIZE_NUMBER_INT);
            $nameUser = $_POST['nameUser'];
            if(!preg_match(AlphaNumeric(), $nameUser) || !preg_match(Numeric(), $idUser)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $_SESSION['idUser'] = $idUser;
                $_SESSION['nameUser'] = $nameUser;
                echo json_encode(['status' => 'ok', 'data' => true]);            
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => false]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>