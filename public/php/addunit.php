<?php
//Access: Everyone
//Purpose: Add unit

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['newUnitName']) && isset($_POST['idLang'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $newUnitName = $_POST['newUnitName'];
            $j = 0;
            include 'connect.php';

            if(!preg_match(AlphaLatin(), $newUnitName) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {   
                $query7 = $con->prepare("SELECT `translationunitname`.`translationUnitName`
                                        FROM `translationunitname`
                                        JOIN `unitname` ON `unitname`.`id` = `translationunitname`.`idUnitName`
                                        WHERE `translationunitname`.`translationUnitName` = :translationUnitName");

                $query7->bindValue(":translationUnitName", $newUnitName);

                if($query7->execute()) {
                    $row7 = $query7->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row7)) {
                        echo json_encode(['status' => 'error2', 'data' => 'false10']);
                    } else {
                        $query = $con->prepare("INSERT INTO unitname(unit) VALUES(:unit)");//idLang, :idLang, 

                        //$query->bindParam(':idLang', $idLang);
                        $query->bindParam(':unit', $newUnitName);

                        if($query->execute()) {
                            $query1 = $con->prepare("SELECT `unitname`.`id`
                                                    FROM `unitname`
                                                    WHERE `unitname`.`unit` = :unit");
                            //`unitname`.`idLang` = :idLang && 
                            //$query1->bindValue(":idLang", $idLang);
                            $query1->bindValue(":unit", $newUnitName);

                            if($query1->execute()) {
                                $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                                $query2 = $con->prepare("SELECT `language`.`id` FROM `language`");

                                if($query2->execute()) {
                                    $count = $query2->rowCount();
                                    while($row2 = $query2->fetch(PDO::FETCH_ASSOC)) {
                                        $j++;
                                        $query4 = $con->prepare("INSERT INTO translationunitname(idLang, idUnitName, translationUnitName) VALUES(:idLang, :idUnitName, :translationUnitName)");
            
                                        $query4->bindParam(':idLang', $row2['id']);
                                        $query4->bindParam(':idUnitName', $row1['id']);
                                        $query4->bindParam(':translationUnitName', $newUnitName);

                                        if($query4->execute()) {
                                            if($count == $j) {
                                                echo json_encode(['status' => 'ok', 'data' => true]);
                                            }
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'false6']);
                                        }
                                    }
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