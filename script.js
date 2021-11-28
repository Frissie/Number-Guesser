let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, pc, target) => {
  let humanDif = Math.abs(target - human)
  let pcDif = Math.abs(target - pc)

  switch (true) {
    case (humanDif < pcDif):
      return true;
      break;
    case (humanDif > pcDif):
      return false;
      break;
    default:
      return true;
      break;
  }
}

const updateScore = (winner) => {
  
 switch (winner) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}