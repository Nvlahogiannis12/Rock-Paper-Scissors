// Generates random number if guest name Chosen
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandomNumber(0, 9999);

//inputs username
let userName = prompt('What is your name:')
userName ? document.getElementById('name').innerText = `${userName}`:
document.getElementById('name').innerText =`Guest_` + `${randomNumber}`

//opponent choice
function opponentChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let computerNumber = opponentChoice(1, 3);

// assigns opponent choice a proper choice in RPS
if(computerNumber === 1){
 let opponentChoice = 'rock'
}
else if(computerNumber === 2){
  let opponentChoice = 'paper'
}
else {
  let opponentChoice = 'scissors'
}

//If rock is chosen
function rock(){
let playerChoice = 'rock'
}

//if paper is chosen
function paper(){
let playerChoice = 'paper'
}

//if scissors is chosen
function scissors(){
let playerChoice = 'scissors'
}

document.getElementById('results').innerText =`opponent choice: ` + `${opponentChoice}`