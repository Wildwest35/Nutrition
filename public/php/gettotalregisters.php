<?php
//Access: Authenticated Users
//Purpose: Collect total number elements of the "Measurements" categories

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['idLang'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT  COUNT(`weight`.`id`) as `totalWeight`
                                        FROM `weight`
                                        WHERE `weight`.`idUser` = :idUser");

                $query->bindValue(":idUser", $id);

                if($query->execute()) {
                    $row = $query->fetchAll(PDO::FETCH_ASSOC);

                        $query1 = $con->prepare("SELECT  COUNT(`weightbone`.`id`) as `totalWeightBone`
                                                FROM `weightbone`
                                                WHERE `weightbone`.`idUser` = :idUser");

                        $query1->bindValue(":idUser", $id);

                        if($query1->execute()) {
                            $row1 = $query1->fetchAll(PDO::FETCH_ASSOC);

                                $query2 = $con->prepare("SELECT  COUNT(`fatpercentage`.`id`) as `totalFatPercentage`
                                                        FROM `fatpercentage`                                
                                                        WHERE `fatpercentage`.`idUser` = :idUser");

                                $query2->bindValue(":idUser", $id);
                                
                                if($query2->execute()) {
                                    $row2 = $query2->fetchAll(PDO::FETCH_ASSOC);

                                        $query3 = $con->prepare("SELECT COUNT(`waterpercentage`.`id`) as `totalWaterPercentage`
                                                                FROM `waterpercentage`
                                                                WHERE `waterpercentage`.`idUser` = :idUser");
                            
                                        $query3->bindValue(":idUser", $id);

                                        if($query3->execute()) {
                                            $row3 = $query3->fetchAll(PDO::FETCH_ASSOC);

                                                echo json_encode(['status' => 'ok', 'data' => ['totalWeight' => $row, 'totalWeightBone' => $row1, 'totalFatPercentage' => $row2, 'totalWaterPercentage' => $row3]]);

                                            die();
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                                        }
                                        die();

                                    die();
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'false4']);
                                }
                                die();

                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false6']);
                        }
                        die();
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false7']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false8']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>