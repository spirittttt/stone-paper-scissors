// var choices = document.querySelectorAll(".icon")
// var userscore = 0;
// var computerscore = 0;

// choices.forEach(function(choice){
//     choice.addEventListener("click",function(){
//         const userChoice = choice.getAttribute("id")
//         playgame(userChoice)
//     })
// })
// function generateComputerChoice() {
//     const options = ["stone" , "paper" , "scissors"]
//     const randomnumber = Math.floor(Math.random()*3)
//     return options[randomnumber]
// }

// function drawgame() {
//     console.log("Game was draw")
// }
// function showwinner(userwin) {
//     if(userwin) {
//         console.log("You win")
//     }
//     else {
//         console.log("You loose")
//     }
// }

// function playgame(userChoice) {
//     const computerChoice = generateComputerChoice()
//     console.log(userChoice)
//     console.log(computerChoice)
//     if(computerChoice == userChoice) {
//         drawgame()
//     }
//     else {
//         var userwin = true;
//         if(userChoice == "rock"){
//             userwin = computerChoice == "paper" ? false : true;
//         }
//         else if(userChoice == "paper") {
//             userwin = computerChoice == "scissors" ? false : true;
//         }
//         else if (userChoice == "scissors") {
//             userwin = computerChoice == "rock" ? false : true;
//         }
//         showwinner(userwin);

//     }
// }
var choices = document.querySelectorAll(".icon")
var winnerText = document.querySelector("#winner-txt")
var userimage = document.querySelector("#userimage")
var compimage = document.querySelector("#compimage")
var uscore = document.querySelector("#us")
var cscore = document.querySelector("#cs")
var backgroundmusic = new Audio("selection2.mp3")



var userscore = 0;
var computerscore = 0;


function generateComputerChoice() {
    const options = ["stone" , "paper" , "scissors"]
    const randomnumber = Math.floor(Math.random()*3)
    return options[randomnumber]
}

choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        const userChoice = choice.getAttribute("id")
        playgame(userChoice)
    })
})
function playgame(userChoice) {
    const computerChoice = generateComputerChoice()
    if(computerChoice == "stone") {
        compimage.src = "images/stone.png"
    }
    else if(computerChoice == "paper") {
        compimage.src = "images/paper.png"
    }
    else if(computerChoice == "scissors") {
        compimage.src = "images/scissors.png"
    }

    if(userChoice == "stone") {
        userimage.src = "images/stone.png"
    }
    else if(userChoice == "paper") {
        userimage.src = "images/paper.png"
    }
    else if(userChoice == "scissors") {
        userimage.src = "images/scissors.png"
    }

    



    if(userChoice == computerChoice) {
        checkdraw()
    }
    else {
        let userwin = true;
        if(userChoice == "paper") {
            userwin = computerChoice == "scissors" ? false: true;
        }
        else if(userChoice == "stone") {
            userwin = computerChoice == "paper" ? false : true;
        }
        else if(userChoice == "scissors") {
            userwin = computerChoice == "stone" ? false : true;
        }
        showwinner(userwin)
    }
}
function checkdraw() {
    winnerText.innerHTML = `Match Draw 😊`
}

function showwinner(userwin) {
    if(userwin) {
        winnerText.innerHTML = `Winner : User 🏆`
        userscore += 1;
        uscore.innerHTML = userscore
        if(userscore == 10) {
            alert("Congratulations You Won. 😊")
            userscore = 0;
            computerscore = 0;
        }
    }
    else {
        winnerText.innerHTML = `Winner : Computer 🏆`
        computerscore += 1;
        cscore.innerHTML = computerscore
        if(computerscore == 10) {
            alert("Computer Has Won. Get Ready For Next Match 😤")
            computerscore = 0;
            userscore = 0;
        }
    }
}
