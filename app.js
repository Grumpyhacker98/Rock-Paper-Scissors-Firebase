
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

var startTime = 6;
var timer = startTime
var intervalId;

// gamelogic function
// once duel phase countdown is over 
// it takes what option is locked in through if statements

// game status display function
// reset game function
function resetGame(){
    stop()
    $("#jumbo-1").text("Select a player and lock in!")
    $("#jumbo-2").text("Waiting for player 1")
    $("#jumbo-3").text("Waiting for player 2")
}

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
            $("#jumbo-1").text("Intermission: ")
            $("#jumbo-2").text("Rest now Champion")
            $("#jumbo-3").text("")
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
            $("#jumbo-1").text("Duel Phase: ")
            $("#jumbo-2").text("Chose your weapon!")
            $("#jumbo-3").text("")
            runDuel()
        }
}

//  The stop function
function stop() {
    clearInterval(intervalId);
}

database.ref().on("value", function(snapshot) {
console.log(snapshot.val())
  
});

// when the document is fully loaded
$(document).ready(function() {

    // player1/2 select button
    // if locked in return false
    // make this computer sent database that player info

    // lock in button
    // lock in variable true
    // run duel phase

    // reset button
    // stop timers and reset all variables and html to intro html

    // rockpaper scissors buttons
    // if intermission return false
    // if duel make player choice this variable and display on html
    
});




$(".game-logic").on("click",function(){
    console.log($(this).val())
})

$("#reset").on("click",resetGame)

runBreak()


//     // firebase scrapcode

//             // on value refresh values from firebase
//             database.ref().on("child_added", function(childSnapshot) {

//                 data = childSnapshot.val().newEmployee

//                 database.ref().push({
//                     newEmployee
//                 })

//             })


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

        