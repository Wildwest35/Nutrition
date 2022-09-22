<?php
//Access: Everyone
//Purpose: Collect all personal info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['user'])) {
            $usernames = filter_var($_POST['user'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }

            include 'connect.php';
            
            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("SELECT `users`.`email`, `users`.`sex`, `users`.`age`, `users`.`weights`, `users`.`height`, `users`.`isIncreaseWeight`, `users`.`requestedWeight`, `users`.`exercise`, `users`.`kilos` FROM `users` WHERE `users`.`username` = :username && `users`.`id` = :id");

                $query->bindValue(":username", $usernames);
                $query->bindValue(":id", $id);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        echo json_encode(['status' => 'ok', 'data' => $row]);
                    } else {
                        
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
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>