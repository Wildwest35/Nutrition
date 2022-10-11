<?php

//Access: Authenticated Users
//Purpose: Collect all user's weight info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
        if(isset($_SESSION['idUser'])) {
            $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
        }

        include 'connect.php';
        
        if(!preg_match(Numeric(), $id)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {        
            $query = $con->prepare("SELECT `users`.`dateCreated` FROM `users` WHERE `users`.`id` = :id");

            $query->bindValue(":id", $id);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    echo json_encode(['status' => 'ok', 'data' => $row]);
                } else {
                    echo json_encode(['status' => 'ok', 'data' => []]);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => false]);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>