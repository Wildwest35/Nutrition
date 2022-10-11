<?php
//Access: Authenticated Users
//Purpose: Delete user created food

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['idLang']) && isset($_POST['idFood']) && isset($_POST['newImg'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $idFood = filter_var($_POST['idFood'], FILTER_SANITIZE_NUMBER_INT);
            $newImgPath = $_POST['newImgPath'];
            $newImgHash = $_POST['newImgHash'];
            $newImg = $_POST['newImg'];
            $unlink = false;

            include 'connect.php';
            
            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(Numeric(), $idFood)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query1 = $con->prepare("SELECT `foods`.`idFoodName`
                                        FROM `foods`
                                        WHERE `foods`.`id` = :id");

                $query1->bindValue(":id", $idFood);

                if($query1->execute()) {     
                    $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                    $query = $con->prepare("DELETE FROM `foodnames` WHERE `foodnames`.`id` = :id");

                    $query->bindValue(":id", $row1['idFoodName']);

                    if($query->execute()) {
                        echo json_encode(['status' => 'ok', 'data' => true]);
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'false1']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false2']);
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