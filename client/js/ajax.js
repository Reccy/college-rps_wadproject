// When jQuery is ready, hide the loading screen
$(document).ready(function(){
    console.log("JQuery is ready!");
    $("#loading").hide();
});

/* Disable caching of AJAX responses - won't work with node.js
$.ajaxSetup({
    cache: false
}); */

// When starting an AJAX request, show the loading screen
$(document).ajaxStart(function(){
  $("#loading").show();
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