// // firebase link and startup
// var firebaseConfig = {
//     apiKey: "AIzaSyDYnDKzW-ChshbiyqIdVpLgJT7fxeDZm3M",
//     authDomain: "rockpaperscissors-4e54e.firebaseapp.com",
//     databaseURL: "https://rockpaperscissors-4e54e.firebaseio.com",
//     projectId: "rockpaperscissors-4e54e",
//     storageBucket: "rockpaperscissors-4e54e.appspot.com",
//     messagingSenderId: "626265293266",
//     appId: "1:626265293266:web:1e65341efe25dc6af1880b"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

// // timer variables
// var startTime = 6;
// var timer = startTime
// var duelPhase = false;
// var intervalId;

// var playerSelected
// var player1Select
// var player2Select

// var tempArray = ["r", "p", "s"]

// // begin the duel phase function
// function runDuel() {
//     clearInterval(intervalId);
//     intervalId = setInterval(standOff, 1000);
// }

// // begin the intermission function
// function runBreak() {
//     clearInterval(intervalId);
//     intervalId = setInterval(breakTime, 1000);
// }

// // duel function
// function standOff() {
//     timer--;
//     $("#jumbo-1").append(timer + ", ")

//     // find victor with logic function and prep intermission phase
//     if (timer === 0) {
//         timer = startTime
//         duelPhase = false
//         $("#jumbo-1").text("Intermission: ")
//         $("#jumbo-2").text("Ready yourself!")
//         $("#jumbo-3").text("")
//         database.ref().update({
//             RunLogic: true,
//         })
//         runBreak()
//     }
// }

// // intermission function
// function breakTime() {
//     timer--;
//     $("#jumbo-1").append(timer + ", ")

//     // begin duel phase
//     if (timer === 0) {
//         timer = startTime
//         duelPhase = true
//         $("#jumbo-1").text("Duel Phase: ")
//         $("#jumbo-2").text("Chose your weapon!")
//         $("#jumbo-3").text("")
//         runDuel()
//     }
// }


// // when data changes this will run
// database.ref().on("value", function (snapshot) {
//     console.log(snapshot.val())
//     // if the game logic value is true run game logic then reset runlogic value
//     if (snapshot.child("RunLogic").val()) {

//         Player1Choice = snapshot.child("Player1Choice").val()
//         // Player2Choice = snapshot.child("Player2Choice").val()

//         Player2Choice = tempArray[Math.floor(Math.random() * tempArray.length)]


//         // 1 double default
//         // 1 tie
//         // 2 single defaults
//         // 3 player 1 victories
//         // 3 player 2 victories
//         if (Player1Choice === "a" && Player2Choice === "a") {
//             console.log("both defaulted")
//             $("#ties").text(snapshot.child("Ties").val())
//             $("#jumbo-3").text("Both Players defaulted")
//         } else if (Player1Choice === Player2Choice) {
//             console.log("tie")
//             $("#ties").text(snapshot.child("Ties").val())
//             $("#jumbo-3").text("Tie")
//         } else if (Player1Choice === "a") {
//             console.log("Player1 defaulted")
//             $("#player2wins").text(snapshot.child("Player2Wins").val())
//             $("#jumbo-3").text("Player 1 defaulted")
//         } else if (Player2Choice === "a") {
//             console.log("Player2 defaulted")
//             $("#player1wins").text(snapshot.child("Player1Wins").val())
//             $("#jumbo-3").text("Player 2 defaulted")
//         } else if (Player1Choice === "r" && Player2Choice === "s") {
//             console.log("Player1 Won")
//             $("#player1wins").text(snapshot.child("Player1Wins").val())
//             $("#jumbo-3").text("Player 1 won with rock")
//         } else if (Player1Choice === "s" && Player2Choice === "p") {
//             console.log("Player1 Won")
//             $("#player1wins").text(snapshot.child("Player1Wins").val())
//             $("#jumbo-3").text("Player 1 won with scissors")
//         } else if (Player1Choice === "p" && Player2Choice === "r") {
//             console.log("Player1 Won")
//             $("#player1wins").text(snapshot.child("Player1Wins").val())
//             $("#jumbo-3").text("Player 1 wins with paper")
//         } else if (Player2Choice === "r" && Player1Choice === "s") {
//             console.log("Player2 Won")
//             $("#player2wins").text(snapshot.child("Player2Wins").val())
//             $("#jumbo-3").text("Player 2 wins with rock")
//         } else if (Player2Choice === "s" && Player1Choice === "p") {
//             console.log("Player2 Won")
//             $("#player2wins").text(snapshot.child("Player2Wins").val())
//             $("#jumbo-3").text("Player 2 wins with scissors")
//         } else if (Player2Choice === "p" && Player1Choice === "r") {
//             console.log("Player2 Won")
//             $("#player2wins").text(snapshot.child("Player2Wins").val())
//             $("#jumbo-3").text("Player 2 wins with paper")
//         } else {
//             console.log("somethings wrong")
//         }

