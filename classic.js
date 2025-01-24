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
    scoreDisplay()
}

//if paper is chosen
function paper(){
  playerChoice = 'Paper'
  document.getElementById("player-box").src = "imgs/paper-rps.png";
  computerResponse()
  determine()
    document.getElementById("playerResult").innerText = `Player Chose: ${playerChoice}`
    scoreDisplay()
}

//if scissors is chosen
function scissors(){
  playerChoice = 'Scissors'
  document.getElementById("player-box").src = "imgs/scissors-RPS.png";
  computerResponse()
  determine()
    document.getElementById("playerResult").innerText = `Player Chose: ${playerChoice}`
    scoreDisplay()
}

//determine winner
let playerPoints = 0;
let computerPoints = 0;
function determine(){
  if(playerChoice === 'Rock' && computerChoice === 'Rock'){
  } else if (playerChoice === 'Rock' && computerChoice === 'Paper'){
computerPoints++
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
playerPoints++ 
  } else if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
computerPoints++ 
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
playerPoints++ 
  } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors'){
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
playerPoints++ 
  } else if (playerChoice === 'Paper' && computerChoice === 'Paper'){
  } else if (playerChoice === 'Paper' && computerChoice === 'Scissors'){
computerPoints++ 

  } else if(playerPoints === 3){
    console.log('Winner')
  } else if (computerPoints === 3){
    console.log('Loser')
  }
   else {
    console.log('ERROR: HOW DID YOU MANAGE THIS?!')
  }
}


//Score Display
function scoreDisplay(){
document.getElementById("gameScore").innerText = `${playerPoints} - ${computerPoints}`
}
