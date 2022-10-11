<?php
//Access: Authenticated Users
//Purpose: Admin create a system food from "Admin Panel"

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['idLang']) && isset($_POST['newFoodName']) && isset($_POST['newCategoryFood']) && isset($_POST['newUnit']) && isset($_POST['newPortion']) && isset($_POST['newCalories']) && isset($_POST['newProtein']) && isset($_POST['newCarb']) && isset($_POST['newFat']) && isset($_POST['newFiber']) && isset($_POST['newSaturated']) && isset($_POST['newUnsaturated']) && isset($_POST['newSugar']) && isset($_POST['newBitaminD']) && isset($_POST['newImgPath']) && isset($_POST['newImgName']) && isset($_POST['newImgHash'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $idFoodName = $_POST['newFoodName'];
            $idFoodCategory = filter_var($_POST['newCategoryFood'], FILTER_SANITIZE_NUMBER_INT);
            $idUnitName = filter_var($_POST['newUnit'], FILTER_SANITIZE_NUMBER_INT);
            $belongCategory = 1;
            $portion = $_POST['newPortion'];
            $calories = $_POST['newCalories']; 
            $protein = $_POST['newProtein'];
            $carb = $_POST['newCarb'];
            $fat = $_POST['newFat'];
            $fiber = $_POST['newFiber'];
            $saturated = $_POST['newSaturated'];
            $unsaturated = $_POST['newUnsaturated'];
            $sugar = $_POST['newSugar'];
            $bitamins = $_POST['newBitaminD'];
            $imgPath = $_POST['newImgPath'];
            $imgName = $_POST['newImgName'];
            $imgHash = $_POST['newImgHash'];
            $isFavourite = 1;
            $fullDate2 = date("Y-m-d  H:i:s");
            $fullDate = date("Y-m-d");
            $j = 0;

            include 'connect.php';

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(AlphaLatin(), $idFoodName) || !preg_match(Numeric(), $idFoodCategory) || !preg_match(Numeric(), $idUnitName) || !preg_match(Numeric(), $portion) || !preg_match(Numeric(), $calories) || !preg_match(Numeric(), $protein) || !preg_match(Numeric(), $carb) || !preg_match(Numeric(), $fat) || !preg_match(Numeric(), $fiber) || !preg_match(Numeric(), $saturated) || !preg_match(Numeric(), $unsaturated) || !preg_match(Numeric(), $sugar) || !preg_match(Numeric(), $bitamins)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {   
                $query7 = $con->prepare("SELECT `translationfoodname`.`translationFoodName`
                                        FROM `translationfoodname`
                                        JOIN `foodnames` ON `foodnames`.`id` = `translationfoodname`.`idFoodName`
                                        JOIN `foods` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        WHERE `translationfoodname`.`translationFoodName` = :translationFoodName && `foods`.`belongCategory` = :belongCategory");

                $query7->bindValue(":translationFoodName", $idFoodName);
                $query7->bindValue(":belongCategory", $belongCategory);

                if($query7->execute()) {
                    $row7 = $query7->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row7)) {
                        echo json_encode(['status' => 'error2', 'data' => 'false10']);
                    } else {
                        $query = $con->prepare("INSERT INTO foodnames(foodName) VALUES(:foodName)");//idLang, :idLang, 

                        //$query->bindParam(':idLang', $idLang);
                        $query->bindParam(':foodName', $idFoodName);

                        if($query->execute()) {
                            $query1 = $con->prepare("SELECT `foodnames`.`id`
                                                    FROM `foodnames`
                                                    WHERE `foodnames`.`foodName` = :foodName");
                            //`foodnames`.`idLang` = :idLang && 
                            //$query1->bindValue(":idLang", $idLang);
                            $query1->bindValue(":foodName", $idFoodName);

                            if($query1->execute()) {
                                $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                                $query2 = $con->prepare("SELECT `language`.`id` FROM `language`");

                                if($query2->execute()) {
                                    $query3 = $con->prepare("INSERT INTO foods(idFoodName, idFoodCategory, idUnitName, belongCategory, portion, calories, protein, carb, fat, fiber, saturated, unsaturated, sugar, bitamins, imgPath, imgName, imgHash, foodDateCreated) VALUES(:idFoodName, :idFoodCategory, :idUnitName, :belongCategory, :portion, :calories, :protein, :carb, :fat, :fiber, :saturated, :unsaturated, :sugar, :bitamins, :imgPath, :imgName, :imgHash, :foodDateCreated)");

                                    $query3->bindParam(':idFoodName', $row1['id']);
                                    $query3->bindParam(':idFoodCategory', $idFoodCategory);
                                    $query3->bindParam(':idUnitName', $idUnitName);
                                    $query3->bindParam(':belongCategory', $belongCategory);
                                    $query3->bindParam(':portion', $portion);
                                    $query3->bindParam(':calories', $calories);
                                    $query3->bindParam(':protein', $protein);
                                    $query3->bindParam(':carb', $carb);
                                    $query3->bindParam(':fat', $fat);
                                    $query3->bindParam(':fiber', $fiber);
                                    $query3->bindParam(':saturated', $saturated);
                                    $query3->bindParam(':unsaturated', $unsaturated);
                                    $query3->bindParam(':sugar', $sugar);
                                    $query3->bindParam(':bitamins', $bitamins);
                                    $query3->bindParam(':imgPath', $imgPath);
                                    $query3->bindParam(':imgName', $imgName);
                                    $query3->bindParam(':imgHash', $imgHash);
                                    $query3->bindParam(':foodDateCreated', $fullDate);

                                    if($query3->execute()) {
                                        $count = $query2->rowCount();
                                        while($row2 = $query2->fetch(PDO::FETCH_ASSOC)) {
                                            $j++;
                                            $query4 = $con->prepare("INSERT INTO translationfoodname(idLang, idFoodName, translationFoodName) VALUES(:idLang, :idFoodName, :translationFoodName)");
                
                                            $query4->bindParam(':idLang', $row2['id']);
                                            $query4->bindParam(':idFoodName', $row1['id']);
                                            $query4->bindParam(':translationFoodName', $idFoodName);

                                            if($query4->execute()) { 
                                                if($count == $j) {
                                                    echo json_encode(['status' => 'ok', 'data' => true]);
                                                }
                                            } else {
                                                echo json_encode(['status' => 'error', 'data' => 'false6']);
                                            }
                                        }
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'false5']);
                                    }
                                    die();
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'false1']);
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false2']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false3']);
                        }
                        die();
                    }
                } else {
                    echo json_encode(['status' => 'error2', 'data' => 'false9']);
                }
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false4']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>