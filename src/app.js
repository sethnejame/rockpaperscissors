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

    compThrowDiv.innerHTML = ("The Computer threw " + throwRandomizer)

})

rockThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[0])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("The Computer threw " + throwRandomizer)

})

paperThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[1])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("The Computer threw " + throwRandomizer)

}) 

scissorsThrowButton.addEventListener("click", () => {

    let throwRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]

    let showThrowDiv = document.getElementById("user-result")

    showThrowDiv.innerHTML = ("You threw " + rpsArr[2])

    let compThrowDiv = document.getElementById("comp-result")

    compThrowDiv.innerHTML = ("The Computer threw " + throwRandomizer)

}) 