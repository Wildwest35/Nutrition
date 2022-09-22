<?php
//Access: Everyone
//Purpose: Activate/Deactivate account

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['isActivateAccount']) && isset($_POST['idUser'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $isActivateAccount = filter_var($_POST['isActivateAccount'], FILTER_SANITIZE_NUMBER_INT);
            $idUser = filter_var($_POST['idUser'], FILTER_SANITIZE_NUMBER_INT);
            
            include 'connect.php';

            if(!preg_match(Numeric(), $isActivateAccount) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idUser)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {   
                $query = $con->prepare("UPDATE `users` SET `users`.`isConfirmAccount` = :isConfirmAccount WHERE `users`.`id` = :id");
            
                $query->bindValue(':isConfirmAccount', $isActivateAccount);
                $query->bindValue(":id", $idUser);

                if($query->execute()) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
                }
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