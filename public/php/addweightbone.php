<?php
//Access: Everyone
//Purpose: Add weight bone register

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['registerDate']) && isset($_POST['weightBoneValue'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $registerDate = $_POST['registerDate'];
            $weightBoneValue = $_POST['weightBoneValue'];

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $weightBoneValue) || !is_date_valid($registerDate)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `weightbone`.`weightBone`
                                        FROM `weightbone`
                                        WHERE `weightbone`.`idUser` = :idUser && `weightbone`.`weightBoneDate` = :weightBoneDate");

                $query->bindValue(":idUser", $id);
                $query->bindValue(":weightBoneDate", $registerDate);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `weightbone` SET `weightbone`.`weightBone` = :weightBoneValue WHERE `weightbone`.`idUser` = :idUser && `weightbone`.`weightBoneDate` = :weightBoneDate");
            
                        $query1->bindValue(':weightBoneValue', $weightBoneValue);
                        $query1->bindValue(':idUser', $id);
                        $query1->bindValue(':weightBoneDate', $registerDate);
            
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                        }
                    } else {
                        $query2 = $con->prepare("INSERT INTO `weightbone`(idUser, `weightBone`, weightBoneDate) VALUES(:idUser, :weightBoneValue, :weightBoneDate)");

                        $query2->bindParam(':idUser', $id);
                        $query2->bindParam(':weightBoneValue', $weightBoneValue);
                        $query2->bindParam(':weightBoneDate', $registerDate);

                        if($query2->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false3']);
                        }
                        die();
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false1']);
                }
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