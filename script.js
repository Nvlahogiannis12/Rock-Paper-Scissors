function test() {
    let mode = document.getElementsByClassName("mode")[0];
    console.log(mode.getBoundingClientRect().left, window.innerWidth, mode.offsetWidth);
}//24 pixels unacounted for