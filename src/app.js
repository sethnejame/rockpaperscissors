let randomThrowButton = document.getElementById("random-throw")
let rockThrowButton = document.getElementById("rock-throw")
let paperThrowButton = document.getElementById("paper-throw")
let scissorsThrowButton = document.getElementById("scissors-throw")
let rpsArr = ['Rock!', 'Paper!', 'Scissors!']

randomThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + throwRandomizer)

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("Computer threw " + throwRandomizer)

})

rockThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[0])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("Computer threw " + throwRandomizer)

    let wins = document.getElementById("show-winner")

    wins.innerHTML = (winner(rpsArr[0], throwRandomizer))

})

paperThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[1])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("Computer threw " + throwRandomizer)

    let wins = document.getElementById("show-winner")

    wins.innerHTML = (winner(rpsArr[1], throwRandomizer))

}) 

scissorsThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[2])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("Computer threw " + throwRandomizer)

    let wins = document.getElementById("show-winner")

    wins.innerHTML = (winner(rpsArr[2], throwRandomizer))

}) 

const winner = (userThrow, compThrow) => {
    if (userThrow == 'Rock!' && compThrow == 'Rock!') {
        return "It's a tie!"
    } else if (userThrow == 'Rock!' && compThrow == 'Paper!') {
        return "Computer wins!"
    } else if (userThrow == 'Rock!' && compThrow == 'Scissors!') {
        return "Player wins!"
    } else if (userThrow == 'Paper!' && compThrow == 'Rock!') {
        return "Player wins!"
    } else if (userThrow == 'Paper!' && compThrow == 'Paper!') {
        return "It's a tie!"
    }  else if (userThrow == 'Paper!' && compThrow == 'Scissors!') {
        return "Computer wins!"
    } else if (userThrow == 'Scissors!' && compThrow == 'Rock!') {
        return "Computer wins!"
    } else if (userThrow == 'Scissors!' && compThrow == 'Paper!') {
        return "Player wins!"
    } else if (userThrow == 'Scissors!' && compThrow == 'Scissors!') {
        return "It's a tie!"
    } 
}