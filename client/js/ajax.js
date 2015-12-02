//Global variables
    var _username = "USERNAME_HERE";
    var _wins = 0;
    var _losses = 0;
    var _streak = 0;
    var _ratio = 0;
    var _totalGames = 0;
    var _leaderboardJSON;
    var _ajaxRunning = false;
    
// When jQuery is ready, hide the loading screen
$(document).ready(function(){
    console.log("JQuery is ready!");
    $("#loading").hide();
    $("#playBtn").hide();
    $("#leaderboardsBtn").hide();
    $("#logoutBtn").hide();
});

// Disable caching of AJAX responses
$.ajaxSetup({
    cache: false
});

// When starting an AJAX request, show the loading screen
$(document).ajaxStart(function(){
    $("#loading").show();
    window._ajaxRunning = true;
});

$(document).ajaxStop(function(){
    window._ajaxRunning = false;
})

// When something goes wrong with AJAX, display an error.
$( document ).ajaxError(function() {
    displayError();
});

// When an AJAX request is complete, hide the loading screen
$( document ).ajaxComplete(function() {
  $("#loading").hide();
  window._ajaxRunning = false;
});

// Responsive code
$(window).resize(function() {
    if ($(window).width() < 746) {
        $("#usernameText").removeClass("navbar-left");
        $("#stats").removeClass("navbar-right");
    } else {
        $('#usernameText').addClass("navbar-left");
        $('#stats').addClass("navbar-right");
    }
});

// Displays error html when something goes drastically wrong
function displayError(){
    $("#top-menu").hide();
    $("body").html("<p id=\"intro-text\">Something went wrong! :'(</p><p id=\"intro-subtext\">There was a problem loading the application.<br />If this problem keeps occuring, please contact the site administrator.<br />Please try again later!</p>");
    $("body").css("background-color","#2c3e50");
}

// Display error on login page
function loginError(error){
    $("#loginStatus").html(error);
}

