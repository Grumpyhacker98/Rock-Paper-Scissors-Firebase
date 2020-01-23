
// firebase link and startup
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

// timer variables
var startTime = 6;
var timer = startTime
var duelPhase = false;
var intervalId;

var baseFalse = false
var baseZero = 0
var baseA = "a"

var tempArray = ["r","p","s"]

// when both players are locked in
// duel phase 5 second countdown
    // duel phase: 5,  4,  3,  2,  1
    // select your weapon !
    // you chose ()
// grab their choices and run game logic
// intermission phase 5 seconds
    // intermission: 5, 4, 3, 2, 1
    // player? was beaten by player?
    // well done/better luck next time 
// run duel phase again

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
    $("#jumbo-1").append(timer+", ")

        // find victor with logic function and prep intermission phase
        if (timer === 0) {
            timer = startTime
            duelPhase = false
            $("#jumbo-1").text("Intermission: ")
            $("#jumbo-2").text("Ready yourself!")
            $("#jumbo-3").text("")
            gameLogic()
            runBreak()
        }
}

// intermission function
function breakTime() {
    timer--;
    $("#jumbo-1").append(timer+", ")

        // begin duel phase
        if (timer === 0) {
            timer = startTime
            duelPhase = true
            $("#jumbo-1").text("Duel Phase: ")
            $("#jumbo-2").text("Chose your weapon!")
            $("#jumbo-3").text("")
            runDuel()
        }
}

function gameLogic(){

    // player2choice = tempArray[Math.floor(Math.random() * Math.floor(tempArray))]
    // console.log(player2choice)

    // tie
    if (Player1Choice === Player2Choice){
        console.log("test")
    }

    // no participation loss
    if (Player1Choice === "a"){
        console.log("test")
    }
    if (Player2Choice === "a"){
        console.log("test")
    }

    // player1 victory
    if (Player1Choice === "r" && Player2Choice === "s"){
        console.log("test")
    }
    if (Player1Choice === "s" && Player2Choice === "p"){
        console.log("test")
    }
    if (Player1Choice === "p" && Player2Choice === "r"){
        console.log("test")
    }

    // player2 victory
    if (Player2Choice === "r" && Player1Choice === "s"){
        console.log("test")
    }
    if (Player2Choice === "s" && Player1Choice === "p"){
        console.log("test")
    }
    if (Player2Choice === "p" && Player1Choice === "r"){
        console.log("test")
    }

    


    // if "a" then they didnt press autolose unless both didnt press 
    // set to a after game
    database.ref().update({
        Player1Choice: "a",
        Player2Choice: "a",
    })

}

// grab data from firebase and make it local variables
function fireGrab(){
    database.ref().on("value", function(snapshot) {

        console.log(snapshot.val())

        // if snapshot.child("player1") && player 2 start game cycle
        if (snapshot.child("Player1").val() && snapshot.child("Player2").val()){
            runBreak()
        }
        
        Player1Choice = snapshot.child("Player1Choice").val()
        Player2Choice = snapshot.child("Player2Choice").val()

    })
}

// when the document is fully loaded
$(document).ready(function() {

    // player1/2 select button
    $("#select-player1").on("click",function(){
        $("#jumbo-2").text("You are player1")
        $("#current-player").text("1")
        database.ref().update({
            Player1: true,
        })
        fireGrab()
    })
    $("#select-player2").on("click",function(){
        $("#jumbo-3").text("You are player2")
        $("#current-player").text("2")
        database.ref().update({
            Player2: true,
        })
        fireGrab()
    })

    // rockpaper scissors buttons
    $(".game-logic").on("click",function(){
        // if the duel phase is running
        if(!duelPhase){
            return false;
        }
        $("#jumbo-3").text("You chose ("+$(this).val()+")")

        database.ref().set({
            Player1Choice: $(this).val(),
        })
    })
    
    // reset button
    $("#reset").on("click",function(){
        clearInterval(intervalId);
        stop()
        $("#jumbo-1").text("Select a player and lock in!")
        $("#jumbo-2").text("Waiting for player 1")
        $("#jumbo-3").text("Waiting for player 2")

        // reset ALL the firebase variables
        database.ref().update({
            Player1: false,
            Player1Choice: "a",
            Player1Wins: 0,
            Player2: false,
            Player2Choice: "a",
            Player2Wins: 0,
            Ties: 0,
        })
    })
    

});

database.ref().update({
    Player1: false,
    Player1Choice: "a",
    Player1Wins: 0,
    Player2: false,
    Player2Choice: "a",
    Player2Wins: 0,
    Ties: 0,
})

// // rockpaperscissors scrapcode
//         var choices = ["r", "p", "s"]
//         var robotVictory = 0;
//         var standOff = 0;
//         var humanVictory = 0;


//         function gameLogic(userGuess){

//             // generating the computers guess
//             var computer = choices[Math.floor(Math.random() * choices.length)]
            
//             // 3 victories
//             if (userGuess === "r" && computer === "s"){
//                 console.log("Player("+userGuess+") beat the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") beat the Computer("+computer+")";
//                 humanVictory++;
//             }
//             if (userGuess === "s" && computer === "p"){
//                 console.log("Player("+userGuess+") beat the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") beat the Computer("+computer+")";
//                 humanVictory++;
//             }
//             if (userGuess === "p" && computer === "r"){
//                 console.log("Player("+userGuess+") beat the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") beat the Computer("+computer+")";
//                 humanVictory++;
//             }

//             // 3 ties
//             if (userGuess === computer){
//                 console.log("tie")
//                 gameStatus = "Player("+userGuess+") tied with the Computer("+computer+")";
//                 standOff++;
//             }

//             // 3 defeates
//             if (userGuess === "s" && computer === "r"){
//                 console.log("Player("+userGuess+") was beaten by the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") was beaten by the Computer("+computer+")";
//                 robotVictory++;
//             }
//             if (userGuess === "p" && computer === "s"){
//                 console.log("Player("+userGuess+") was beaten by the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") was beaten by the Computer("+computer+")";
//                 robotVictory++;
//             }
//             if (userGuess === "r" && computer === "p"){
//                 console.log("Player("+userGuess+") was beaten by the Computer("+computer+")");
//                 gameStatus = "Player("+userGuess+") was beaten by the Computer("+computer+")";
//                 robotVictory++;
//             }

//         };


// timer scrapcode

        