let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const ComputerScorepara = document.querySelector("#Computer-Score");

const genComputerChoice = () => {
    const options =  ["Rock", "Paper", "Scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () => {
    //console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, ComputerChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        ComputerScore++;
        ComputerScorepara.innerText = ComputerScore;
        //console.log("You lose!");
        msg.innerText = `You lose! ${ComputerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //console.log("User choice = ", userChoice);
    const ComputerChoice = genComputerChoice();
    //console.log("Computer choice = ", ComputerChoice);

    if (userChoice === ComputerChoice) {
      drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            userWin = ComputerChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper"){
            userWin = ComputerChoice === "Scissors" ? false : true;
        } else {
            ComputerChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, ComputerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});