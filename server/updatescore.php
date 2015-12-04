<?php
    //Get values required to perform function
    $username = $_POST["Username"];
    $field = $_POST["Field"];
    
    //If any values are null, return an error, otherwise continue.
    if($username == null ||$field == null){
        echo "error_unknown";
        exit();
    }
    
    //Load the XML file, and begin writing to it
    if (file_exists('users.xml')) {  //Write XML file
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                if($field == "wins"){ // Increase wins
                    $sxe->user[$i]->score->wins = $sxe->user[$i]->score->wins + 1;
                    if($sxe->user[$i]->score->wins != 0 && $sxe->user[$i]->score->losses != 0){
                        $sxe->user[$i]->score->ratio = $sxe->user[$i]->score->wins / $sxe->user[$i]->score->losses; //Calculate win/loss ratio
                    }
                } else if($field == "losses"){ // Increase losses
                    $sxe->user[$i]->score->losses = $sxe->user[$i]->score->losses + 1;
                    if($sxe->user[$i]->score->wins != 0 && $sxe->user[$i]->score->losses != 0){
                        $sxe->user[$i]->score->ratio = $sxe->user[$i]->score->wins / $sxe->user[$i]->score->losses; //Calculate win/loss ratio
                    }
                } else if($field == "streaks"){ // Increase streaks
                    $sxe->user[$i]->score->streaks = $sxe->user[$i]->score->streaks + 1;
                } else {
                    echo "error_unknown"; //Return error
                    exit();
                }
            }
        }

    } else {
        echo "error_unknown"; //Error handling
        exit();
    }
    
    //Write to file
    $sxe->asXML("users.xml");
    
    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($sxe->asXML());
    $dom->save("users.xml");
    
    include("updaterss.php");
    
    echo "user_updated"; //Successfully updated user
    exit();
?>