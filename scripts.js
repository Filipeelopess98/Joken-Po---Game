const result = document.querySelector('.result')
const humanScore = document.querySelector('#scoreYou')
const machineScore = document.querySelector('#scoreMachine')


let numberScoreHuman = 0
let numberScoreMachine = 0


const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: "paper",
    SCISSORS: 'scissors',
}


const playHuman = (humanchoice) => {
    playGame(humanchoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}



const playGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu Empate 😬"

    } else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS || human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
        numberScoreHuman++
        humanScore.innerHTML = numberScoreHuman
        result.innerHTML = "Você Ganhou 😎"

    } else {
        numberScoreMachine++
        machineScore.innerHTML = numberScoreMachine
        result.innerHTML = "Máquina Ganhou 🤖"

    }


}