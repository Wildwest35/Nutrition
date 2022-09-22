<?php
//Access: Everyone
//Purpose: Check if the username or email already exist during registration

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['table']) && isset($_POST['newVal'])) {
        include 'connect.php';

        $table = filter_var($_POST['table'], FILTER_SANITIZE_NUMBER_INT);
        $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        if($table == 1) {
            if(!preg_match(AlphaNumeric(), $newVal)) {
                echo json_encode(['status' => 'error', 'data' => '604']);
                die();
            } else {
                $query = $con->prepare("SELECT `users`.`username` FROM `users` WHERE `users`.`username` = :username || `users`.`email` = :email");
    
                $query->bindValue(':username', $newVal);
                $query->bindValue(':email', $newVal);
    
                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
    
                    if(!empty($row)) {
                        if ($query->rowCount() > 0) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => false]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => '608']);
                }
                die();
            }
        } else {
            if(!preg_match(Email(), $newVal)) {
                echo json_encode(['status' => 'error', 'data' => '604']);
                die();
            } else {
                $query = $con->prepare("SELECT `users`.`email` FROM `users` WHERE `users`.`username` = :username || `users`.`email` = :email");
    
                $query->bindValue(':username', $newVal);
                $query->bindValue(':email', $newVal);
    
                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
    
                    if(!empty($row)) {
                        if ($query->rowCount() > 0) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => false]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => '608']);
                }
                die();
            }
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => '609']);
    }
    die();
?>