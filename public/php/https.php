<?php
//Access: Everyone
//Purpose: Check HTTPS
    if(isset($_SERVER['REQUEST_URI'])) {
        if(!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "") {  
            $redirect = "https://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];  
            header("HTTP/1.1 301 Moved Permanently");  
            header("Location: $redirect");   
            die("Please visit <a href=$redirect>$redirect </a>"); 
        }
    }
?>