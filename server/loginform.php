<?php
    $username = $_POST["Username"];
    $password = $_POST["Password"];
    
    if (file_exists('users.xml')) {
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                if(password_verify($password,$sxe->user[$i]->details->password)){
                    echo "password_match";
                    exit();
                } else {
                    echo "password_mismatch";
                    exit();
                }
            }
        }
    } else {
        echo "Something went wrong!";
        exit();
    }
?>