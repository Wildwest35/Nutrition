<?php
//Access: Everyone
//Purpose: Delete fat percentage register

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['idRegister'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idRegister = $_POST['idRegister'];

            include 'connect.php';
            
            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $idRegister)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("DELETE FROM `fatpercentage` WHERE `fatpercentage`.`id` = :idRegister");

                $query->bindValue(":idRegister", $idRegister);

                if($query->execute()) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false1']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false3']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>