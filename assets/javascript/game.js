$(document).ready( function(){

// declaring our global variables to store random crystal values, wins, losses, the target, and the user's current score


var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * 120) + 19;
var userScore = 0;

//global function to reset all values to initial and refresh the text on the page

function resetGame() {
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    targetScore = Math.floor(Math.random() * 120) + 19;
    userScore = 0;
    $("#userNum").html("YOUR NUMBER TO REACH IS " + targetScore)    
    $("#userTarget").text("YOUR SCORE IS " + userScore);
    $("#winsLosses").html("You've won " + wins + " times and lost " + losses + " times.");
    
}

//global function to keep text updated after clicks and check if user has won or not

function updatePage() {
    $("#userTarget").text("YOUR SCORE IS " + userScore);
    if (userScore === targetScore) {
        alert("You've won! Time to play again!!");
        wins++;
        resetGame();
        $("#winsLosses").html("You've won " + wins + " times and lost " + losses + " times.");
        
    } else if (userScore > targetScore) {
        alert("You went over the target and lost! Time to play again!");
        losses++;
        resetGame();
        $("#winsLosses").html("You've won " + wins + " times and lost " + losses + " times.");
    }
}

resetGame();

//click events to take the random values of each crystal and add the value to the user's score with each click


$("#crystalBoxOne").on("click", function() {
    userScore = userScore + crystalOne;
    updatePage();
})

$("#crystalBoxTwo").on("click", function() {
    userScore = userScore + crystalTwo;
    updatePage();
})

$("#crystalBoxThree").on("click", function() {
    userScore = userScore + crystalThree;
    updatePage();
})

$("#crystalBoxFour").on("click", function () {
    userScore = userScore + crystalFour;
    updatePage();
})



});