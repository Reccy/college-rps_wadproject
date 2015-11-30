var computerChoice = Math.random();// make computer's choice random
if (computerChoice < 0.34) {
    computerChoice = "rock";//If choice is below 0.34, choose Rock
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";//If choice is below or equal to 0.67, choose Paper
} else {
    computerChoice = "scissors";//Else choose Scissors
}
//console.log("Computer: " + computerChoice);
 
 
var compare = function(userChoice, computerChoice) {//Declare user and computer choices as variables
    var CompCount = 0;//Set counts to 0
    var UserCount = 0;
    var DrawCount = 0;
    if (userChoice == computerChoice) {
        //If user and computer choose the same, it's a draw
        $("#buttonRow").hide();//Hide images
        $("#resultText").text("Draw");//Print draw
        DrawCount += 1;//Increment the count
    }//End If
  
  else if(userChoice == "Rock"){
      if (computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("Computer Wins");//Print win message
          CompCount += 1;//Increment the count
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("User Wins");//Print win message
          UserCount += 1;//Increment the count
      }
  }
  else if(userChoice == "Paper"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("User Wins");//Print win message
          UserCount += 1;//Increment the count
      }
      else if(computerChoice == "Scissors"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("Computer Wins");//Print win message
          CompCount += 1;//Increment the count
      }
      
  }
  else if(userChoice == "Scissors"){
      if(computerChoice == "Rock"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("Computer Wins");//Print win message
          CompCount += 1;//Increment the count
      }
      else if(computerChoice == "Paper"){
          $("#buttonRow").hide();//Hide images
          $("#resultText").text("User Wins");//Print win message
          UserCount += 1;//Increment the count
      }
  }
         
    
}
      

function calculate() {} {
    var Compcount, Usercount, DrawCount;
 
    function add() {
        if (computerChoice == "#resultText") {
            return Compcount;
        } else if (computerChoice == "#resultText") {
            return Usercount;
        } else {
            return DrawCount;
        }
 
    }
}

