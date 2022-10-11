<?php
//Access: Authenticated Users
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
                                        JOIN `foodcategory` ON `foods`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `unitname` ON `foods`.`idUnitName` = `unitname`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `translationunitname` ON `translationunitname`.`idUnitName` = `unitname`.`id`
                                        WHERE `dailyeatings`.`idUser` = :id && `translationfoodname`.`idLang` = :idLang && `translationfoodcategory`.`idLang` = :idLang1 && `translationunitname`.`idLang` = :idLang2 
                                        && (`translationfoodname`.`translationFoodName` LIKE :search || `translationfoodcategory`.`translationFoodCategory` LIKE :search1 || `translationunitname`.`translationUnitName` LIKE :search2 || `foods`.`portion` LIKE :search3)
                                        GROUP BY `translationfoodname`.`translationFoodName`");
                
                $query->bindValue(":id", $id);
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":idLang1", $numLang);
                $query->bindValue(":idLang2", $numLang);
                $query->bindValue(":search", $search);
                $query->bindValue(":search1", $search);
                $query->bindValue(":search2", $search);
                $query->bindValue(":search3", $search);

                if($query->execute()) {
                    $countRecent = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countRecent]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false1']);
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