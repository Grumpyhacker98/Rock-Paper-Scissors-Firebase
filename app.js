// firebase link

// 2 player vars
// lock in var?

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

//         // when the document is fully loaded
//         $(document).ready(function() {

//             // keypresses will be collected
//             document.onkeydown = function(event){
//                 var userGuess= event.key.toLowerCase();

//                 // and filtered b4 approving game logic the 3 first statements should be combined
//                 if (userGuess === "s")  {
//                     gameLogic(userGuess)
//                 } else if (userGuess === "r"){
//                     gameLogic(userGuess)
//                 } else if (userGuess === "p"){
//                     gameLogic(userGuess)
//                 } else {
//                     console.log(userGuess+" wont work")
//                     gameStatus = userGuess+" is not a valid option";
//                     updateHTML(gameStatus)
//                 }
//             };

//             $("#rock").on("click", function(){
//                 userGuess = "r";
//                 gameLogic(userGuess);
//             });

//             $("#paper").on("click", function(){
//                 userGuess = "p";
//                 gameLogic(userGuess);
//             });

//             $("#scissors").on("click", function(){
//                 userGuess = "s";
//                 gameLogic(userGuess);
//             });

//         });