// Display error on register page
function registerError(error){
    $("#registerStatus").html(error);
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

function playBtnClicked(){
    $("#body").load("client/html/game.html");
    $("body").css("background-color","#2ecc71");
    
}

function leaderboardsBtnClicked(){
    $("#body").load("client/html/leaderboard.html");
    $("body").css("background-color","#e67e22");
}

//When the logout button is clicked, load the original welcome screen
function logoutBtnClicked(){
    $("#body").load("client/html/landing.html");
    $("body").css("background-color","#3498db");
    $("#logoutBtn").hide();
    $("#leaderboardsBtn").hide();
    $("#playBtn").hide();
    $("#loginBtn").show();
    $("#registerBtn").show();
    $("#usernameText").css("display","none");
    $("#stats").css("display","none");
    window._username = "USERNAME_HERE";
    window._wins = 0;
    window._losses = 0;
    window._streak = 0;
    window._ratio = 0;
    window._totalGames = 0;
}

//Send register form to server
function registerSend(){
    var user = $("#userName").val();
    var pass = $("#userPassword").val();
    var passconf = $("#userPasswordConfirm").val();
    var checked;
    if($("#userChecked>input").prop("checked")){
        checked = true;
    } else {
        checked = false;
    }
    
    var data = {"Username":user,"Password":pass,"ConfirmPassword":passconf,"Checked":checked};
    
    $.post("../../server/registerform.php",data,function(returnData){
        console.log(returnData);
        if(returnData == "error_password_confirm"){ //If the user doesn't confirm their password, alert the user
            registerError("Please verify that your password is the same in both fields!");
        } else if(returnData == "user_exists"){ //If the username already exists, alert the user.
            registerError("A user already exists with this username!");
        } else if(returnData == "user_added"){ //If the user is succesfully added, alert the user.
            registerError("You have successfully registered! Logging you in...");
            loginSend(); //Automatically login
        } else if(returnData == "error_special_chars"){ // If the user types in an illegal character, alert them.
            registerError("Please only type in alphanumeric characters. E.g. a-z 0-9");
        } else if(returnData == "error_unchecked_box"){ // If the user doesn't accept the password condition, alert them.
            registerError("You must accept the condition to use a unique password to register.");
        } else if(returnData == "error_username_length"){
            registerError("Your username must be at least 4 characters long");
        } else if(returnData == "error_password_length"){
            registerError("Your password must be at least 6 characters long");
        } else if(returnData =="error_unknown"){ // If something goes terribly wrong, alert the user
            displayError();
        } else if(returnData =="error_special"){ // If the user inserts USERNAME_HERE, alert the user that this is a forbidden username
            registerError("This is a forbidden username. Try another one.");
        }
    });
}

//Send login form to server
function loginSend(){
    var user = $("#userName").val();
    var pass = $("#userPassword").val();
    var data = {"Username":user,"Password":pass};
    
    $.post("../../server/loginform.php",data,function(returnData){
        if(returnData == "test_login"){ // If the password matches, login the user
            $("#body").load("client/html/welcome.html", function(){
                $("body").css("background-color","#3498db");
                $("#loginBtn").css("display","none");
                $("#registerBtn").css("display","none");
                $("#leaderboardsBtn").show();
                $("#playBtn").show();
                $("#logoutBtn").show();
                
                $.post("../../server/userdata.php",{"Username":"Test"},function(userData){ //POST to get the other details from the user
                    if(userData == "error_unknown"){
                        displayError();
                    } else {
                        var userJSON = JSON.parse(userData);
                        
                        window._username = userJSON.username;
                        window._wins = userJSON.wins;
                        window._losses = userJSON.losses;
                        window._streak = userJSON.streak;
                        window._ratio = userJSON.ratio;
                        
                        window._totalGames = parseInt(window._wins) + parseInt(window._losses);
                        
                        $(".usernameReplace").html(window._username);
                        $(".winsReplace").html(window._wins);
                        $(".lossesReplace").html(window._losses);
                        $(".gamesReplace").html(window._totalGames);
                        
                        $("#leaderboardsBtn").show();
                        $("#logoutBtn").show();
                        $("#playBtn").show();
                        
                        $("#usernameText").css("display","inline-block");
                        $("#stats").css("display","inline-block");
                    }
                }); 
            });
        } else if(returnData == "error_special_chars"){ // If the user types in an illegal character, alert them.
            loginError("Please only type in alphanumeric characters. E.g. a-z 0-9");
        } else if(returnData == "password_match"){ // If the password matches, login the user
            $("#body").load("client/html/welcome.html");
            $("body").css("background-color","#2ecc71");
            $("#loginBtn").css("display","none");
            $("#registerBtn").css("display","none");
            $("#leaderboardsBtn").show();
            $("#playBtn").show();
            $("#logoutBtn").show();
            
            $.post("../../server/userdata.php",{"Username":user},function(userData){ //POST to get the other details from the user
                if(userData == "error_unknown"){
                    displayError();
                } else {
                    var userJSON = JSON.parse(userData);
                    
                    window._username = userJSON.username;
                    window._wins = userJSON.wins;
                    window._losses = userJSON.losses;
                    window._streak = userJSON.streak;
                    window._ratio = userJSON.ratio;
                    
                    window._totalGames = parseInt(window._wins) + parseInt(window._losses);
                    
                    $(".usernameReplace").html(window._username);
                    $(".winsReplace").html(window._wins);
                    $(".lossesReplace").html(window._losses);
                    $(".gamesReplace").html(window._totalGames);
                    
                    $("#leaderboardsBtn").show();
                    $("#logoutBtn").show();
                    $("#playBtn").show();
                    
                    $("#usernameText").css("display","inline-block");
                    $("#stats").css("display","inline-block");
                }
            });
            
        } else if(returnData == "password_mismatch"){ // If the username or password doesn't match, alert the user
            loginError("Username/Password Incorrect!");
        } else if(returnData == "error_unknown"){ // If something goes terribly wrong, alert the user
            displayError();
        }
    });
}

// Updates the score
// Can use: "wins", "losses", "streak"
var updateScore = function(scoreField){
    var data = {"Username":window._username,"Field":scoreField};
    
    $.post("../../server/updatescore.php",data,function(returnData){
        if(returnData == "error_unknown"){
            displayError(); //If an error occurs, stop application. Otherwise continue
        }
    });
}

// Returns the scores
var getScore = function(){
    $.post("../../server/userdata.php",{"Username":window._username},function(userData){ //POST to get the other details from the user
        if(userData == "error_unknown"){
            displayError();
        } else {
            var userJSON = JSON.parse(userData);
            
            window._username = userJSON.username;
            window._wins = userJSON.wins;
            window._losses = userJSON.losses;
            window._streak = userJSON.streak;
            window._ratio = userJSON.ratio;
            
            window._totalGames = parseInt(window._wins) + parseInt(window._losses);
        }
    });
}

// Returns the scores
var getLeaderboard = function(){
    $.post("../../server/getleaderboard.php",function(returnData){ //POST to get the JSON of the users
        if(returnData == "error_unknown"){
            displayError();
        }
    }).always(function(returnData){
        window._leaderboardJSON = JSON.parse(returnData);
        
        //Leaderboard WINS test code
        $("#leaderboardWins>div:eq(1)>div:eq(1)>p").text(window._leaderboardJSON[0].username);
        $("#leaderboardWins>div:eq(1)>div:eq(2)>p").text(window._leaderboardJSON[0].wins);
        $("#leaderboardWins>div:eq(2)>div:eq(1)>p").text(window._leaderboardJSON[1].username);
        $("#leaderboardWins>div:eq(2)>div:eq(2)>p").text(window._leaderboardJSON[1].wins);
        
        //Leaderboard RATIO test code
        $("#leaderboardRatio>div:eq(1)>div:eq(1)>p").text(window._leaderboardJSON[0].username);
        $("#leaderboardRatio>div:eq(1)>div:eq(2)>p").text(window._leaderboardJSON[0].ratio);
        $("#leaderboardRatio>div:eq(2)>div:eq(1)>p").text(window._leaderboardJSON[1].username);
        $("#leaderboardRatio>div:eq(2)>div:eq(2)>p").text(window._leaderboardJSON[1].ratio);
        
        //Leaderboard STREAK test code
        $("#leaderboardStreak>div:eq(1)>div:eq(1)>p").text(window._leaderboardJSON[0].username);
        $("#leaderboardStreak>div:eq(1)>div:eq(2)>p").text(window._leaderboardJSON[0].streaks);
        $("#leaderboardStreak>div:eq(2)>div:eq(1)>p").text(window._leaderboardJSON[1].username);
        $("#leaderboardStreak>div:eq(2)>div:eq(2)>p").text(window._leaderboardJSON[1].streaks);
    });
}