var character = document.getElementById("character");
var block = document.getElementById("block");
let displayScore = document.getElementById("score");
let score = 0;

block.style.animation = "none";
character.style.animation = "none";

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var checkLose = setInterval(function () {
    var characterBottom = parseInt(
        window.getComputedStyle(character).getPropertyValue("bottom")
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );

    if (blockLeft < 25 && blockLeft > 0 && characterBottom < 20) {
        block.style.animation = "none";
        character.style.animation = "none";
        alert("You Lose! Try Again...");
        clearInterval(genarateScore);
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        block.style.animation = "block 1s infinite linear";
        character.style.animation = "jump 500ms";
        var generateScore = setInterval(showScore, 100);
    }
});

function showScore() {
    score++;
    displayScore.innerText = score;
}