//         // without runlogic data updates wont run the gamelogic
//         // reset to a so players can default for AFK
//         database.ref().update({
//             RunLogic: false,
//             Player1Choice: "a",
//             Player2Choice: "a",
//         })
//     }

//     // game start variable allows for this to only run once once both players check in
//     // if snapshot.child("player1") && player 2 start game cycle
//     if (!snapshot.child("GameStart").val()) {
//         if (snapshot.child("Player1").val() && snapshot.child("Player2").val()) {
//             runBreak()
//             database.ref().update({
//                 GameStart: true,
//             })
//         }
//     }
// })

// // when the document is fully loaded
// $(document).ready(function () {

//     // player1/2 select button
//     $("#select-player1").on("click", function () {
//         // if(playerSelected){
//         //     return false
//         // }
//         $("#jumbo-2").text("You are player1")
//         $("#current-player").text("1")
//         database.ref().update({
//             Player1: true,
//         })
//         // playerSelected = true
//         // player1Select = true
//     })
//     $("#select-player2").on("click", function () {
//         // if(playerSelected){
//         //     return false
//         // }
//         $("#jumbo-3").text("You are player2")
//         $("#current-player").text("2")
//         database.ref().update({
//             Player2: true,
//         })
//         // playerSelected = true
//         // player2Select = true
//     })

//     // rockpaper scissors buttons
//     $(".game-logic").on("click", function () {
//         // if the duel phase is running
//         if (!duelPhase) {
//             return false;
//         }
//         $("#jumbo-3").text("You chose (" + $(this).val() + ")")

//         database.ref().update({
//             Player1Choice: $(this).val(),
//         })

//         // if(player1Select){
//         //     database.ref().update({
//         //         Player1Choice: $(this).val(),
//         //     })
//         // } else {
//         //     database.ref().update({
//         //         Player2Choice: $(this).val(),
//         //     })
//         // }
//     })

// // reset button
// $("#reset").on("click", function () {
//     clearInterval(intervalId);
//     stop()
//     $("#jumbo-1").text("Select a player and lock in!")
//     $("#jumbo-2").text("Waiting for player 1")
//     $("#jumbo-3").text("Waiting for player 2")

//     // reset ALL the firebase variables
//     database.ref().update({
//         GameStart: false,
//         Player1: false,
//         Player1Choice: "a",
//         Player1Wins: 0,
//         Player2: false,
//         Player2Choice: "a",
//         Player2Wins: 0,
//         RunLogic: false,
//         Ties: 0,
//     })
// })
// });

// // reset on startup
// database.ref().update({
//     GameStart: false,
//     Player1: false,
//     Player1Choice: "a",
//     Player1Wins: 0,
//     Player2: false,
//     Player2Choice: "a",
//     Player2Wins: 0,
//     RunLogic: false,
//     Ties: 0,
// })

// =========================================================================================================
// new code

// the timer and logic is only used with player 1, player 2 recieves messages using firebase

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

    // begin the intermission function
    clearInterval(intervalId);
    intervalId = setInterval(breakTime, 5000);
}

// intermission function
function breakTime() {
    duelPhase = false

    // run game logic immediatly after intermission starts
    if (localPlayer === 1) {
        gameLogic()
    }

    // begin the duel phase
    clearInterval(intervalId);
    intervalId = setInterval(standOff, 5000);
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

    // reset database+game if it starts playing on auto
    if (localData.Ties === 20) {
        clearInterval(intervalId);
        $("#jumbo-1").text("Select a player and lock in!")
        localPlayer = false
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

    // start game if both the players are locked in and set startgame true to prevent recurrence
    if (localData.Player1 && localData.Player2 && !localData.GameStart) {

        if (localPlayer === 1) {
            standOff()
        }

        database.ref().update({
            GameStart: true,
        })
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
        console.log("somethings wrong")
    }

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