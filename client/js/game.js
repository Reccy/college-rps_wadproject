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
    var CompCount = 0;//Set counts to 0
    var UserCount = 0;
    var DrawCount = 0;
    if (userChoice == computerChoice) {
        //If user and computer choose the same, it's a draw
        $("#buttonRow").hide();//Hide images
        $("#intro-text").text("You've drawn with the computer!");//Print draw
        $("#intro-subtext").html("<br/><br/>");//Clear text
        $("#resetBtn").show();
        DrawCount += 1;//Increment the count
    }//End If
  
  else if(userChoice == "Rock"){
      if (computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Rock!\nThe computer chose Paper!");//Print win message
          $("#resetBtn").show();
          CompCount += 1;//Increment the count
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Rock!\nThe computer chose Scissors!");//Print win message
          $("#resetBtn").show();
          UserCount += 1;//Increment the count
      }
  }
  else if(userChoice == "Paper"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Paper!\nThe computer chose Rock!");//Print win message
          $("#resetBtn").show();
          UserCount += 1;//Increment the count
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Paper!\nThe computer chose Scissors!");//Print win message
          $("#resetBtn").show();
          CompCount += 1;//Increment the count
      }
      
  }
  else if(userChoice == "Scissors"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Hard Luck, the Computer Wins");//Print win message
          $("#intro-subtext").text("You chose Scissors!\nThe computer chose Rock!");//Print win message
          $("#resetBtn").show();
          CompCount += 1;//Increment the count
      }
      else if(computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#intro-text").text("Congratulations, You've Won!");//Print win message
          $("#intro-subtext").text("You chose Scissors!\nThe computer chose Paper!");//Print win message
          $("#resetBtn").show();
          UserCount += 1;//Increment the count
      }
  }
         
    
}
      

function calculate() {} {
    var Compcount, Usercount, DrawCount;
 
    function add() {
        if (computerChoice == "#intro-text") {
            return Compcount;//If computer wins, show count
        } else if (computerChoice == "#intro-text") {
            return Usercount;//If user wins, show count
        } else {
            return DrawCount;//If it's a tie, print draw
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
    $("#intro-text").text("Welcome to Rock Paper Scissors");//Reset the text
    $("#intro-subtext").html("<br/><br/>");//Clear text
    $("#resetBtn").hide();//Hide Button
}


