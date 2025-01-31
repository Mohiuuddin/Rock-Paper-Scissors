let humanScore = 0;
let computerScore = 0; 



function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return "rock";
    } else if( randomNumber === 1){
        return "paper";
    } else (randomNumber === 2)
        return "scissors";
    
}  

function getHumanChoice (){
    const humanChoie = prompt("Please choose among rock, paper and scissors: ").toLowerCase();
    return humanChoie;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won this round! rock beats scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won this round! paper beats rock")
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won this round! scissors beats paper")
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie, try again!")
    } else {
            console.log("You lose " + computerChoice + " beats " + humanChoice);
            computerScore++;
    }
}

function playGame() {
    
    while (humanScore < 5 && computerScore < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection)
        console.log(computerSelection)
        
    
        playRound(humanSelection, computerSelection);
        console.log(`Computer score is ${computerScore}`);
        console.log(`Human score is ${humanScore}`)
    
    }
    if (humanScore === 5) {
        console.log("Congrats! you won the game!")
    } else {
        console.log("You lose! the computerwon the game.")
    }

}

playGame();

