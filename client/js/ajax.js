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
    displayError();
});

// When an AJAX request is complete, hide the loading screen
$( document ).ajaxComplete(function() {
  $("#loading").hide();
});

function displayError(){
    $("#top-menu").hide();
    $("body").html("<p id=\"intro-text\">Something went wrong! :'(</p><p id=\"intro-subtext\">There was a problem loading the application.<br />If this problem keeps occuring, please contact the site administrator.<br />Please try again later!</p>");
    $("body").css("background-color","#2c3e50");
}

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

//Send register form to server
function registerSend(){
    var user = $("#userName").val();
    var pass = $("#userPassword").val();
    var checked;
    if($("#userChecked>input").prop("checked")){
        checked = "true";
    } else {
        checked = "false";
    }
    
    var data = {"Username":user,"Password":pass,"Checked":checked};
    
    $.post("../../server/registerform.php",data,function(returnData){
        console.log(returnData);
        if(returnData == "user_exists"){
            alert("A user already exists with this username!");
        } else if(returnData == "user_added"){
            alert("You have successfully registered!");
        } else if(returnData == "error_special_chars"){
            alert("Please only type in alphanumeric characters. E.g. a-z 0-9");
        } else if(returnData == "error_unchecked_box"){
            alert("You must accept the condition to use a unique password to register.");
        }else if(returnData =="error_unknown"){
            displayError();
        }
    });
}

//Send login form to server
function loginSend(){
    var user = $("#userName").val();
    var pass = $("#userPassword").val();
    var data = {"Username":user,"Password":pass};
    
    $.post("../../server/loginform.php",data,function(returnData){
        if(returnData == "error_special_chars"){
            alert("Please only type in alphanumeric characters. E.g. a-z 0-9");
        } else if(returnData == "password_match"){
            $("#body").load("client/html/welcome.html");
            $("body").css("background-color","#2ecc71");
            $("#loginBtn").css("display","none");
            $("#registerBtn").css("display","none");
        } else if(returnData == "password_mismatch"){
            alert("Username/Password Incorrect!");
        } else if(returnData == "error_unknown"){
            displayError();
        }
    });
}