<?php
//Access: Everyone
//Purpose: Authenticate a user

    @session_start();
    include 'corsAccess.php'; 
    //include 'langTranslation.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $wrongData = 'Λάθος δεδομένα!';
            $wrongMsg = 'Κάτι πήγε λάθος';
            $refreshPage = 'Ο χρόνος στη σελίδα έληξε. Κάντε ανανέωση!';
            $accountNotActivated = 'Ο λογαριασμός σας δεν είναι ενεργοποιημένος!';
            $differentPass = 'Περάστηκε διαφορετικό συνθηματικό!';
        } else {
            $wrongData = 'Wrong Data!';
            $wrongMsg = 'Something went wrong';
            $refreshPage = 'Page timed out. Refresh the page!';
            $accountNotActivated = 'You \'re account isn\'t activated yet!';
            $differentPass = 'Different password was entered!';
        }
    } else {
        $wrongData = 'Λάθος δεδομένα!';
        $wrongMsg = 'Κάτι πήγε λάθος';
        $refreshPage = 'Ο χρόνος στη σελίδα έληξε. Κάντε ανανέωση!';
        $accountNotActivated = 'Ο λογαριασμός σας δεν είναι ενεργοποιημένος!';
        $differentPass = 'Περάστηκε διαφορετικό συνθηματικό!';
    }

    if(isset($_POST['csrf'])) {
        $csrfForm = $_POST['csrf'];
        $csrfSession = $_SESSION['token_csrf'];

        if(isset($_SESSION['key_time'])) {
            $key_time = $_SESSION['key_time'];
        } else {
            $key_time = 0;
        }

        if(isset($_SESSION['maxTime'])) {
            $maxTime = $_SESSION['maxTime'];
        } else {
            $maxTime = 0;
        }

        if(hash_equals($csrfForm, $csrfSession)) {
            if(isset($_POST['email']) && isset($_POST['password'])) {
                $email = filter_var($_POST['email'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                $pass = filter_var($_POST['password'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

                include 'connect.php';
    
                $query = $con->prepare("SELECT `users`.`id`, `users`.`pass`, `users`.`binToken`, `users`.`isConfirmAccount`, `users`.`apiToken` FROM `users` WHERE (`users`.`email` = :email || `users`.`username` = :username)");
    
                $query->bindValue(":email", $email);
                $query->bindValue(":username", $email);
    
                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
    
                    if(!empty($row)) {
                        if($row['isConfirmAccount'] == 1) {
                            $bin2hex = $row['binToken'];
                            $pass1 = hash_hmac('sha256', $pass, $bin2hex);
                            if(hash_equals($pass1, $row["pass"])) {
                                if(($key_time + $maxTime) >= time()) {
                                    session_regenerate_id(true);
                                    unset($_SESSION['maxTime']);
                                    unset($_SESSION['key_time']);
                                    $_SESSION['username'] = $row["id"];
                                    $_SESSION['token_csrf'] = $row['apiToken'];
                                    echo json_encode(['status' => 'ok', 'data' => true]);
                                } else {
                                    unset($_SESSION['username']);
                                    unset($_SESSION['maxTime']);
                                    unset($_SESSION['key_time']);
                                    echo json_encode(['status' => 'error', 'data' => $refreshPage]);
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => $differentPass]);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => $accountNotActivated]);
                        }
                    } else {
                        echo json_encode(['status' => 'error', 'data' => $wrongData]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => $wrongData]);                   
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => $wrongData]);
            } 
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => $wrongMsg]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>