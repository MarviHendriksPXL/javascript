//kopieër dit in je browser en voer uit mannen :D

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    alert("Error, pleasy type : rock, paper or scissors");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;

    case 1:
      return "scissors";
      break;

    case 2:
      return "paper";
      break;
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost!";
    } else {
      return "You won!!!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost!";
    } else {
      return "You won!!!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost!";
    } else {
      return "You won!!!";
    }
  }
  if (userChoice === "bomb") {
    return "You win!!!";
  }
};
const playGame = () => {
  let userInput;
  let userChoice;
  while (userChoice === undefined) {
    userInput = prompt("rock, paper or scissors?");
    userChoice = getUserChoice(userInput);
  }
  const computerChoice = getComputerChoice();
  alert(
    "you threw: " +
      userChoice +
      "\n" +
      "The computer threw: " +
      computerChoice +
      "\n" +
      determineWinner(userChoice, computerChoice)
  );
};
playGame();
