const choices = ['rock','paper','scissors'];
let computerScore = [];
let playerScore = [];
let computerGames = [];
let playerGames = [];

let winners = document.querySelector('div.winners')

function wholeGame() {
    game();
    while(playerGames !== 100 && computerGames !== 100) {
        gameTotal();
        playRound();
    }if(playerGames == 100 && computerGames < 100) {
        console.log('You should go outside')
    }    
}

function game() {
    playRound();
    while(playerScore !== 5 && computerScore !== 5) {
        console.log(playerScore);
        console.log(computerScore);
        playRound();
    }if(playerScore == 5 && computerScore < 5) {
        console.log(playerScore);
        console.log(computerScore);
        console.log('player wins')
        playerGames++;
    }else {
        console.log(playerScore);
        console.log(computerScore);
        console.log('computer wins');
        computerGames++
    }
    gameTotal();
}

function gameTotal() {
    document.querySelector('p1').textContent = `Player Score: ${playerGames}`;
    document.querySelector('p2').textContent = `Computer Score: ${computerGames}`;
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice(); 
    console.log(computerSelection);

    if(playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection == 'scissors' && computerSelection === 'scissors') {
        console.log('Draw, play again.')
    }else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection == 'scissors' && computerSelection === 'paper') {
        console.log('you win.')
        playerScore++;
        //winners.push('Player');
    }else{
        console.log('you lose');
        computerScore++;
        //winners.push('Computer');
    }
}

function playerChoice () {
    let input = prompt('type rock paper or scissors');
    while(input == '') {  //run until words are typed
        let input = prompt('type rock paper or scissors'); 
    }
    input = input.toLowerCase();
    input = input.trim();
    let check = validateInput(input);
    while(check == false) { //prompt until correct answer
        input = prompt('Please Type rock paper or scissor. check spelling moron');
        check = validateInput(input);
    }
    if(check == true) {
            console.log(input);
            return input;
    }else if(input==null) {
        return;
    }
}

function computerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player");
    let computerWins = winners.filter((item) => item == "computer");
    
}

gameTotal();