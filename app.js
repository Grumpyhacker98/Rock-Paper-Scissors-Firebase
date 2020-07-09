// firebase link and startup
// =================================================================
var firebaseConfig = {
    apiKey: "AIzaSyDYnDKzW-ChshbiyqIdVpLgJT7fxeDZm3M",
    authDomain: "rockpaperscissors-4e54e.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-4e54e.firebaseio.com",
    projectId: "rockpaperscissors-4e54e",
    storageBucket: "rockpaperscissors-4e54e.appspot.com",
    messagingSenderId: "626265293266",
    appId: "1:626265293266:web:1e65341efe25dc6af1880b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


var localData = {}
var localPlayer
var duelPhase = false

// timer functions
// ================================================
var intervalId

// duel function
function standOff() {
    duelPhase = true

    database.ref().update({
        Jumbo2: "Duel Phase",
        Jumbo3: "Chose your weapon!"
    })

    console.log("tick")
    // begin the intermission function
    clearInterval(intervalId);
    intervalId = setInterval(breakTime, 3000);
}

// intermission function
function breakTime() {
    duelPhase = false

    // run game logic immediatly after intermission starts
    if (localPlayer === 1) {
        gameLogic()
    }

    console.log("tick")
    // begin the duel phase
    clearInterval(intervalId);
    intervalId = setInterval(standOff, 3000);
}

// player interactions
// =====================================================================
$(document).ready(function () {

    // players click a player id and it locks them in
    $("#player-1").on("click", function () {
        if (localData.Player1 || localData.GameStart || localPlayer) { return false }
        $("#jumbo-1").text("You are Player 1")

        localPlayer = 1
        database.ref().update({
            Player1: true,
            Jumbo2: "Player 1 locked in"
        })
    })

    // players click a player id and it locks them in
    $("#player-2").on("click", function () {
        if (localData.Player2 || localData.GameStart || localPlayer) { return false }
        $("#jumbo-1").text("You are Player 2")

        localPlayer = 2
        database.ref().update({
            Player2: true,
            Jumbo3: "Player 2 locked in"
        })
    })

    // during duel phase records player choice
    $(".game-logic").on("click", function () {
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

        if (localPlayer === 1) {
            database.ref().update({
                Player1Choice: $(this).val(),
            })
        } else {
            database.ref().update({
                Player2Choice: $(this).val(),
            })
        }
    })

    // reset button
    $("#reset").on("click", function () {
        clearInterval(intervalId);

        $("#jumbo-1").text("Select a player and lock in!")
        localPlayer = false

        // reset ALL the firebase variables
        database.ref().update({
            GameStart: false,
            Player1: false,
            Player1Choice: "a",
            Player1Wins: 0,
            Player2: false,
            Player2Choice: "a",
            Player2Wins: 0,
            RunLogic: false,
            Ties: 0,
            Jumbo2: "Waiting for player 1",
            Jumbo3: "Waiting for player 2"
        })
    })

})

// on database refresh
// ==============================================================================================
database.ref().on("value", function (snapshot) {
    //  make / refresh a local object with all the values
    localData = snapshot.val()
    console.log(localData)

    // start game if both the players are locked in
    if (localData.Player1 && localData.Player2 && !localData.GameStart) {
        // start timer + gamelogic for player 1
        if (localPlayer === 1) {
            standOff()
        }
        // set startgame true to prevent recurrence
        database.ref().update({
            GameStart: true,
        })
    }

    if (localData.GameStart && localPlayer !== false) {
        $("#jumbo-1").text("Select a player and lock in!")
    }

    if(localData.GameStart === false){
        clearInterval(intervalId)
    }

    // update status display
    $("#player1win").text(localData.Player1Wins)
    $("#player2win").text(localData.Player2Wins)
    $("#ties").text(localData.Ties)
    $("#jumbo-2").text(localData.Jumbo2)
    $("#jumbo-3").text(localData.Jumbo3)
})

// game logic function 
// ================================================================================
function gameLogic() {

    var player1win = localData.Player1Wins
    var player2win = localData.Player2Wins
    var tie = localData.Ties

    Player1Choice = localData.Player1Choice
    Player2Choice = localData.Player2Choice
    var newJumbo3

    // 1 double default
    // 1 tie
    // 2 single defaults
    // 3 player 1 victories
    // 3 player 2 victories
    if (Player1Choice === "a" && Player2Choice === "a") {
        tie++
        newJumbo3 = "Both Players defaulted"
    } else if (Player1Choice === Player2Choice) {
        tie++
        newJumbo3 = "Tie"
    } else if (Player1Choice === "a") {
        player2win++
        newJumbo3 = "Player 1 defaulted"
    } else if (Player2Choice === "a") {
        player1win++
        newJumbo3 = "Player 2 defaulted"
    } else if (Player1Choice === "r" && Player2Choice === "s") {
        player1win++
        newJumbo3 = "Player 1 won with rock"
    } else if (Player1Choice === "s" && Player2Choice === "p") {
        player1win++
        newJumbo3 = "Player 1 won with scissors"
    } else if (Player1Choice === "p" && Player2Choice === "r") {
        player1win++
        newJumbo3 = "Player 1 wins with paper"
    } else if (Player2Choice === "r" && Player1Choice === "s") {
        player2win++
        newJumbo3 = "Player 2 wins with rock"
    } else if (Player2Choice === "s" && Player1Choice === "p") {
        player2win++
        newJumbo3 = "Player 2 wins with scissors"
    } else if (Player2Choice === "p" && Player1Choice === "r") {
        player2win++
        newJumbo3 = "Player 2 wins with paper"
    } else {
        console.log("game logic error")
    }

    // reset database+game if it starts playing on auto
    if (localData.Ties === 2) {
        clearInterval(intervalId)
        if (localPlayer === 1) {
            clearInterval(intervalId)

            database.ref().update({
                GameStart: false,
                Player1: false,
                Player1Choice: "a",
                Player1Wins: 0,
                Player2: false,
                Player2Choice: "a",
                Player2Wins: 0,
                RunLogic: false,
                Ties: 0,
                Jumbo2: "Waiting for player 1",
                Jumbo3: "Waiting for player 2"
            })
        }
        $("#jumbo-1").text("Select a player and lock in!")
        localPlayer = false

    // reset the jumbo and stats for both parties
    } else {
        database.ref().update({
            Player1Wins: player1win,
            Player2Wins: player2win,
            Ties: tie,
            Jumbo2: "Intermission",
            Jumbo3: newJumbo3,
            Player1Choice: "a",
            Player2Choice: "a"
        })
    }
}