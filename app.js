
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

var Player1Choice

var tempArray = ["r","p","s"]

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
            database.ref().update({
                RunLogic: true,
            })
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



// when data changes console run this
database.ref().on("value", function(snapshot) {

    console.log(snapshot.val())

    // if the game logic value is true run game logic then reset runlogic value
    if (snapshot.child("RunLogic").val()){

        Player1Choice = snapshot.child("Player1Choice").val()
        // Player2Choice = snapshot.child("Player2Choice").val()

        Player2Choice = tempArray[Math.floor(Math.random() * tempArray.length)]

        // 1 double default
        // 1 tie
        // 2 single defaults
        // 3 player 1 victories
        // 3 player 2 victories
        if(Player1Choice==="a"&&Player2Choice==="a"){
            console.log("both defaulted")
        } else if(Player1Choice===Player2Choice){
            console.log("tie")
        } else if(Player1Choice==="a"){
            console.log("Player1 defaulted")
        } else if(Player2Choice==="a"){
            console.log("Player2 defaulted")
        } else if(Player1Choice==="r"&&Player2Choice==="s"){
            console.log("Player1 Won")
        } else if(Player1Choice==="s"&&Player2Choice==="p"){
            console.log("Player1 Won")
        } else if(Player1Choice==="p"&&Player2Choice==="r"){
            console.log("Player1 Won")
        } else if(Player2Choice==="r"&&Player1Choice==="s"){
            console.log("Player2 Won")
        } else if(Player2Choice==="s"&&Player1Choice==="p"){
            console.log("Player2 Won")
        } else if(Player2Choice==="p"&&Player1Choice==="r"){
            console.log("Player2 Won")
        } else {
            console.log("somethings wrong")
        }

        database.ref().update({
            RunLogic: false,
            Player1Choice: "a",
            Player2Choice: "a",
            
        })

    }

    // if snapshot.child("player1") && player 2 start game cycle
    if (snapshot.child("Player1").val() && snapshot.child("Player2").val()){
        if(snapshot.child("GameStart").val()){
            return false
        }
        database.ref().update({
            GameStart: true,
        })
        runBreak()
    }

})

// when the document is fully loaded
$(document).ready(function() {

    // player1/2 select button
    $("#select-player1").on("click",function(){
        $("#jumbo-2").text("You are player1")
        $("#current-player").text("1")
        database.ref().update({
            Player1: true,
        })
    })
    $("#select-player2").on("click",function(){
        $("#jumbo-3").text("You are player2")
        $("#current-player").text("2")
        database.ref().update({
            Player2: true,
        })
    })

    // rockpaper scissors buttons
    $(".game-logic").on("click",function(){
        // if the duel phase is running
        if(!duelPhase){
            return false;
        }
        $("#jumbo-3").text("You chose ("+$(this).val()+")")

        database.ref().update({
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
            GameStart: false,
            Player1: false,
            Player1Choice: "a",
            Player1Wins: 0,
            Player2: false,
            Player2Choice: "a",
            Player2Wins: 0,
            RunLogic: false,
            Ties: 0,
        })
    })
});

// reset on startup
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
})
