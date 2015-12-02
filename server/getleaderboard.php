<?php
    //Load the XML file, and begin reading from it
    if (file_exists('users.xml')) {
        //Load the XML and convert to SXE
        $xml = simplexml_load_file('users.xml');
        $sxe = new SimpleXMLElement($xml->asXML());
        
        $jsonString = '[';
        
        //Get the XML data and sort through it
        for($i = 0; $i < $sxe->count(); $i++){
            $username = $sxe->user[$i]->details->username;
            $wins = $sxe->user[$i]->score->wins;
            $losses = $sxe->user[$i]->score->losses;
            $streaks = $sxe->user[$i]->score->streaks;
            $ratio = $sxe->user[$i]->score->ratio;
            
            if($i == ($sxe->count() - 1)){
                $jsonString = $jsonString.'{"username":"'.$username.'","wins":"'.$wins.'","losses":"'.$losses.'","streaks":"'.$streaks.'","ratio":"'.$ratio.'"}]';
            } else {
                $jsonString = $jsonString.'{"username":"'.$username.'","wins":"'.$wins.'","losses":"'.$losses.'","streaks":"'.$streaks.'","ratio":"'.$ratio.'"},';
            }
            
        }
        
        echo $jsonString;
        exit();
    } else {
        echo "error_unknown"; //Error handling
        exit();
    }
?>