<?php
    //Set the default timezone
    date_default_timezone_set('UTC');
    
    //Check if the file exists
    if (file_exists('../rss.xml') && file_exists("users.xml")) {
        
        //Load the files required
        $xmlRSS = simplexml_load_file('../rss.xml');
        $sxeRSS = new SimpleXMLElement($xmlRSS->asXML());
        
        $xmlUSR = simplexml_load_file('users.xml');
        $sxeUSR = new SimpleXMLElement($xmlUSR->asXML());
        
        //Get the current highest scores
        $maxWins = 0;
        for($i = 0; $i < $sxeUSR->count(); $i++){
            if($maxWins < (int)$sxeUSR->user[$i]->score->wins){
                $maxWins = $sxeUSR->user[$i]->score->wins;
                $maxWinsIndex = $i;
            }
        }
        
        $maxRatio = 0;
        for($i = 0; $i < $sxeUSR->count(); $i++){
            if($maxRatio < (int)$sxeUSR->user[$i]->score->ratio){
                $maxRatio = $sxeUSR->user[$i]->score->ratio;
                $maxRatioIndex = $i;
            }
        }
        
        $maxStreaks = 0;
        for($i = 0; $i < $sxeUSR->count(); $i++){
            if($maxStreaks < (int)$sxeUSR->user[$i]->score->streaks){
                $maxStreaks = $sxeUSR->user[$i]->score->streaks;
                $maxStreaksIndex = $i;
            }
        }
        
        //UPDATES WINNER
        
        //GET WINNING NUMBER FROM RSS
        $winStr = $sxeRSS->channel->item[0]->description;
        preg_match_all('!\d+!', $winStr, $winNum);
        $winNum = implode(' ', $winNum[0]);
        
        //UPDATE RSS IF HIGHER NUMBER
        if($maxWins > $winNum){
            $sxeRSS->channel->item[0]->title = "Winner Champion: ".$sxeUSR->user[$maxWinsIndex]->details->username;
            $sxeRSS->channel->item[0]->pubDate = date("l jS \of F Y h:i:s A");
            $sxeRSS->channel->item[0]->description = $sxeUSR->user[$maxWinsIndex]->details->username." has ".$sxeUSR->user[$maxWinsIndex]->score->wins." wins!";
        }
        
        //UPDATES RATIO
        
        //GET WINNING NUMBER FROM RSS
        $ratioStr = $sxeRSS->channel->item[1]->description;
        preg_match_all('!\d+!', $ratioStr, $ratioNum);
        $ratioNum = implode(' ', $ratioNum[0]);
        
        //UPDATE RSS IF HIGHER NUMBER
        if($maxRatio > $ratioNum){
            $sxeRSS->channel->item[1]->title = "Ratio Champion: ".$sxeUSR->user[$maxRatioIndex]->details->username;
            $sxeRSS->channel->item[1]->pubDate = date("l jS \of F Y h:i:s A");
            $sxeRSS->channel->item[1]->description = $sxeUSR->user[$maxRatioIndex]->details->username." has a win/loss ratio of ".$sxeUSR->user[$maxRatioIndex]->score->ratio."!";
        }
        
        //UPDATES STREAK
        
        //GET WINNING NUMBER FROM RSS
        $streaksStr = $sxeRSS->channel->item[2]->description;
        preg_match_all('!\d+!', $streaksStr, $streaksNum);
        $streaksNum = implode(' ', $streaksNum[0]);
        
        //UPDATE RSS IF HIGHER NUMBER
        if($maxStreaks > $streaksNum){
            $sxeRSS->channel->item[2]->title = "Streak Champion: ".$sxeUSR->user[$maxStreaksIndex]->details->username;
            $sxeRSS->channel->item[2]->pubDate = date("l jS \of F Y h:i:s A");
            $sxeRSS->channel->item[2]->description = $sxeUSR->user[$maxStreaksIndex]->details->username." has a winning streak of ".$sxeUSR->user[$maxStreaksIndex]->score->streaks."!";
        }
        
    } else {
        echo "error_unknown"; //Error handling
        exit();
    }

    //Save the file
    $sxeRSS->asXML("../rss.xml");
    
    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($sxeRSS->asXML());
    $dom->save("../rss.xml");
    
    //Return success message
    echo "rss_updated";
    exit();
?>