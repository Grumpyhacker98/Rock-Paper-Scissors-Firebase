
// gamelogic function
// once duel phase countdown is over 
// it takes what option is locked in through if statements

// game status display function
// reset game function

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

// duel phase
// set timer 5 seconds + append second countdown
// on end run game logic

// intermission phase
// set 5 sec timer + append countdown
// on end run duel

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




$(".button").on("click",function(){
    console.log($(this).val())
})


//     // firebase scrapcode
//             // wrong link rn
//             var config = {
//                 apiKey: "AIzaSyD-AV2aTE2P4bKpZOuqcnyinFrZdtX7mbI",
//                 authDomain: "followalong-5844d.firebaseapp.com",
//                 databaseURL: "https://followalong-5844d.firebaseio.com",
//                 projectId: "followalong-5844d",
//                 storageBucket: "followalong-5844d.appspot.com",
//                 messagingSenderId: "879265537909",
//                 appId: "1:879265537909:web:ef7dbdb47009f2db53bd3c",
//                 measurementId: "G-XDQ504P4MV"
//             };

//             firebase.initializeApp(config);
            
//             var database = firebase.database();

//             // on value refresh values from firebase
//             database.ref().on("child_added", function(childSnapshot) {

//                 data = childSnapshot.val().newEmployee

//                 employment = Math.floor(moment().diff(moment(data[2]), 'months', true))


//             });

//             // enters new employee data into firebase
//             $("#Submit-Data").on("click", function(event){
//                 event.preventDefault()

//                 newEmployee = []

//                 name = $("#New-Name").val()
//                 role = $("#New-Role").val()
//                 date = $("#New-Date").val()
//                 rate = $("#New-Rate").val()

//                 newEmployee.push(name)
//                 newEmployee.push(role)
//                 newEmployee.push(date)
//                 newEmployee.push(rate)

//                 database.ref().push({
//                     newEmployee
//                 })

//                 $("#New-Name").val("")
//                 $("#New-Role").val("")
//                 $("#New-Date").val("")
//                 $("#New-Rate").val("")

//             })


// // rockpaperscissors scrapcode
//         var choices = ["r", "p", "s"]
//         var robotVictory = 0;
//         var standOff = 0;
//         var humanVictory = 0;

//         function updateHTML(gameStatus){
//             $("#humanVictory").text(humanVictory)
//             $("#robotVictory").text(robotVictory)
//             $("#standOff").text(standOff)
//             $("#gameStatus").text(gameStatus)
//         }

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
            
//             updateHTML(gameStatus)

//         };

//         updateHTML()

