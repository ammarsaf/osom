console.log('Rock Paper Scissor Game')
const ItemChoice = ["rock", "paper", "scissor"]

let ComputerChoice = () => {
    let RandomProb = Math.random()
    let ComputerChoice = undefined
    if (RandomProb < 0.3) {
        ComputerChoice = ItemChoice[0]
    } else if (RandomProb > 0.3 && RandomProb < 0.6) {
        ComputerChoice = ItemChoice[1]
    } else {
        ComputerChoice = ItemChoice[2]
    }
    return ComputerChoice
}

let HumanChoice = () => {
    let HumanChoice = prompt("Please choice your item: ").toLowerCase()
    return HumanChoice
}

let gameLogicResult = (getHumanChoice, getComputerChoice) => {

    let result = undefined;

    if (!ItemChoice.includes(getHumanChoice)) {
        console.error("Your item does not exists!")
    }
    else {
        if ((getComputerChoice == ItemChoice[0] && getHumanChoice == ItemChoice[1]) || 
            (getComputerChoice == ItemChoice[1] && getHumanChoice == ItemChoice[0]) ||
                (getComputerChoice == ItemChoice[2] && getHumanChoice == ItemChoice[1])
        ){
            // ComputerScore++;
            console.log("You lose! Try again.")
            result = "You lose! Try again."
        }
        else if (getComputerChoice == getHumanChoice) {
            result = "Tie" 
        }
        else {
            //HumanScore++;
            console.log(`DEBUG: ${getComputerChoice} ${getHumanChoice}`)
            console.log("You win!")
            result = "You win"
        }
    }
    return result
}

let RockPaperScissorGame = (ComputerScore, HumanScore) => {
    let getComputerChoice = ComputerChoice()
    let getHumanChoice = HumanChoice()

    console.log(`Computer: ${getComputerChoice} --- Human: ${getHumanChoice}`)
    console.log(`Current score:\nComputer: ${ComputerScore}\nHuman: ${HumanScore}`)
}

let PlayGame = (Round) => {
    let ComputerScore = 0
    let HumanScore = 0
    for (let i = 0; i < Round; i++){
        console.log(`Round ${i+1}`)
        RockPaperScissorGame(ComputerScore, HumanScore)
    }

    if(ComputerScore < HumanScore) {
        console.log("You win the game!")
    }
    else {
        console.log("You lose the game :(rock")
    }
}

const humanItem = document.querySelector(".human-item")
humanItem.textContent = HumanChoice()

const compItem = document.querySelector(".comp-item")
compItem.textContent = ComputerChoice()

const gameResult = document.querySelector("#result")
gameResult.textContent = gameLogicResult(humanItem.textContent, 
                                            compItem.textContent)

// PlayGame(2)
