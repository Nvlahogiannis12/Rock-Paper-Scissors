/*
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandomNumber(0, 9999);
*/
let userName = prompt('What is your name:')
userName ? document.getElementById('name').innerText = `${userName}`:
document.getElementById('name').innerText ='Guest'