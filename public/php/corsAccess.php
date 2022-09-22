<?php
//Access: Everyone
//Purpose: headers
    header("Set-Cookie: flavor=choco; cross-site-cookie=whatever; SameSite=None; Secure");
    header('Content-type: application/json');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Accept, X-Access-Token, X-Application-Name, X-Request-Sent-Time");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Origin: https://zafora.ece.uowm.gr/");
    header("X-Content-Type-Options 'nosniff'");
    header("X-Frame-Options 'sameorigin'");
    header("X-XSS-Protection '1; mode=block'");
    header("Referrer-Policy 'same-origin'");
    header("Feature-Policy 'microphone 'none'; camera 'none' geolocation 'none''");
    header("Content-Security-Policy 'default-src 'self''");
?>