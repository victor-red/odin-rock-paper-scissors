// Choices: 1 = Rock, 2 = Paper, 3 = Scissors

function getPlayerChoice(){
    let playerChoice = prompt('Make your selection: ')
    console.log(playerChoice)
    return playerChoice
}


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    return computerChoice;

}


function playRound(){

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let playerSelectionNumber;

    // Handling player choices
    if(playerChoice == null){
        console.log('Invalid selection, try again.');
        return null;
    }
    else if (playerChoice.toLowerCase() == 'rock'){
        playerSelectionNumber = 1;
    }
    else if (playerChoice.toLowerCase() == 'paper'){
        playerSelectionNumber = 2;
    }
    else if (playerChoice.toLowerCase() == 'scissors'){
        playerSelectionNumber = 3;
    }
    else{
        console.log('Invalid selection, try again.')
        return null;
    }

    // Tie scenario

    if (playerSelectionNumber == computerChoice){
        console.log('Tie! Try again.')
        return null;
    }

    // Player wins scenarios

    else if (playerSelectionNumber == 1 && computerChoice == 3){
        console.log('You win! Rock beats Scissors.')
        return true;
    }
    else if (playerSelectionNumber == 2 && computerChoice == 1){
        console.log('You win! Paper beats Rock.')
        return true;
    }
    else if (playerSelectionNumber == 3 && computerChoice == 2){
        console.log('You win! Scissors beats Paper.')
        return true;
    }

    //Computer wins scenarios
    else if (playerSelectionNumber == 3 && computerChoice == 1){
        console.log('You lose! Rock beats Scissors.')
        return false;
    }
    else if (playerSelectionNumber == 1 && computerChoice == 2){
        console.log('You lose! Paper beats Rock.')
        return false;
    }
    else if (playerSelectionNumber == 2 && computerChoice == 3){
        console.log('You lose! Scissors beats Paper.')
        return false;
    }
}

function game(){
    let gameEnd = false;
    let playerScore = 0;
    let computerScore = 0;
    let result;

    while (!gameEnd){

        console.log('Player Score: ' + ' ' + playerScore + ' ' + 'Computer Score: ' + ' ' + computerScore );
        result = playRound();

        if (result !== null) {
            if (result) {
                playerScore += 1;
                console.log(playerScore);
            } else {
                computerScore += 1;
                console.log(computerScore);
            }
        }

        if (playerScore == 5){
            console.log ('You win the best of 5!')
            gameEnd = true;
        }
        else if (computerScore == 5){
            console.log ('You lose! Try again next time.')
            gameEnd = true;
        }
    }
}

game();