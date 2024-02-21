document.addEventListener('DOMContentLoaded', function(){
    let btnRock = document.createElement('button');
    let btnPaper = document.createElement('button');
    let btnScissors = document.createElement('button');
    let playerScoreDisplay = document.createElement('p');
    let computerScoreDisplay = document.createElement('p');
    let div = document.createElement('div');
    let scoreDiv = document.createElement('div');
    let playerScore = 0;
    let computerScore = 0;

    div.appendChild(btnRock);
    div.appendChild(btnPaper);
    div.appendChild(btnScissors);

    scoreDiv.appendChild(playerScoreDisplay);
    scoreDiv.appendChild(computerScoreDisplay);

    div.setAttribute('style', 'display: flex; gap: 16px; ')
    scoreDiv.setAttribute('style', 'display: flex; gap: 16px; ')

    btnRock.textContent = 'Rock';
    btnPaper.textContent = 'Paper';
    btnScissors.textContent = 'Scissors';

    playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
    computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);

    
    btnRock.addEventListener('click',playerChoiceRock);
    btnPaper.addEventListener('click', playerChoicePaper);
    btnScissors.addEventListener('click', playerChoiceScissors);

    let result = document.createElement('div');
    document.body.appendChild(result);
    let resultText = document.createElement('p');
    result.appendChild(resultText);

    document.body.appendChild(div);
    document.body.appendChild(scoreDiv);

    // Choices: 1 = Rock, 2 = Paper, 3 = Scissors




    function getComputerChoice(){
        let computerChoice = Math.floor(Math.random()*3) + 1;
        return computerChoice;

    }

    function createPlayerWinMessage(){
        let playerWinDiv = document.createElement('div');
        let playerWinMessage = document.createElement('p');

        document.body.appendChild(playerWinDiv);
        playerWinDiv.appendChild(playerWinMessage);

        playerWinMessage.textContent = "You win! Congratulations!";
    }

    function createComputerWinMessage(){
        let computerWinDiv = document.createElement('div');
        let computerWinMessage = document.createElement('p');

        document.body.appendChild(computerWinDiv);
        computerWinDiv.appendChild(computerWinMessage);

        computerWinMessage.textContent = "You Lose! Better luck next time!";
    }

    function resetScores(){
        playerScore = 0;
        computerScore = 0;
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
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
        }

        // Player wins scenarios

        else if (playerSelectionNumber == 1 && computerChoice == 3){
            resultText.textContent = 'You win! Rock beats Scissors!';
            playerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (playerScore == 5){
                playerWinDiv = createPlayerWinMessage();
                resetScores();
        }
        }
        else if (playerSelectionNumber == 2 && computerChoice == 1){
            resultText.textContent = 'You win! Paper beats Rock!';
            playerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (playerScore == 5){
                playerWinDiv = createPlayerWinMessage();
                resetScores();
        }
        }
        else if (playerSelectionNumber == 3 && computerChoice == 2){
            resultText.textContent = 'You win! Scissors beats Paper!';
            playerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (playerScore == 5){
                playerWinDiv = createPlayerWinMessage();
                resetScores();
        }
        }

        //Computer wins scenarios
        else if (playerSelectionNumber == 3 && computerChoice == 1){
            resultText.textContent = 'You lose! Rock beats Scissors!';
            computerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (computerScore == 5){
                computerWinDiv = createComputerWinMessage ();
                resetScores();
            }
            }
        else if (playerSelectionNumber == 1 && computerChoice == 2){
            resultText.textContent = 'You lose! Paper beats Rock!';
            computerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (computerScore == 5){
                computerWinDiv = createComputerWinMessage ();
                resetScores();
            }
            }
        else if (playerSelectionNumber == 2 && computerChoice == 3){
            resultText.textContent = 'You lose! Scissors beats Paper!';
            computerScore++;
            playerScoreDisplay.textContent = ('Player Score : ' + playerScore);
            computerScoreDisplay.textContent = ('Computer Score: ' + computerScore);
            if (computerScore == 5){
                computerWinDiv = createComputerWinMessage ();
                resetScores();
            }
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
}
)