const result = document.querySelector('.result')
const humanScore = document.querySelector('#scoreYou')
const machineScore = document.querySelector('#scoreMachine')


let numberScoreHuman = 0
let numberScoreMachine = 0



const playHuman = (humanchoice) => {
    playGame(humanchoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}



const playGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu Empate 😬"

    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        numberScoreHuman++
        humanScore.innerHTML = numberScoreHuman
        result.innerHTML = "Você Ganhou 🤩"

    } else {
        numberScoreMachine++
        machineScore.innerHTML = numberScoreMachine
        result.innerHTML = "Máquina Ganhou 🤖"

    }


}