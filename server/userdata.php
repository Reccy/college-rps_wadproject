<?php
    $username = $_POST["Username"];
    
    $username = trim($username);
    $username = filter_var($username, FILTER_SANITIZE_SPECIAL_CHARS);
    
    if (file_exists('users.xml')) {
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                $wins = $sxe->user[$i]->score->wins;
                $losses = $sxe->user[$i]->score->losses;
                $streaks = $sxe->user[$i]->score->streaks;
                $ratio = $sxe->user[$i]->score->ratio;
                
                
                $jsonString = '{"username":"'.$username.'","wins":"'.$wins.'","losses":"'.$losses.'","streaks":"'.$streaks.'","ratio":"'.$ratio.'"}';
                echo $jsonString;
                exit();
            }
        }
        echo "error_unknown"; //If can't find user, don't login
        exit();
    } else {
        echo "error_unknown"; //Error handling
        exit();
    }
?>