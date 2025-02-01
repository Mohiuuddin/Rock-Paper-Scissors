let humanScore = 0;
let computerScore = 0; 
let ties = 0;
// const rockButton = document.querySelector(".rock");
// const paperButton = document.querySelector(".paper");
// const scissorsButton = document.querySelector(".scissors");

const rock= document.querySelector("#playerRock");
const paper= document.querySelector("#playerPaper");
const scissors= document.querySelector("#playerScissors");

function addPopEffect(element) {
    element.classList.add("pop"); // Add the class
    setTimeout(() => {
        element.classList.remove("pop"); // Remove after 300ms
    }, 300);
}

rock.addEventListener("click", () => {
    if (humanScore === 5 || computerScore === 5) return; 
    addPopEffect(rock)
    const playerSelection='rock'
    console.log(playerSelection);
    const computerSelection= getComputerChoice();
    console.log(computerSelection);
    if(computerSelection === "rock"){
       addPopEffect(document.querySelector("#computerRock"))

    } else if(computerSelection === "paper"){
        addPopEffect(document.querySelector("#computerPaper")) 
        
    } else if(computerSelection === "scissors"){
        addPopEffect(document.querySelector("#computerScissors"))
    }
    const playerChoice = document.querySelector(".player-choice");
    playerChoice.textContent = `Player chose: ${playerSelection}`;
    const computerChoice = document.querySelector(".computer-choice");
    computerChoice.textContent = `Computer chose: ${computerSelection}`;

    // playRound(playerSelection, computerSelection);
    playGame(playerSelection, computerSelection);

});

paper.addEventListener("click", () => 
{
    if (humanScore === 5 || computerScore === 5) return; 
    addPopEffect(paper)
    const playerSelection='paper'
    console.log(playerSelection);
    const computerSelection= getComputerChoice();
    console.log(computerSelection);
    if(computerSelection === "rock"){
        addPopEffect(document.querySelector("#computerRock"))
 
     } else if(computerSelection === "paper"){
         addPopEffect(document.querySelector("#computerPaper")) 
         
     } else if(computerSelection === "scissors"){
         addPopEffect(document.querySelector("#computerScissors"))
     }

    const playerChoice = document.querySelector(".player-choice");
    playerChoice.textContent = `Player chose: ${playerSelection}`;
    const computerChoice = document.querySelector(".computer-choice");
    computerChoice.textContent = `Computer chose: ${computerSelection}`;

    // playRound(playerSelection, computerSelection);
    playGame(playerSelection, computerSelection);


});







scissors.addEventListener("click", () => 
{
    if (humanScore === 5 || computerScore === 5) return; 
    addPopEffect(scissors)
    const playerSelection="scissors";
    console.log(playerSelection);
    const computerSelection= getComputerChoice();
    console.log(computerSelection);
    if(computerSelection === "rock"){
        addPopEffect(document.querySelector("#computerRock"))
 
     } else if(computerSelection === "paper"){
         addPopEffect(document.querySelector("#computerPaper")) 
         
     } else if(computerSelection === "scissors"){
         addPopEffect(document.querySelector("#computerScissors"))
     }
    
    const playerChoice = document.querySelector(".player-choice");
    playerChoice.textContent = `Player chose: ${playerSelection}`;
    const computerChoice = document.querySelector(".computer-choice");
    computerChoice.textContent = `Computer chose: ${computerSelection}`;
    // playRound(playerSelection, computerSelection);
    playGame(playerSelection, computerSelection);

});



function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return "rock";
    } else if( randomNumber === 1){
        return "paper";
    } else if (randomNumber === 2){
        return "scissors";
    }
        
    
}  

// function getHumanChoice (){
//     const humanChoie = prompt("Please choose among rock, paper and scissors: ").toLowerCase();
//     return humanChoie;
// }


function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors") {
        // console.log("You won this round! rock beats scissors");
        document.querySelector(".winner h3").textContent="You have won the round!";
        document.querySelector(".winner h3").style.cssText="display:block;";
        humanScore++;
        document.querySelector(".player-score").textContent=`Score: ${humanScore}`;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        // console.log("You won this round! paper beats rock")
        document.querySelector(".winner h3").textContent="You have won the round!";
        document.querySelector(".winner h3").style.cssText="display:block;";
        humanScore++;
        document.querySelector(".player-score").textContent=`Score: ${humanScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        // console.log("You won this round! scissors beats paper")
        document.querySelector(".winner h3").textContent="You have won the round!";
        document.querySelector(".winner h3").style.cssText="display:block;";
        humanScore++;
        document.querySelector(".player-score").textContent=`Score: ${humanScore}`;
    } else if (humanChoice === computerChoice) {
        // console.log("It's a tie, try again!")
        document.querySelector(".winner h3").textContent="It's a tie, try again!";
        document.querySelector(".winner h3").style.cssText="display:block;";
        ties++;
        document.querySelector(".ties").textContent=`Ties: ${ties}`;

    } else {
            // console.log("You lose " + computerChoice + " beats " + humanChoice);
            document.querySelector(".winner h3").textContent="Computer won the round!";
            document.querySelector(".winner h3").style.cssText="display:block;";
            computerScore++;
            document.querySelector(".computer-score").textContent=`Score: ${computerScore}`;

    }
}


function playGame(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);

    if (humanScore === 5) {
        document.querySelector(".winner h3").textContent = "You have won the game!"
        document.querySelector(".winner h3").style.cssText="display:block;";
        document.querySelector(".winner button").style.cssText="display:block;";
    } else if (computerScore === 5) {
        console.log("You lose! The computer won the game.");
        document.querySelector(".winner h3").textContent = "Computer won the game!"
        document.querySelector(".winner h3").style.cssText="display:block;";
        document.querySelector(".winner button").style.cssText="display:block;";
    }
}

function resetGame() {
    document.querySelector(".player-score").textContent = "Score: 0";
    document.querySelector(".computer-score").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".player-choice").textContent = "Player chose:";
    document.querySelector(".computer-choice").textContent = "Computer chose:";
    document.querySelector(".winner h3").style.cssText="display:none;";
    document.querySelector(".winner button").style.cssText="display:none;";
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    
  }

  const playAgain = document.querySelector(".winner button");
  playAgain.addEventListener("click",()=>{
    resetGame();
  })





// rockButton.addEventListener('click', ()=>{
//     const computerSelection = getComputerChoice();
//     const playerSelection='rock';
//     playRound(playerSelection, computerSelection);
// })



// function playGame() {
    
//     while (humanScore < 5 && computerScore < 5) {

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         console.log(humanSelection)
//         console.log(computerSelection)
        
    
//         playRound(humanSelection, computerSelection);
//         console.log(`Computer score is ${computerScore}`);
//         console.log(`Human score is ${humanScore}`)
    
//     }
//     if (humanScore === 5) {
//         console.log("Congrats! you won the game!")
//     } else {
//         console.log("You lose! the computerwon the game.")
//     }

// }

// playGame();

