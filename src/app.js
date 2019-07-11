let randomThrowButton = document.getElementById("random-throw")
let rockThrowButton = document.getElementById("rock-throw")
let paperThrowButton = document.getElementById("paper-throw")
let scissorsThrowButton = document.getElementById("scissors-throw")
let rpsArr = ['Rock!', 'Paper!', 'Scissors!']

randomThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("comp-result")

    showThrowDiv.innerHTML = (throwRandomizer)

})

rockThrowButton.addEventListener("click", () => {

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = (rpsArr[0])

})

paperThrowButton.addEventListener("click", () => {

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = (rpsArr[1])

}) 

scissorsThrowButton.addEventListener("click", () => {

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = (rpsArr[2])

}) 