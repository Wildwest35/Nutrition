<?php
//Access: Everyone
//Purpose: Update Created Food

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['idLang']) && isset($_POST['newFoodName']) && isset($_POST['idFood']) && isset($_POST['newCalories']) && isset($_POST['newPortion']) && isset($_POST['newUnit']) && isset($_POST['newCategoryFood']) && isset($_POST['newProtein']) && isset($_POST['newCarb']) && isset($_POST['newFat']) && isset($_POST['newFiber']) && isset($_POST['newSugar']) && isset($_POST['newSaturated']) && isset($_POST['newUnsaturated']) && isset($_POST['newBitaminD']) && isset($_POST['newImgPath']) && isset($_POST['newImgName']) && isset($_POST['newImgHash'])) {
            include 'connect.php';

            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_POST['idUser']) && isset($_POST['idCreatedFood'])) {
                $idUser = filter_var($_POST['idUser'], FILTER_SANITIZE_NUMBER_INT);
                $idCreatedFood = filter_var($_POST['idCreatedFood'], FILTER_SANITIZE_NUMBER_INT);
            } else if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $newFoodName = $_POST['newFoodName'];
            $idFood = filter_var($_POST['idFood'], FILTER_SANITIZE_NUMBER_INT);
            $newCalories = $_POST['newCalories'];
            $newPortion = $_POST['newPortion'];
            $newUnit = $_POST['newUnit'];
            $newCategoryFood = $_POST['newCategoryFood'];
            $newProtein = $_POST['newProtein'];
            $newCarb = $_POST['newCarb'];
            $newFat = $_POST['newFat'];
            $newFiber = $_POST['newFiber'];
            $newSugar = $_POST['newSugar'];
            $newSaturated = $_POST['newSaturated'];
            $newUnsaturated = $_POST['newUnsaturated'];
            $newBitaminD = $_POST['newBitaminD'];
            $newImgPath = $_POST['newImgPath'];
            $newImgName = $_POST['newImgName'];
            $newImgHash = $_POST['newImgHash'];
            $belongCategory = $_POST['belongCategory'];

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(AlphaLatin(), $newFoodName) || !preg_match(Numeric(), $idFood) || !preg_match(Numeric(), $newCalories) || !preg_match(Numeric(), $newPortion) || !preg_match(Numeric(), $newUnit) || !preg_match(Numeric(), $newCategoryFood) || !preg_match(Numeric(), $newProtein) || !preg_match(Numeric(), $newCarb) || !preg_match(Numeric(), $newFat) || !preg_match(Numeric(), $newFiber) || !preg_match(Numeric(), $newSugar) || !preg_match(Numeric(), $newSaturated) || !preg_match(Numeric(), $newUnsaturated) || !preg_match(Numeric(), $newBitaminD)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
    /*             $query7 = $con->prepare("SELECT `translationfoodname`.`translationFoodName`
                                        FROM `translationfoodname`
                                        JOIN `foodnames` ON `foodnames`.`id` = `translationfoodname`.`idFoodName`
                                        JOIN `foods` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `createdfood` ON `createdfood`.`idFood` = `foods`.`id`
                                        WHERE `createdfood`.`idUser` = :idUser && `translationfoodname`.`idLang` = :idLang && `translationfoodname`.`translationFoodName` = :translationFoodName && `foods`.`belongCategory` = :belongCategory");

                $query7->bindValue(":idUser", $id);
                $query7->bindValue(":idLang", $idLang);
                $query7->bindValue(":translationFoodName", $newFoodName);
                $query7->bindValue(":belongCategory", $belongCategory); */

    /*             if($query7->execute()) {
                    $row7 = $query7->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row7)) {
                        echo json_encode(['status' => 'error2', 'data' => 'false10']);
                    } else { */
                        $query = $con->prepare("UPDATE `foods` 
                                                SET `foods`.`idFoodCategory` = :idFoodCategory, `foods`.`idUnitName` = :idUnitName, `foods`.`portion` = :portion, `foods`.`calories` = :calories, `foods`.`protein` = :protein, `foods`.`carb` = :carb, `foods`.`fat` = :fat, `foods`.`fiber` = :fiber, `foods`.`saturated` = :saturated, `foods`.`unsaturated` = :unsaturated, `foods`.`sugar` = :sugar, `foods`.`bitamins` = :bitamins, `foods`.`imgPath` = :newImgPath, `foods`.`imgName` = :imgName, `foods`.`imgHash` = :imgHash
                                                WHERE `foods`.`id` = :id");

                        $query->bindValue(":idFoodCategory", $newCategoryFood);
                        $query->bindValue(":idUnitName", $newUnit);
                        $query->bindValue(":portion", $newPortion);
                        $query->bindValue(":calories", $newCalories);
                        $query->bindValue(":protein", $newProtein);
                        $query->bindValue(":carb", $newCarb);
                        $query->bindValue(":fat", $newFat);
                        $query->bindValue(":fiber", $newFiber);
                        $query->bindValue(":saturated", $newSaturated);
                        $query->bindValue(":unsaturated", $newUnsaturated);
                        $query->bindValue(":sugar", $newSugar);
                        $query->bindValue(":bitamins", $newBitaminD);
                        $query->bindValue(":newImgPath", $newImgPath);
                        $query->bindValue(":imgName", $newImgName);
                        $query->bindValue(":imgHash", $newImgHash);
                        $query->bindValue(":id", $idFood);
                    
                        if($query->execute()) {
                            $query1 = $con->prepare("SELECT `foods`.`idFoodName`
                                                    FROM `foods`
                                                    WHERE `foods`.`id` = :id");

                            $query1->bindValue(":id", $idFood);

                            if($query1->execute()) {     
                                $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                                $query2 = $con->prepare("UPDATE `translationfoodname`
                                                        SET `translationfoodname`.`translationFoodName` = :translationFoodName
                                                        WHERE `translationfoodname`.`idFoodName` = :idFoodName && `translationfoodname`.`idLang` = :idLang");

                                $query2->bindValue(":translationFoodName", $newFoodName);
                                $query2->bindValue(":idFoodName", $row1['idFoodName']);
                                $query2->bindValue(":idLang", $idLang);
                                
                                if($query2->execute()) {
                                    if(isset($_POST['idUser'])) {
                                        $query3 = $con->prepare("UPDATE `createdFood`
                                                                SET `createdFood`.`idUser` = :idUser
                                                                WHERE `createdFood`.`id` = :id");

                                        $query3->bindValue(":idUser", $idUser);
                                        $query3->bindValue(":id", $idCreatedFood);
                                        
                                        if($query3->execute()) {
                                            echo json_encode(['status' => 'ok', 'data' => true]);
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'false4']);
                                        }
                                    } else {
                                        echo json_encode(['status' => 'ok', 'data' => true]);
                                    }
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'false3']);
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false2']);  
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false4']);                       
                        }
                        die();
    /*                }
                } else {
                    echo json_encode(['status' => 'error2', 'data' => 'false5']);
                }
                die(); */
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