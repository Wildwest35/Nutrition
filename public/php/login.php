<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php'; 
    
/*     if(isset($_SESSION['username'])) {
        echo json_encode(['status' => 'ok', 'data' => $_SESSION['username']]);
    } else { */
        //$refresh = filter_var($_POST['refresh'], FILTER_SANITIZE_NUMBER_INT);
        
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
        
                    $query = $con->prepare("SELECT username, pass, binToken FROM users WHERE email = :email || username = :username");
        
                    $query->bindValue(":email", $email);
                    $query->bindValue(":username", $email);
        
                    if($query->execute()) {
                        $row = $query->fetch(PDO::FETCH_ASSOC);
        
                        if(!empty($row)) {
                            $bin2hex = $row['binToken'];
                            $pass1 = hash_hmac('sha256', $pass, $bin2hex);
                            if(hash_equals($pass1, $row["pass"])) {
                                if(($key_time + $maxTime) >= time()) {
                                    session_regenerate_id(true);
                                    unset($_SESSION['maxTime']);
                                    unset($_SESSION['key_time']);
                                    $_SESSION['username'] = $row["username"];
                                    echo json_encode(['status' => 'ok', 'data' => true]);
                                } else {
                                    unset($_SESSION['username']);
                                    unset($_SESSION['maxTime']);
                                    unset($_SESSION['key_time']);
                                    echo json_encode(['status' => 'error', 'data' => 'Ο χρόνος στη σελίδα έληξε. Κάντε ανανέωση!']);//['key_time' => $key_time, 'max_time' => $maxTime, 'time' => time()]]);
                                }
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'Περάστηκε διαφορετικός κωδικός πρόσβασης!']);
                            }
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'Λάθος Δεδομένα!']);
                        }
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'Λάθος Δεδομένα!']);                   
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'Λάθος Δεδομένα!']);
                } 
                
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Λάθος Δεδομένα!']);
            }
        } else {
            $key = bin2hex(random_bytes(32));
            $_SESSION['token_csrf'] = hash_hmac('sha256', 'random csrf string: login.php', $key); 

            $_SESSION['maxTime'] = 60*60;
            $maxTime = $_SESSION['maxTime'];

            $_SESSION['key_time'] = time();
            $key_time = $_SESSION['key_time'];

            session_regenerate_id(true);
            
            echo json_encode(['status' => 'error', 'data' => $_SESSION['token_csrf']]);
        }
    //}
?>