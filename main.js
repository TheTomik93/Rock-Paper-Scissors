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
        playRound(computerChoice, playerChoice);
        computerScoreUpdate(lastRoundWinner);
        playerScoreUpdate(lastRoundWinner);
        reportScore(computerChoice, playerChoice, computerScore, playerScore);
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

function playRound(computerChoice, playerChoice){
    if(computerChoice == "ROCK"){
        if(playerChoice == "ROCK"){
            console.log("its a draw")
            lastRoundWinner = 2;
        }
        else if(playerChoice == "PAPER"){
            console.log("player wins")
            lastRoundWinner = 1;
        }
        else if(playerChoice == "SCISSORS"){
            console.log("computer wins")
            lastRoundWinner = 0;
        }
    }
    else if(computerChoice == "PAPER"){
        if(playerChoice == "PAPER"){
            console.log("its a draw")
            lastRoundWinner = 2;
        }
        else if(playerChoice == "SCISSORS"){
            console.log("player wins")
            lastRoundWinner = 1;
        }
        else if(playerChoice == "ROCK"){
            console.log("computer wins")
            lastRoundWinner = 0;
        }
    }
    else if(computerChoice == "SCISSORS"){
        if(playerChoice == "SCISSORS"){
            console.log("its a draw")
            lastRoundWinner = 2;
        }
        else if(playerChoice == "ROCK"){
            console.log("player wins")
            lastRoundWinner = 1;
        }
        else if(playerChoice == "PAPER"){
            console.log("computer wins")
            lastRoundWinner = 0;
        }
    }
    console.log(lastRoundWinner);
    return lastRoundWinner;
}

function playerScoreUpdate(lastRoundWinner){
    if(lastRoundWinner == 1){
        playerScore++;
        console.log("PLAYER SCORE INCREASED BY ONE");
        return playerScore;
    }
    else{
        return;
    }
}

function computerScoreUpdate(lastRoundWinner){
    console.log(lastRoundWinner);

    if(lastRoundWinner == 0){
        computerScore++;
        console.log("COMPUTER SCORE INCREASED BY ONE");
        return computerScore;
    }
    else{
        return;
    }
}

function reportScore(computerChoice, playerChoice, computerScore, playerScore){
    console.log(`Computer played ${computerChoice}, player played ${playerChoice}`);
    console.log(`Computer score: ${computerScore} / Player score: ${playerScore}`);
}