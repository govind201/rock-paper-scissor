const getComputerSelection = () => {
  const responses = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  console.log(`You chose - ${playerSelection}`);
  console.log(`Computer chose - ${computerSelection}`);

  if (playerSelection === computerSelection) {
    console.log("DRAW");
    return 0;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return "player";
  }

  console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  return "computer";
};

const getPlayerSelection = () => {
  let playerSelection;

  do {
    playerSelection = prompt("Type rock, paper, or scissors").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
      alert("Please choose a correct choice");
    }
  } while (!["rock", "paper", "scissors"].includes(playerSelection));

  return playerSelection;
};

const playGame = (rounds) => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    const computerSelection = getComputerSelection();
    const playerSelection = getPlayerSelection();

    const result = playRound(playerSelection, computerSelection);

    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`Player wins! ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`Player loses! ${playerScore} - ${computerScore}`);
  } else {
    console.log(`Tie! ${playerScore} - ${computerScore}`);
  }
};

const rounds = prompt("Enter number of rounds:");
playGame(rounds);
