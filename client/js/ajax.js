// When jQuery is ready, hide the loading screen
$(document).ready(function(){
    console.log("JQuery is ready!");
    $("#loading").hide();
});

// Disable caching of AJAX responses
$.ajaxSetup({
    cache: false
});

// When starting an AJAX request, show the loading screen
$(document).ajaxStart(function(){
  $("#loading").show();
});

// When something goes wrong with AJAX, display an error.
$( document ).ajaxError(function() {
    $("#top-menu").hide();
    $("body").html("<p id=\"intro-text\">Something went wrong! :'(</p><p id=\"intro-subtext\">There was a problem loading the application.<br />The web server could be down or your internet connection might be down.<br />Please try again later!</p>");
    $("body").css("background-color","#2c3e50");
});

// When an AJAX request is complete, hide the loading screen
$( document ).ajaxComplete(function() {
  $("#loading").hide();
});

//When the login button is clicked, load login.html
function loginBtnClicked(){
    $("#body").load("client/html/login.html");
    $("body").css("background-color","#2ecc71");
    $("#loginBtn").css("display","none");
    $("#registerBtn").css("display","inline-block");
}

//When the register button is clicked, load register.html
function registerBtnClicked(){
    $("#body").load("client/html/register.html");
    $("body").css("background-color","#e74c3c");
    $("#loginBtn").css("display","inline-block");
    $("#registerBtn").css("display","none");
}

function closeAboutBtnClicked(){
    $("#about-us").hide();
}

function aboutBtnClicked(){
    $("#about-us").show();
}