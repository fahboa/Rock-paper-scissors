const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true) {
const playerChoice = prompt("Enter rock, paper, or scissors(or q to quit): ");
if (playerChoice.toLowerCase() == "q"){
    break
};

if (playerChoice !== "rock" && 
    playerChoice !== "paper" && 
    playerChoice !== "scissors") {
    console.log("Please enter a valid choice.");
    continue;
} else {
    const playerChoices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 3);
    const computerChoice = playerChoices[randomIndex];
    console.log("The computer chose:", computerChoice);

    if (computerChoice === playerChoice) {
        console.log("Draw");
        ties++;
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You won!");
        wins++;
    } else {
        console.log("You lost!");
        losses++;
    }

    console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
}
}
console.log("wins", "wins", "losses", "loses", "ties", "ties");