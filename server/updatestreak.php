<?php
    //Get values required to perform function
    $username = $_POST["Username"];
    $value = $_POST["Value"];
    
    //If any values are null, return an error, otherwise continue.
    if($username == null || $value == null){
        echo "error_unknown";
        exit();
    }
    
    //Load the XML file, and begin writing to it
    if (file_exists('users.xml')) {  //Write XML file
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                if($sxe->user[$i]->score->streaks < $value){    //If the inserted value is more than the current streak, update the streak
                    $sxe->user[$i]->score->streaks = $value;
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
    
    echo "user_updated"; //Successfully updated user
    exit();
?>