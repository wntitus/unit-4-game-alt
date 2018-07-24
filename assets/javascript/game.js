$(document).ready( function(){




var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random() * 120) + 19;

console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour);
console.log(targetScore);

$("#userNum").html("YOUR NUMBER TO REACH IS " + targetScore)

});