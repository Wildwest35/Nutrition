<?php
//Access: Everyone
//Purpose: Collect total search foods

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $numLang = filter_var($_POST['numLang'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";

            include 'connect.php';

            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `translationfoodname`.`translationFoodName` 
                                        FROM `foods`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        WHERE `translationfoodname`.`idLang` = :idLang && (`foods`.`belongCategory` = 1 || `foods`.`belongCategory` = 3) && `translationfoodname`.`translationFoodName` LIKE :search");
                
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":search", $search);

                if($query->execute()) {
                    $countFood = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countFood]);
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