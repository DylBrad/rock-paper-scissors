const hands = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
  let randomHand = hands[Math.floor(Math.random() * hands.length)];

  return randomHand;
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let roundCount = parseInt(0);
const userPick = document.querySelector('#userPick');
const comupterPick = document.querySelector('#computerPick');
const roundHeader = document.querySelector('#round');

function playRound(input) {
  roundHeader.innerText = `Round ${roundCount + 1}`;

  let computerScoreCount = document.querySelector('#computerScore');
  let userScoreCount = document.querySelector('#userScore');
  const computerSelection = computerPlay();

  if (input === computerSelection) {
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
  } else if (input === 'ROCK' && computerSelection === 'PAPER') {
    computerScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    computerScoreCount.innerText = `Computer: ${computerScore}.`;
  } else if (input === 'ROCK' && computerSelection === 'SCISSORS') {
    userScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    userScoreCount.innerText = `User: ${userScore}`;
  } else if (input === 'PAPER' && computerSelection === 'SCISSORS') {
    computerScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    computerScoreCount.innerText = `Computer: ${computerScore}.`;
  } else if (input === 'PAPER' && computerSelection === 'ROCK') {
    userScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    userScoreCount.innerText = `User: ${userScore}`;
  } else if (input === 'SCISSORS' && computerSelection === 'ROCK') {
    computerScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    computerScoreCount.innerText = `Computer: ${computerScore}.`;
  } else if (input === 'SCISSORS' && computerSelection === 'PAPER') {
    userScore++;
    roundCount++;
    userPick.innerText = `You picked ${input}.`;
    comupterPick.innerHTML = `Computer picked ${computerSelection}`;
    userScoreCount.innerText = `Player: ${userScore}`;
  }
}
