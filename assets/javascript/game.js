
// setting variables

var wins = 0
var losses = 0
var scoringTotal = 0 
var compGuess = 0

// resets the game on win or loss or refresh
function resetGame(){
//  generates a random number between 19 and 120 
  compGuess = 19 + Math.floor(Math.random()  * 102);
//  injects the random number into the div
  $("#resultCard").html(compGuess);
// injects wins and losses into the divs
  $("#wins-text").text("wins: " + wins);
  $("#losses-text").text("losses: " + losses);
// sets scoringTotal to 0 and also resets crystalNum div 
  $("#crystalNum").html(scoringTotal = 0);
// generates random values for each button 
  $("#crystalBtn1").val(1 + Math.floor(Math.random()  * 12));
  $("#crystalBtn2").val(1 + Math.floor(Math.random()  * 12));
  $("#crystalBtn3").val(1 + Math.floor(Math.random()  * 12));
  $("#crystalBtn4").val(1 + Math.floor(Math.random()  * 12));

};
// on click function 
$("#crystalBtn1 , #crystalBtn2 , #crystalBtn3 , #crystalBtn4").on("click" , function(){
  // takes the button values and converts them into integers then adds to scoring total
  scoringTotal += parseInt($(this).val());
  $("#crystalNum").html(scoringTotal);
// determines win or loss
  if (scoringTotal > compGuess) {
    losses++;
    alert("You Lost!")
    resetGame();
  } else if (scoringTotal === compGuess) {
    wins++;
    alert("You Won!")
    resetGame();
  }

});
// calls reset function 
resetGame();