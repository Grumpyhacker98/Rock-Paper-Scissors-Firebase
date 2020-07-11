
// timer variables
var startTime = 6;
var timer = startTime
var duelPhase = false;
var intervalId;

var gameStart = false

var score = 0

var playerChoice = "a"
var tempArray = ["r", "p", "s"]

// begin the duel phase function
function runDuel() {
    clearInterval(intervalId);
    intervalId = setInterval(standOff, 1000);
}

// begin the intermission function
function runBreak() {
    clearInterval(intervalId);
    intervalId = setInterval(breakTime, 1000);
}

// duel function
function standOff() {
    timer--;
    $("#jumbo-1").append(timer + ", ")

    // find victor with logic function and prep intermission phase
    if (timer === 0) {
        timer = startTime
        duelPhase = false
        $("#jumbo-1").text("Intermission: ")
        gameLogic()
        runBreak()
    }
}

// intermission function
function breakTime() {
    timer--;
    $("#jumbo-1").append(timer + ", ")

    // begin duel phase
    if (timer === 0) {
        timer = startTime
        duelPhase = true
        $("#jumbo-1").text("Duel Phase: ")
        $("#jumbo-2").text("Chose your weapon!")
        runDuel()
    }
}

// game logic
function gameLogic() {
    botChoice = tempArray[Math.floor(Math.random() * tempArray.length)]
    console.log(playerChoice + " " + botChoice)

    // 1 default
    // 1 tie
    // 3 player 1 victories
    // 3 player 2 victories
    if (playerChoice === "a") {
        console.log("defaulted")
        score--
        $("#jumbo-2").text("defaulted")
    } else if (playerChoice === botChoice) {
        console.log("Tie")
        $("#jumbo-2").text("You tied")
    } else if (playerChoice === "r" && botChoice === "s") {
        console.log("Player1 Won")
        score++
        $("#jumbo-2").text("Player 1 won with rock")
    } else if (playerChoice === "s" && botChoice === "p") {
        console.log("Player1 Won")
        score++
        $("#jumbo-2").text("Player 1 won with scissors")
    } else if (playerChoice === "p" && botChoice === "r") {
        console.log("Player1 Won")
        score++
        $("#jumbo-2").text("Player 1 wins with paper")
    } else if (botChoice === "r" && playerChoice === "s") {
        console.log("The Bot Won")
        score--
        $("#jumbo-2").text("The Bot Won with rock")
    } else if (botChoice === "s" && playerChoice === "p") {
        console.log("The Bot Won")
        score--
        $("#jumbo-2").text("The Bot Won with scissors")
    } else if (botChoice === "p" && playerChoice === "r") {
        console.log("The Bot Won")
        score--
        $("#jumbo-2").text("The Bot Won with paper")
    } else {
        console.log("somethings wrong")
    }

    playerChoice = "a"
    $("#score").text(score)
}

// when the document is fully loaded
$(document).ready(function () {

    // start game
    $("#start").on("click", function () {
        if (gameStart) return false
        gameStart = true
        $("#jumbo-1").text("Duel Phase: ")
        $("#jumbo-2").text("Chose your weapon!")
        runDuel()
    })

    // rockpaper scissors buttons
    $(".game-logic").on("click", function () {
        // if the duel phase is running
        if (!duelPhase) { return false; }
        let choice
        switch ($(this).val()) {
            case "r":
                choice = "rock"
                break;
            case "p":
                choice = "paper"
                break;
            case "s":
                choice = "scissors"
                break;
        }
        $("#jumbo-2").text("You chose " + choice)
        playerChoice = $(this).val()
        console.log(playerChoice)
    })

    // reset button
    $("#reset").on("click", function () {
        clearInterval(intervalId);
        stop()
        gameStart = false
        score = 0
        $("#score").text(score)
        $("#jumbo-1").text("Press start to begin!")
        $("#jumbo-2").text("Beware the timer!")
    })
});
