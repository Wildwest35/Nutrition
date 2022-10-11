<?php
//Access: Authenticated Users
//Purpose: Change language

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal'])) {
            include 'connect.php';

            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_NUMBER_INT);
            $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);

            if($newVal == 1) {
                $newVal = 2;
            } else {
                $newVal = 1;
            }        

            if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $newVal) || !preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("UPDATE `users` SET `users`.`idLang` = :idLang WHERE `users`.`username` = :username && `users`.`id` = :id");
                
                $query->bindValue(':idLang', $newVal);
                $query->bindValue(':username', $username);
                $query->bindValue(":id", $id);

                if($query->execute()) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
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
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>