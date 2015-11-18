<?php
    $username = $_POST["Username"]; //Get username
    $password = $_POST["Password"]; //Get password
    $password_conf = $_POST["ConfirmPassword"]; //Get password in second field
    $checked = $_POST["Checked"]; //Get if the user checked the box (true/false)
    
    $username = trim($username);
    $password = trim($password); //Trim details for sanitization
    
    if(strlen($username) < 4){
        echo("error_username_length");
        exit();
    }
    
    if(strlen($password) < 6){
        echo("error_password_length");
        exit();
    }
    
    if($password != $password_conf){
        echo("error_password_confirm");
        exit();
    }
    
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $username)) //Check username for special characters
    {
        echo"error_special_chars";
        exit();
    }
    
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $password)) //Check password for special characters
    {
        echo"error_special_chars";
        exit();
    }
    
    if($checked == "false"){ //If box is not checked, alert user
        echo"error_unchecked_box";
        exit();
    } else if($checked != "true" && $checked != "false"){ //If the box sends a non-boolean value, display error
        echo"error_unknown";
        exit();
    }
    
    $username = filter_var($username, FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_var($password, FILTER_SANITIZE_SPECIAL_CHARS); //Sanitize details
    
    $password = password_hash($password,PASSWORD_BCRYPT); //Hash and salt password
    
    if (file_exists('users.xml')) {  //Write XML file
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                echo "user_exists"; //If user exists, return error
                exit();
            }
        }
        
        $user = $sxe->addChild("user");
        $details = $user->addChild("details");
        $score = $user->addChild("score");
        $details->addChild("username",$username);
        $details->addChild("password",$password);
        $score->addChild("wins",0);
        $score->addChild("losses",0);
        $score->addChild("streaks",0);
        $score->addChild("ratio",0);
    } else {
        echo "error_unknown"; //Error handling
        exit();
    }

    $sxe->asXML("users.xml");
    
    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($sxe->asXML());
    $dom->save("users.xml");
    
    echo "user_added"; //Successfully added user
    exit();
?>