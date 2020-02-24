 var wins = 0
 var losses = 0
 var scoringTotal = 0 
 
var compGuess= 19 + Math.floor(Math.random()  * 102);
$("#resultCard").append(compGuess);



$("#crystalBtn1").val(1 + Math.floor(Math.random()  * 12));
$("#crystalBtn2").val(1 + Math.floor(Math.random()  * 12));
$("#crystalBtn3").val(1 + Math.floor(Math.random()  * 12));
$("#crystalBtn4").val(1 + Math.floor(Math.random()  * 12));

$("#crystalBtn1 , #crystalBtn2 , #crystalBtn3 , #crystalBtn4").on("click" , function(){

   scoringTotal += parseInt($(this).val());
    $("#scoringCard").html(scoringTotal);

      });