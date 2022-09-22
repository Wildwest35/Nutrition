<?php
//Access: Everyone
//Purpose: Get username and lang

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';
    include 'https.php';
    
    if(isApiToken()) {
        if(isset($_SESSION['mealCategory'])) {
            $mealCategory = $_SESSION['mealCategory'];
        } else {
            $mealCategory = 0;
        }

        if(isset($_SESSION['fulldate'])) {
            $fullDate = $_SESSION['fulldate'];
        } else {
            $fullDate = date("Y-m-d");
        }

        include 'connect.php';
        
        $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);

        if(!preg_match(Numeric(), $id)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {
            $query = $con->prepare("SELECT `users`.`username`, `language`.`language`, `users`.`category` FROM `users` JOIN `language` ON `language`.`id` = `users`.`idLang` WHERE `users`.`id` = :id");

            $query->bindValue(":id", $id);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(isset($_SESSION['idUser']) && isset($_SESSION['nameUser'])) {
                    echo json_encode(['status' => 'ok', 'data' => ['username' => $row['username'], 'lang' => $row['language'], 'idUser' => $_SESSION['idUser'], 'nameUser' => $_SESSION['nameUser'], 'category' => $row['category'], 'mealCategory' => $mealCategory, 'fulldate' => $fullDate]]);
                } else {
                    echo json_encode(['status' => 'ok', 'data' => ['username' => $row['username'], 'lang' => $row['language'], 'category' => $row['category'], 'mealCategory' => $mealCategory, 'fulldate' => $fullDate]]);
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