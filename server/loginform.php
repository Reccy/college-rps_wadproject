<?php
    $username = $_POST["Username"]; //Get username
    $password = $_POST["Password"]; //Get password
    
    $username = trim($username);
    $password = trim($password); //Trim details for sanitization
    
    //TEST CODE - REMOVE BEFORE FINAL RELEASE
    if($username == ""){
        echo "test_login";
        exit();
    }
    
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $username)) //Special character check
    {
        echo"error_special_chars";
        exit();
    }
    
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $password)) //Special character check
    {
        echo"error_special_chars";
        exit();
    }
    
    $username = filter_var($username, FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_var($password, FILTER_SANITIZE_SPECIAL_CHARS); //Sanitize details
    
    if (file_exists('users.xml')) {
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                if(password_verify($password,$sxe->user[$i]->details->password)){
                    echo "password_match"; //If password matches, login
                    exit();
                } else {
                    echo "password_mismatch"; //If password doesn't match, don't login
                    exit();
                }
            }
        }
        echo "password_mismatch"; //If can't find user, don't login
        exit();
    } else {
        echo "error_unknown"; //Error handling
        exit();
    }
?>