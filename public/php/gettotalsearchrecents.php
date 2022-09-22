<?php
//Access: Everyone
//Purpose: Collect total search recents

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $numLang = filter_var($_POST['numLang'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";

            include 'connect.php';

            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `translationfoodname`.`translationFoodName`
                                        FROM `dailyeatings`
                                        JOIN `foods` ON `dailyeatings`.`idFood` = `foods`.`id`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        WHERE `dailyeatings`.`idUser` = :id && `translationfoodname`.`idLang` = :idLang && `translationfoodname`.`translationFoodName` LIKE :search");
                
                $query->bindValue(":id", $id);
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":search", $search);

                if($query->execute()) {
                    $countRecent = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countRecent]);
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