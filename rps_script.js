document.addEventListener('DOMContentLoaded', function(){
    let btnRock = document.createElement('button');
    let btnPaper = document.createElement('button');
    let btnScissors = document.createElement('button');
    let div = document.createElement('div');

    div.appendChild(btnRock);
    div.appendChild(btnPaper);
    div.appendChild(btnScissors);

    div.setAttribute('style', 'display: flex; gap: 16px; ')

    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';

    
    btnRock.addEventListener('click',playerChoiceRock);
    btnPaper.addEventListener('click', playerChoicePaper);
    btnScissors.addEventListener('click', playerChoiceScissors);

    let result = document.createElement('div');
    document.body.appendChild(result);
    let resultText = document.createElement('p');
    result.appendChild(resultText);

    document.body.appendChild(div);

    // Choices: 1 = Rock, 2 = Paper, 3 = Scissors




    function getComputerChoice(){
        let computerChoice = Math.floor(Math.random()*3) + 1;
        return computerChoice;

    }


    function playRound(playerChoice){


        let computerChoice = getComputerChoice();

        // Handling player choices
        if(playerChoice == null){
            console.log('Invalid selection, try again.');
            return null;
        }
        else if (playerChoice == 'rock'){
            playerSelectionNumber = 1;
        }
        else if (playerChoice == 'paper'){
            playerSelectionNumber = 2;
        }
        else if (playerChoice == 'scissors'){
            playerSelectionNumber = 3;
        }
        else{
            console.log('Invalid selection, try again.')
            return null;
        }

        // Tie scenario

        if (playerSelectionNumber == computerChoice){
            resultText.textContent = 'Its a tie! Try again!';
            return null;
        }

        // Player wins scenarios

        else if (playerSelectionNumber == 1 && computerChoice == 3){
            resultText.textContent = 'You win! Rock beats Scissors!';
        }
        else if (playerSelectionNumber == 2 && computerChoice == 1){
            resultText.textContent = 'You win! Paper beats Rock!';
            return true;
        }
        else if (playerSelectionNumber == 3 && computerChoice == 2){
            resultText.textContent = 'You win! Scissors beats Paper!';
            return true;
        }

        //Computer wins scenarios
        else if (playerSelectionNumber == 3 && computerChoice == 1){
            resultText.textContent = 'You lose! Rock beats Scissors!';
            return false;
        }
        else if (playerSelectionNumber == 1 && computerChoice == 2){
            resultText.textContent = 'You lose! Paper beats Rock!';
            return false;
        }
        else if (playerSelectionNumber == 2 && computerChoice == 3){
            resultText.textContent = 'You lose! Scissors beats Paper!';
            return false;
        }
    }

    function playerChoiceRock(){
        return playRound('rock');
    }

    function playerChoiceScissors(){
        return playRound('scissors');
    }

    function playerChoicePaper(){
        return playRound('paper');
    }
})