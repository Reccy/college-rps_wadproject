<?php
    $user = $_POST["Username"];
    $pass = $_POST["Password"];
    
    if($user == "Hello"){
        $response = "You said Hello";
    } else {
        $response = "You said something else";
    }
        
    echo $response;
    
    file_put_contents("testfile.txt","\n".$user." ".$pass,FILE_APPEND);
?>