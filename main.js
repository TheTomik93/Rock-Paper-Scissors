let computerScore = 0;
let playerScore = 0;
let lastRoundWinner = 0;
let computerChoice = "";
let playerChoice = "";

const buttons = document.querySelectorAll(".btn");
let resultTxt = document.getElementById("result");
let txt = document.getElementById("fight");
let newGameButton = document.getElementById("newGameButton");

for (const btn of buttons){
    btn.addEventListener('click', function(e) {
        startRound(e.target.id);
    })
}

newGameButton.addEventListener("click", newGame);

function newGame(){
    computerScore = 0;
    playerScore = 0;
    lastRoundWinner = 0;
    computerChoice = "";
    playerChoice = "";
    toggleNewGameButton();
    updateScore();
    resultTxt.textContent = "";
    txt.textContent=``;
}

function startRound(x){
    if (playerScore === 5 || computerScore === 5){
        return;
    }
    getPlayerChoice(x);
    getComputerChoice();
    updateFightText();
    playRound(computerChoice, playerChoice);
    computerScoreUpdate(lastRoundWinner);
    playerScoreUpdate(lastRoundWinner);
    reportScore(computerChoice, playerChoice, computerScore, playerScore);
    updateScore();
    updateResult();
    isGameOver();
    toggleNewGameButton();
}

function toggleNewGameButton(){
    if (playerScore === 5 || computerScore === 5){
        newGameButton.classList.remove("newGameButtonInactive");
        newGameButton.classList.add("newGameButtonActive");
    } else {
        newGameButton.classList.remove("newGameButtonActive");
        newGameButton.classList.add("newGameButtonInactive");
    }
}

function isGameOver(){
    if (playerScore === 5){
        resultTxt.textContent = "GAME OVER! YOU WIN!";
    }
    else if (computerScore === 5){
        resultTxt.textContent = "GAME OVER! COMPUTER WINS!";
    }
}

function updateResult(){
    if (lastRoundWinner === 0){
        resultTxt.textContent = "Computer won this round!";
    }
    else if (lastRoundWinner === 1){
        resultTxt.textContent = "You won this round!";
    }
    else{
        resultTxt.textContent = "This round ends in draw!";
    }
}

function updateScore(){
    let plrScr = document.getElementById("playerScore");
    let pcScr = document.getElementById("computerScore");

    plrScr.textContent = playerScore;
    pcScr.textContent = computerScore;
}

function updateFightText(){
    txt.textContent=`You chose ${playerChoice}, computer chose ${computerChoice}`;
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

function getPlayerChoice(x){
    playerChoice = x;

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