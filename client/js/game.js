var userChoice = prompt("Do you choose rock, paper or scissors?");
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
            return "Rock Wins";
        }
        else{
            return "Paper Wins";
        }
    }
    
    else if(choice1 == "Paper" || choice){
        if(choice2 == "Rock"){
            return "Paper Wins";
        }
        else{
            return "Rock Wins";
        }
    }
    
     else if(choice1 == "Scissors"){
        if(choice2 == "Rock"){
            return "Rock Wins";
        }
        else{
            if(choice2 == "Paper")
            return "Scissors Wins";
        }
    }
}