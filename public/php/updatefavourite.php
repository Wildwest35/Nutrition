<?php
//Access: Authenticated Users
//Purpose: Update dailyeating favourite

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal']) && isset($_POST['idFood'])) {
            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_NUMBER_INT);
            $idFood = filter_var($_POST['idFood'], FILTER_SANITIZE_NUMBER_INT);
            $date = date("Y-m-d H:i:s");
            $isFavourite = 2;

            if($newVal == 2) {
                $newVal = 1;
            } else if($newVal == 1) {
                $newVal = 2;
            }

            include 'connect.php';

            $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $username = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }

            if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $newVal) || !preg_match(Numeric(), $idFood)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("UPDATE `dailyeatings` SET `dailyeatings`.`isFavourite` = :isFavourite WHERE `dailyeatings`.`idUser` = :idUser && `dailyeatings`.`idFood` = :idFood");
                    
                $query->bindValue(':isFavourite', $newVal);
                $query->bindValue(':idUser', $id);
                $query->bindValue(":idFood", $idFood);
                
                if($query->execute()) {
                    $query3 = $con->prepare("UPDATE `createdfood` SET `createdfood`.`isFavourite` = :isFavourite WHERE `createdfood`.`idUser` = :idUser && `createdfood`.`idFood` = :idFood");
                    
                    $query3->bindValue(':isFavourite', $newVal);
                    $query3->bindValue(':idUser', $id);
                    $query3->bindValue(":idFood", $idFood);
                    
                    if($query3->execute()) {
                        $query1 = $con->prepare("SELECT `favourites`.`id` FROM `favourites` WHERE `favourites`.`idUser` = :idUser && `favourites` .`idFood` = :idFood");                                             

                        $query1->bindValue(":idUser", $id);
                        $query1->bindValue(":idFood", $idFood);

                        if($query1->execute()) {
                            $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                            if(!empty($row1)) {
                                if($newVal == 1) {
                                    $query2 = $con->prepare("DELETE FROM `favourites` WHERE `favourites`.`idUser` = :idUser && `favourites` .`idFood` = :idFood");

                                    $query2->bindValue(":idUser", $id);
                                    $query2->bindValue(":idFood", $idFood);
                        
                                    if($query2->execute()) {
                                        echo json_encode(['status' => 'ok', 'data' => $newVal]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => false]);
                                    }
                                    die();
                                } else {
                                    $query4 = $con->prepare("INSERT INTO favourites(idUser, idFood, isFavourite, favouriteDate) VALUES(:idUser, :idFood, :isFavourite, :favouriteDate)");

                                    $query4->bindParam(':idUser', $id);
                                    $query4->bindParam(':idFood', $idFood);
                                    $query4->bindParam(':isFavourite', $isFavourite);
                                    $query4->bindParam(':favouriteDate', $date);
                                                    
                                    if($query4->execute()) {
                                        echo json_encode(['status' => 'ok', 'data' =>  $newVal]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => false]);
                                    }
                                    die();                               
                                }
                                die();
                            } else {
                                if($newVal == 2) {
                                    $query4 = $con->prepare("INSERT INTO favourites(idUser, idFood, isFavourite, favouriteDate) VALUES(:idUser, :idFood, :isFavourite, :favouriteDate)");

                                    $query4->bindParam(':idUser', $id);
                                    $query4->bindParam(':idFood', $idFood);
                                    $query4->bindParam(':isFavourite', $isFavourite);
                                    $query4->bindParam(':favouriteDate', $date);
                                                    
                                    if($query4->execute()) {
                                        echo json_encode(['status' => 'ok', 'data' =>  $newVal]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => false]);
                                    }
                                    die();
                                } else {
                                    $query2 = $con->prepare("DELETE FROM `favourites` WHERE `favourites`.`idUser` = :idUser && `favourites` .`idFood` = :idFood");

                                    $query2->bindValue(":idUser", $id);
                                    $query2->bindValue(":idFood", $idFood);
                        
                                    if($query2->execute()) {
                                        echo json_encode(['status' => 'ok', 'data' => $newVal]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => false]);
                                    }
                                    die();
                                }
                                die();
                            }
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => true]);
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>