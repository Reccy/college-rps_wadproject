<?php
    //Get values required to perform function
    $username = $_POST["Username"];
    $field = $_POST["Field"];
    
    $returnData; //Data to return
    
    //If any values are null, return an error, otherwise continue.
    if($username == null ||$field == null){
        echo "error_unknown";
        exit();
    }
    
    //Load the XML file, and begin reading from it
    if (file_exists('users.xml')) {
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        for($i = 0; $i < $sxe->count(); $i++){
            if($sxe->user[$i]->details->username == $username){
                if($field == "wins"){ // Get wins
                    $returnData = $sxe->user[$i]->score->wins;
                } else if($field == "losses"){ // Get losses
                    $returnData = $sxe->user[$i]->score->losses;
                } else if($field == "streaks"){ // Get streaks
                    $returnData = $sxe->user[$i]->score->streaks;
                } else if($field == "ratio"){
                    $returnData = $sxe->user[$i]->score->ratio__string;
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

    echo $returnData; //Successfully updated user
    exit();
?>