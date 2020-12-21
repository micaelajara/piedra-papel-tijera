const imgPlayerChoice = document.getElementById("playerChoice");
const imgComputerChoice = document.getElementById("computerChoice");

const pResult = document.getElementById("result");
const pScore = document.getElementById("score");

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("Click", startGame)
    console.log("Ejecutó el ForEach")
})

function startGame(event){
    console.log("click")
    console.log("click")
} 