var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
 

var compare = function(userChoice, computerChoice){
    if(userChoice == computerChoice){
       // return "The result is a tie!";
       $("#buttonRow").hide();
       $("#resultText").text("You won!");
       
    }
    
    else if(userChoice == "Rock"){
        if(computerChoice == "Scissors"){
          //  console.log ("Rock Wins");
          $("#buttonRow").hide();
           $("#resultText").text("Rock Wins");
        }
        else{
           //console.log ("Scissors Wins");
           $("#buttonRow").hide();
           $("#resultText").text("Scissors Wins");
        }
    }
    
    else if(userChoice == "Paper"){
        if(computerChoice == "Rock"){
           //console.log ("Paper Wins");
           $("#buttonRow").hide();
            $("#resultText").text("Paper Wins");
        }
        else{
          // console.log ("Rock Wins");
          $("#buttonRow").hide();
           $("#resultText").text("Rock Wins");
        }
    }
    
     else if(userChoice == "Scissors"){
        if(computerChoice == "Rock"){
         //   console.log ("Rock Wins");
         $("#buttonRow").hide();
          $("#resultText").text("Rock Wins");
        }
        else{
            if(computerChoice == "Paper")
         //   console.log ("Scissors Wins");
         $("#buttonRow").hide();
          $("#resultText").text("Scissors Wins");
        }
    }
    
}


function calculate(){}{
 var Compcount, Usercount;
      function add() {
        if(computerChoice == "#resultText"){
        return Compcount += 1;
     }
     else{
         return Usercount += 1;
     }
        
      }
}


       



