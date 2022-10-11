<?php
//Access: Authenticated Users
//Purpose: Upload Image

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
        $uploadOk = 1;

        if(!preg_match(Numeric(), $id)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {
            if(isset($_FILES['file']['name'])) {
                $split = '/';
                $split2 = '.';
                $target_dir = '../img_public/';
                $filetype = $_FILES['file']['type'];
                $filename = $_FILES['file']['name'];
                $type = explode($split, $filetype, 2);
                $name = explode($split2, $filename, 2);
                $bin2hex = bin2hex(random_bytes(32));
                $token = hash_hmac('sha256', $name[0] . '.' . $type[1], $bin2hex);
                $target = $target_dir . basename($token . '.' . $type[1]);
                $imgFileType = strtolower(pathinfo($target, PATHINFO_EXTENSION));
                $check = getimagesize($_FILES['file']['tmp_name']);

                if($check != false) {

                } else {
                    $uploadOk = 2;
                }

                if($uploadOk == 2) {
                    //echo 'Sorry your file was not uploaded';
                } else {
                    if(move_uploaded_file($_FILES['file']['tmp_name'], $target)) {}
                }
            } else {
                $uploadOk = 2;
            }
        }

        echo json_encode(['status' => 'ok', 'data' => ['upload' => $uploadOk, 'bin2hex' => $bin2hex, 'filename' => $name[0]]]);
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>