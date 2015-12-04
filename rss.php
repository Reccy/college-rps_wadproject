<?php
    if (file_exists('rss.xml') && file_exists("rss.xsl")) {
        $xml = new DOMDocument;
        $xml->load('rss.xml');
        
        $xsl = new DOMDocument;
        $xsl->load("rss.xsl");
        
        $proc = new XSLTProcessor;
        $proc->importStyleSheet($xsl);
        
        echo $proc->transformToXML($xml);
        echo "<p class='col-sm-12' id='intro-subtext'>Link for RSS Reader: https://".$_SERVER['HTTP_HOST']."/rss.xml";
        exit();
    } else {
        echo "<p id='intro-text'>This is where the RSS feed should be.</p>
        <p id='intro-subtext'>But... it's not here? Huh. Weird.<br/>Just blame it on The Sloth:<br/></p>
        <div id='sloth_image_temp'>
        <img src='client/img/god.png'></img>
        </div>"; //Error handling, by THE SLOTH!
        //Inside jokes, yay!
        exit();
    }
?>