const getComputerSelection = () => {
    const responses = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                console.log("DRAW");
                return 0;
            case "paper":
                console.log(`You chose - ${playerSelection}`);
                console.log(`Computer chose - ${computerSelection}`);
                console.log("You lose! Paper beats Rock");
                return "computer";
            case "scissors":
                console.log(`You chose - ${playerSelection}`);
                console.log(`Computer chose - ${computerSelection}`);
                console.log("You win! Rock beats Scissors");
                return "player";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                console.log("You win! Paper beats Rock");
                return "player";
            case "paper":
                console.log("DRAW");
                return 0;
            case "scissors":
                console.log("You lose! Scissors beats Paper");
                return "computer";
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                console.log("You lose! Rock beats Scissors");
                return "computer";
            case "paper":
                console.log("You win! Scissors beats Paper");
                return "player";
            case "scissors":
                console.log("DRAW");
                return 0;
        }
    }
}
const playGame = (rounds) => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        const computerSelection = getComputerSelection();
        let playerSelection;

        do {
            playerSelection = prompt(
                "Type rock, paper or scissors"
            ).toLowerCase();
            if (!["rock", "paper", "scissors"].includes(playerSelection)) {
                alert("Please choose a correct choice");
            }
        } while (!["rock", "paper", "scissors"].includes(playerSelection));

        const result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            default:
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player wins! ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Player loses! ${playerScore} - ${computerScore}`);
    } else {
        console.log(`Tie! ${playerScore} - ${computerScore}`);
    }
}

const rounds = prompt("Enter number of rounds:");
playGame(rounds);
 