var computerChoice;

function compChoice() {
    computerChoice = Math.random();// make computer's choice random
    if (computerChoice < 0.34) {
        computerChoice = "Rock"; //If choice is below 0.34, choose Rock
    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper"; //If choice is below or equal to 0.67, choose Paper
    } else {
        computerChoice = "Scissors"; //Else choose Scissors
    }
}


var compare = function(userChoice, computerChoice) { //Declare user and computer choices as variables
    $("#body").slideUp(1000, function() {
        if (userChoice == computerChoice) {//If user and computer choose the same, it's a draw
            

            
            $("#buttonRow").hide();//Hide images
            $("#intro-text").text("You've drawn with the computer!"); //Print draw message
            $("#intro-subtext").html("<br/><br/>"); //Clear text
            $("#resetBtn").show();//Display reset button
            $("#body").slideDown(1000);
            $("#loading").hide();//Hide loading image
        } //End If
        else if (userChoice == "Rock") {
            if (computerChoice == "Paper") {//If the user chose Rock and computer chose Paper
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Hard Luck, the Computer Wins"); //Print win message
                $("#intro-subtext").text("You chose Rock!\nThe computer chose Paper!"); //Print results message
                window._streak = 0;//Reset streak counter to zero

                $(".lossesReplace").text(parseInt(window._losses) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);//Increment the losses counter
                $("#resetBtn").show();//Show reset button
                window.updateScore("losses");//Update xml
                window.updateStreak(window._streak);//Update streak
                window._losses = parseInt(window._losses) + 1;//Update streak counter
                $("#body").slideDown(1000);
                $("#loading").hide();
            } else if (computerChoice == "Scissors") {
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Congratulations, You've Won!"); //Print win message
                $("#intro-subtext").text("You chose Rock!\nThe computer chose Scissors!"); //Print win message
                window._streak = parseInt(window._streak + 1);//Increment the streak counter

                $(".winsReplace").text(parseInt(window._wins) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
                $("#resetBtn").show();//Show reset button
                window.updateScore("wins");//Update xml
                window.updateStreak(window._streak);//Increment the streak counter
                window._wins = parseInt(window._wins) + 1;//Update wins counter
                $("#body").slideDown(1000);
                $("#loading").hide();
            }
        } else if (userChoice == "Paper") {
            if (computerChoice == "Rock") {
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Congratulations, You've Won!"); //Print win message
                $("#intro-subtext").text("You chose Paper!\nThe computer chose Rock!"); //Print win message
                window._streak = parseInt(window._streak + 1);

                $(".winsReplace").text(parseInt(window._wins) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
                $("#resetBtn").show();
                window.updateScore("wins");
                window.updateStreak(window._streak);
                window._wins = parseInt(window._wins) + 1;
                $("#body").slideDown(1000);
                $("#loading").hide();
            } else if (computerChoice == "Scissors") {
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Hard Luck, the Computer Wins"); //Print win message
                $("#intro-subtext").text("You chose Paper!\nThe computer chose Scissors!"); //Print win message
                window._streak = 0;//Reset streak counter to zero

                $(".lossesReplace").text(parseInt(window._losses) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
                $("#resetBtn").show();
                window.updateScore("losses");
                window.updateStreak(window._streak);
                window._losses = parseInt(window._losses) + 1;
                $("#body").slideDown(1000);
                $("#loading").hide();
            }
        } else if (userChoice == "Scissors") {
            if (computerChoice == "Rock") {
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Hard Luck, the Computer Wins"); //Print win message
                $("#intro-subtext").text("You chose Scissors!\nThe computer chose Rock!"); //Print win message
                window._streak = 0;

                $(".lossesReplace").text(parseInt(window._losses) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
                $("#resetBtn").show();
                window.updateScore("losses");
                window.updateStreak(window._streak);
                window._losses = parseInt(window._losses) + 1;
                $("#body").slideDown(1000);
                $("#loading").hide();
            } else if (computerChoice == "Paper") {
                $("#buttonRow").hide(); //Hide images
                $("#intro-text").text("Congratulations, You've Won!"); //Print win message
                $("#intro-subtext").text("You chose Scissors!\nThe computer chose Paper!"); //Print win message
                window._streak = parseInt(window._streak + 1);

                $(".winsReplace").text(parseInt(window._wins) + 1);
                $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
                $("#resetBtn").show();
                window.updateScore("wins");
                window.updateStreak(window._streak);
                window._wins = parseInt(window._wins) + 1;
                $("#body").slideDown(1000);
                $("#loading").hide();
            }
        }
    });
}

function rockClicked() {
    compChoice();//Call computer choice 
    compare("Rock", computerChoice);//Compare user and computer choice
}

function paperClicked() {
    compChoice();//Call computer choice 
    compare("Paper", computerChoice);//Compare user and computer choice
}

function scissorsClicked() {
    compChoice();//Call computer choice 
    compare("Scissors", computerChoice);//Compare user and computer choice
}

function resetClicked() {
    $("#body").slideUp(function() {//Slide div elements up
        $("#buttonRow").show(); //Show options
        $("#intro-text").text("Click a button to play!"); //Reset the text
        $("#intro-subtext").html("<br/><br/>"); //Clear text
        $("#resetBtn").hide(function() {//Hide Button
            $("#body").slideDown();//Slide div elements down
        }); 
    });
}