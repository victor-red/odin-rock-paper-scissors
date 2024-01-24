// Choices: 1 = Rock, 2 = Paper, 3 = Scissors

function getPlayerChoice(){
    let playerChoice = prompt('Make your selection: ')
    return playerChoice
}


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) + 1;
    return computerChoice;

}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

function playRound(playerChoice, computerSelection){


    // Handling player choices
    if(playerChoice == null){
        console.log('Invalid selection.')
        return
    }
    else if (playerChoice.toLowerCase() == 'rock'){
        playerSelection = 1;
    }
    else if (playerChoice.toLowerCase() == 'paper'){
        playerSelection = 2;
    }
    else if (playerChoice.toLowerCase() == 'scissors'){
        playerSelection = 3;
    }
    else{
        console.log('Invalid selection.')
        return
    }

    // Tie scenario

    if (playerSelection === computerSelection){
        console.log('Tie! Try again.')
        return
    }

    // Player wins scenarios

    else if (playerSelection == 1 && computerSelection == 3){
        console.log('You win! Rock beats Scissors.')
        return
    }
    else if (playerSelection == 2 && computerSelection == 1){
        console.log('You win! Paper beats Rock.')
        return
    }
    else if (playerSelection == 3 && computerSelection == 2){
        console.log('You win! Scissors beat Paper.')
        return
    }
    else{
        console.log('PC ganhou, tô testando ainda porra.')
    }
}

playRound(playerChoice, computerChoice)