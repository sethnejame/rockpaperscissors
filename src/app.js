console.log("It's Rock, Paper, Scissors time!");

let userThrowButton = document.getElementById("user-throw")

userThrowButton.addEventListener("click", () => {

    let rpsArr = ['Awe snap, son!  You threw Rock!', 'Everybody hit the deck!  You threw Paper!', 'Cover your eyes!  You threw Scissors!']
    console.log(rpsArr) 

    let userThrowRandomizer = rpsArr[Math.floor(Math.random()*rpsArr.length)]
    console.log(userThrowRandomizer)

    let showThrowDiv = document.getElementById("result")
    console.log(showThrowDiv)

    showThrowDiv.innerHTML = (userThrowRandomizer)


}) 