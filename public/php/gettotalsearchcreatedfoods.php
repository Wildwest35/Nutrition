<?php
//Access: Authenticated Users
//Purpose: Collect total search created foods

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
                $query = $con->prepare("SELECT `translationfoodname`.`translationFoodName`, `translationfoodcategory`.`translationFoodCategory`
                                        FROM `createdfood`
                                        JOIN `foods` ON `createdfood`.`idFood` = `foods`.`id`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        JOIN `foodcategory` ON `foods`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `users` ON `users`.`id` = `createdfood`.`idUser`
                                        WHERE `translationfoodcategory`.`idLang` = :idLang && `translationfoodname`.`idLang` = :idLang1 && (`foods`.`belongCategory` = 2 || `foods`.`belongCategory` = 3) && (`translationfoodname`.`translationFoodName` LIKE :search || `translationfoodcategory`.`translationFoodCategory` LIKE :search1 || `users`.`username` LIKE :search2 || `foods`.`portion` LIKE :search3)");
                
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":idLang1", $numLang);
                $query->bindValue(":search", $search);
                $query->bindValue(":search1", $search);
                $query->bindValue(":search2", $search);
                $query->bindValue(":search3", $search);

                if($query->execute()) {
                    $countFood = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countFood]);
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