<?php
//Access: Everyone
//Purpose: validation functions in PHP

    function AlphaNumeric() {
        $alphanumeric = '/^[0-9a-zA-Z_]+$/';
        return $alphanumeric;
    }

    function Alpha() {
        $alpha = '/^[a-zA-Z_]+$/';
        return $alpha;
    }

    function Numeric() {
        $numeric = '/^[0-9.]+$/';
        return $numeric;
    }

    function Email() {
        $email = '/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/';
        return $email;
    }

    function AlphaLatin() {
        $alphalatin = '/^[a-zA-Z\p{Greek}0-9\s\_\.\%\-\,\'\(\) ]+$/u';
        return $alphalatin;
    }

    function roundOff($num, $places) {
		$num = (float) number_format($num, $places, '.', "");
		$x = pow(10, $places);
		
		return round($num * $x) / $x;
    }

    function is_date_valid($date, $format = "Y-m-d") {
        $parsed_date = date_parse_from_format($format, $date);
        if(!$parsed_date['error_count'] && !$parsed_date['warning_count']) {
            return true;
        }
    
        return false;
    }

    function isApiToken() {
        if(isset($_SESSION['username']) && isset($_SESSION['token_csrf'])) {
            include 'connect.php';

            $query = $con->prepare("SELECT `users`.`apiToken` FROM `users` WHERE `users`.`id` = :id");

            $query->bindValue(":id", $_SESSION['username']);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    if($row['apiToken'] == $_SESSION['token_csrf']) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
?>