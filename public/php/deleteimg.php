<?php
//Access: Authenticated Users
//Purpose: Delete Image

    @session_start();

    if(isset($_SESSION['username']) && isset($_POST['newImg']) && isset($_POST['fileLength']) && isset($_POST['newImgHash']) && isset($_POST['newImgPath'])) {
        include 'corsAccess.php';
        include 'connect.php';
        include 'checkInput.php';

        $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT); 
        $newImg = $_POST['newImg'];
        $newImgHash = $_POST['newImgHash'];
        $newImgPath = $_POST['newImgPath'];
        $fileLength = $_POST['fileLength'];
        $unlink = false;

        if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $fileLength)) {
            echo json_encode(['status' => 'ok', 'data' => 'Error Code: #704']);
        } else {
            if($fileLength == 0) {
                echo json_encode(['status' => 'ok', 'data' => 'true1']);
            } else {
                if($newImgPath === './img_public/') {
                    if($newImgHash !== '') {
                        if(file_exists('.' . $newImg)) {
                            $unlink = unlink('.' . $newImg);
                            if($unlink) {
                                echo json_encode(['status' => 'ok', 'data' => 'true2']);
                            } else {
                                echo json_encode(['status' => 'ok', 'data' => 'true3']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'ok', 'data' => 'true4']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => 'true5']);
                    }
                    die();
                } else {
                    if($newImgHash !== '') {
                        if(file_exists('.' . $newImg)) {
                            $unlink = unlink('.' . $newImg);
                            if($unlink) {
                                echo json_encode(['status' => 'ok', 'data' => 'true6']);
                            } else {
                                echo json_encode(['status' => 'ok', 'data' => 'true7']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'ok', 'data' => 'true8']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => 'true9']);
                    }
                    die();
                }
                die();
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'ok', 'data' => 'true8']);   
    }
    die();
?>