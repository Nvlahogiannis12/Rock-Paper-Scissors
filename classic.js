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
    computerChoice = 'rock'
    document.getElementById("opponent-box").src = "imgs/rock-RPS.png";
   }
   else if(computerNumber === 2){
     computerChoice = 'paper'
     document.getElementById("opponent-box").src = "imgs/paper-rps.png";
   }
   else {
     computerChoice = 'scissors'
     document.getElementById("opponent-box").src = "imgs/scissors-RPS.png";
   }
   console.log(computerChoice)
}

//If rock is chosen
let playerChoice;
function rock(){
  playerChoice = 'rock'
  document.getElementById("player-box").src = "imgs/rock-RPS.png";
  computerResponse()
  determine()
}

//if paper is chosen
function paper(){
  playerChoice = 'paper'
  document.getElementById("player-box").src = "imgs/paper-rps.png";
  computerResponse()
  determine()
}

//if scissors is chosen
function scissors(){
  playerChoice = 'scissors'
  document.getElementById("player-box").src = "imgs/scissors-RPS.png";
  computerResponse()
  determine()
}

//determine winner
function determine(){
  if(playerChoice === 'rock' && computerChoice === 'rock'){
console.log('Tie')
  } else if (playerChoice === 'rock' && computerChoice === 'paper'){
console.log('Lose')
  } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
console.log('Winner')
  } else if (playerChoice === 'scissors' && computerChoice === 'rock'){
console.log('Lose')
  } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
console.log('winner')
  } else if (playerChoice === 'scissors' && computerChoice === 'scissors'){
console.log('Tie')
  } else if (playerChoice === 'paper' && computerChoice === 'rock'){
console.log('Winner')
  } else if (playerChoice === 'paper' && computerChoice === 'paper'){
console.log('Tie')
  } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
console.log('Lose')
  } else {
    console.log('ERROR: HOW DID YOU MANAGE THIS?!')
  }
}