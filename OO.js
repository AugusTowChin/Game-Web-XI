function PlayGame() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    computerInput = Math.floor((Math.random() * 100) % 3)
    console.log(computerInput)

    if (userInput == computerInput) {
        console.log("Draw")
    } else if (userInput == 0 && computerInput == 2) {
        // User Rock
        // Com Scisssor
        console.log("User Wins")
    } else if (userInput == 1 && computerInput == 0) {
        // User Paper
        // Com Rock
        console.log("User Wins")
    } else if (userInput == 2 && computerInput == 1) {
        // User Scissor
        // Com Paper
        console.log("User Wins")
    } else {
        console.log("Computer Wins")
    
    }
    
    QQ = document.getElementById("result");
    QQ.innerText = "You: " + userInput + " Ai: " + computerInput;
    if (userInput == computerInput) {
        QQ.innerText += " Result: Draw";
    } else if ((userInput == 0 && computerInput == 2) || (userInput == 1 && computerInput == 0) || (userInput == 2 && computerInput == 1)) {
        QQ.innerText += " Result: You Wins";
    } else {
        QQ.innerText += " Result: Ai Wins";
    }

}
