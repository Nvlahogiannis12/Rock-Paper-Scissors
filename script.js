
/*classList object 

myElem.classList.remove("d-none")
myElem.classList.remove("d-flex")
*/
function startMenu(){
let menu = document.getElementsByClassName('mode')[0]
menu.classList.remove("d-none")
menu.classList.add("d-flex")
}

function back(){
let closeMenu = document.getElementsByClassName('mode')[0]
closeMenu.classList.add("d-none")
closeMenu.classList.remove("d-flex")
}