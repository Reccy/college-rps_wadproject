var computerChoice;

function compChoice(){
    
    computerChoice = Math.random();// make computer's choice random
    if (computerChoice < 0.34) {
        computerChoice = "Rock";//If choice is below 0.34, choose Rock
    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper";//If choice is below or equal to 0.67, choose Paper
    } else {
        computerChoice = "Scissors";//Else choose Scissors
    }

}
 
 
var compare = function(userChoice, computerChoice) {//Declare user and computer choices as variables
    if (userChoice == computerChoice) {
        //If user and computer choose the same, it's a draw
        $("#buttonRow").hide();//Hide images
        $("#intro-text").text("You've drawn with the computer!");//Print draw
        $("#intro-subtext").html("<br/><br/>");//Clear text
        $("#resetBtn").show();
       
    }//End If
  
  else if(userChoice == "Rock"){
      if (computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Rock!\nThe computer chose Paper!");//Print win message
          window._streak = 0;
          
          $(".lossesReplace").text(parseInt(window._losses) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("losses");
          window.updateStreak(window._streak);
          window._losses = parseInt(window._losses) + 1;
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Rock!\nThe computer chose Scissors!");//Print win message
          window._streak = parseInt(window._streak + 1);
          
          $(".winsReplace").text(parseInt(window._wins) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("wins");
          window.updateStreak(window._streak);
          window._wins = parseInt(window._wins) + 1;
      }
  }
  else if(userChoice == "Paper"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Paper!\nThe computer chose Rock!");//Print win message
          window._streak = parseInt(window._streak + 1);
           
          $(".winsReplace").text(parseInt(window._wins) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("wins");
          window.updateStreak(window._streak);
          window._wins = parseInt(window._wins) + 1;
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Paper!\nThe computer chose Scissors!");//Print win message
          window._streak = 0;
          
          $(".lossesReplace").text(parseInt(window._losses) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("losses");
          window.updateStreak(window._streak);
          window._losses = parseInt(window._losses) + 1;
      }
  }
  else if(userChoice == "Scissors"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Scissors!\nThe computer chose Rock!");//Print win message
          window._streak = 0;
          
          $(".lossesReplace").text(parseInt(window._losses) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("losses");
          window.updateStreak(window._streak);
          window._losses = parseInt(window._losses) + 1;
      }
      else if(computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Scissors!\nThe computer chose Paper!");//Print win message
          window._streak = parseInt(window._streak + 1);
          
          $(".winsReplace").text(parseInt(window._wins) + 1);
          $(".gamesReplace").text(parseInt(window._wins) + parseInt(window._losses) + 1);
          $("#resetBtn").show();
          window.updateScore("wins");
          window.updateStreak(window._streak);
          window._wins = parseInt(window._wins) + 1;
      }
  }
}

function rockClicked(){
    compChoice();
    compare("Rock",computerChoice);
}

function paperClicked(){
    compChoice();
    compare("Paper",computerChoice);
}

function scissorsClicked(){
    compChoice();
    compare("Scissors",computerChoice);
}

function resetClicked(){
    $("#buttonRow").show();//Show options
    $("#intro-text").text("Click a button to play!");//Reset the text
    $("#intro-subtext").html("<br/><br/>");//Clear text
    $("#resetBtn").hide();//Hide Button
}


