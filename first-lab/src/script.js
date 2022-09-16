function playMusic() {
    const snd = new Audio("./assets/conga.mp3");
    snd.volume = 0.5;
    alert('Music playing..');
    snd.play();
}

const buttonHeight = 50;
const buttonWidth = 100;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");

    button.addEventListener("click", () => alert("You clicked me"));

    button.addEventListener("mouseover", () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    });
});


setTimeout(function () {
    document.getElementById('resume').style.display = "block";
}, 6000)