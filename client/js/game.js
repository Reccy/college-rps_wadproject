var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 == choice2){
        return "The result is a tie!";
    }
    
    else if(choice1 == "Rock"){
        if(choice2 == "Scissors"){
            console.log ("Rock Wins");
        }
        else{
           console.log ("Scissors Wins");
        }
    }
    
    else if(choice1 == "Paper"){
        if(choice2 == "Rock"){
           console.log ("Paper Wins");
        }
        else{
           console.log ("Rock Wins");
        }
    }
    
     else if(choice1 == "Scissors"){
        if(choice2 == "Rock"){
            console.log ("Rock Wins");
        }
        else{
            if(choice2 == "Paper")
            console.log ("Scissors Wins");
        }
    }
}