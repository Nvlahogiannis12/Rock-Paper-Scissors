window.onload = getName();
// Generates random number if guest name Chosen
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//inputs username
function getName() {
  let randomNumber = getRandomNumber(0, 9999);
  let userName = prompt('What is your name:')
  userName ? document.getElementById('name').innerText = `${userName}`:
  document.getElementById('name').innerText =`Guest_` + `${randomNumber}`
}

//opponent choice
function opponentChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// assigns opponent choice a proper choice in RPS
let computerChoice;
function computerResponse() {
  let computerNumber = opponentChoice(1, 3);
  if (computerNumber === 1){
    computerChoice = 'Rock'
    document.getElementById("opponent-box").src = "imgs/rock-RPS.png";
    document.getElementById("computerResult").innerText = `Computer Chose: ${computerChoice}`
   }
   else if(computerNumber === 2){
     computerChoice = 'Paper'
     document.getElementById("opponent-box").src = "imgs/paper-rps.png";
     document.getElementById("computerResult").innerText = `Computer Chose: ${computerChoice}`
   }
   else {
     computerChoice = 'Scissors'
     document.getElementById("opponent-box").src = "imgs/scissors-RPS.png";
     document.getElementById("computerResult").innerText = `Computer Chose: ${computerChoice}`
   }
   console.log(computerChoice)
}

//If rock is chosen
let playerChoice;
function rock(){
  playerChoice = 'Rock'
  document.getElementById("player-box").src = "imgs/rock-RPS.png";
  computerResponse()
  determine()
    document.getElementById("playerResult").innerText = `Player Chose: ${playerChoice}`
}

//if paper is chosen
function paper(){
  playerChoice = 'Paper'
  document.getElementById("player-box").src = "imgs/paper-rps.png";
  computerResponse()
  determine()
    document.getElementById("playerResult").innerText = `Player Chose: ${playerChoice}`
}

//if scissors is chosen
function scissors(){
  playerChoice = 'Scissors'
  document.getElementById("player-box").src = "imgs/scissors-RPS.png";
  computerResponse()
  determine()
    document.getElementById("playerResult").innerText = `Player Chose: ${playerChoice}`
}

//determine winner
function determine(){
  if(playerChoice === 'Rock' && computerChoice === 'Rock'){
console.log('Tie')
  } else if (playerChoice === 'Rock' && computerChoice === 'Paper'){
console.log('Lose')
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
console.log('Winner')
  } else if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
console.log('Lose')
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
console.log('winner')
  } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors'){
console.log('Tie')
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
console.log('Winner')
  } else if (playerChoice === 'Paper' && computerChoice === 'Paper'){
console.log('Tie')
  } else if (playerChoice === 'Paper' && computerChoice === 'Scissors'){
console.log('Lose')
  } else {
    console.log('ERROR: HOW DID YOU MANAGE THIS?!')
  }
}

//word display of chosen object
