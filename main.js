/*getComputerChoice - returns R P S randomly
getPlayerChoice - user selection - case insensitive -promtem

function playRound(playerSelection, computerSelection)
- returns result of the round

function game() - petikolova hra, pocita score, loguje winnera a stav
*/

let computerScore = 0;
let playerScore = 0;
let lastRoundWinner = 0;
let computerChoice = "";
let playerChoice = "";

game();

function game(){
    for (let i=0; i<3; i++){
        getComputerChoice();
        getPlayerChoice();
        /*playRound();
        recordScore();
        logResults();*/
    };
}

function getComputerChoice(){
    computerRng = Math.floor(Math.random()*3);
    switch(computerRng){
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "SCISSORS";
            break;
        default:
            console.log("Error in computerRng function");
            break;
    }
    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;
}

function getPlayerChoice(){
    playerChoice = prompt().toUpperCase();

    if  (playerChoice == "ROCK" || 
        playerChoice == "PAPER" || 
        playerChoice == "SCISSORS"){
        console.log(`Player chose ${playerChoice}`);
        return playerChoice;
    }
    else{
        console.log("BAD INPUT, only rock paper scissors valid");
        getPlayerChoice(playerChoice);
    }
}