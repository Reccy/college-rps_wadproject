<?php
    $username = $_POST["Username"];
    $password = $_POST["Password"];
    $checked = $_POST["Checked"];
    
    $password = password_hash($password,PASSWORD_BCRYPT);
    
    if (file_exists('users.xml')) {
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                echo "user_exists";
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
        echo "error_unknown";
        exit();
    }

    $sxe->asXML("users.xml");
    
    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($sxe->asXML());
    $dom->save("users.xml");
    
    echo "user_added";
    exit();
?>