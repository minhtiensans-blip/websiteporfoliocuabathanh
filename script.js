const profile = document.getElementById("profile")
profile.addEventListener("animationend",() => {play()} )
function play(){
    const notprofile = document.getElementById("notprofile")
    notprofile.classList.toggle("play")
}