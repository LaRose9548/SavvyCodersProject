// Variable Initializations
let wins = 0;
let losses = 0;
let ties = 0;

// Creating Computer Selection
const compSelection = () => {
    return Math.floor(Math.random() * 3); // 0, 1, 2
}

// 1 round of Rock-Paper-Scissors
const gameRound = (userSelection) => {
  let handsStrs = ['Rock', 'Paper', 'Scissors'];
  let compIndex = compSelection ();
  let result = document.querySelector('#rpsResult');
  let sum = document.querySelector('#rpsSums');

  // Rock beat Scissors ( 0 vs 2)
  // Scissors beat Paper (2 vs 1)
  // Paper beat Rock (1 vs 0)
  switch (userSelection) {
    case "Rock":
      if (compIndex === 2) { // Scissors
        user = "Winner!";
        wins ++;
      }
      else if (compIndex === 0) { // Rock
        user = "Boring Tie!";
        ties ++;
      }
      else { // Paper
        user = "Looser!";
        losses ++;
      }
      break;
    case "Paper":
      if (compIndex === 0) { // Rock
        user = "Winner!";
        wins ++;
      }
      else if (compIndex === 1) { // Paper
        user = "Boring Tie!";
        ties ++;
      }
      else { // Scissors
        user = "Looser!";
        losses ++;
      }
      break;
    case "Scissors":
      if (compIndex === 1) { // Paper
        user = "Winner!";
        wins ++;
      }
      else if (compIndex === 2) { // Scissors
        user = "Boring Tie!";
        ties ++;
      }
      else {  // Rock
        user = "Looser!";
        losses ++;
      }
      break;
    default: console.log("ERROR: No button selected.");
  }

  rpsResult.innerHTML = "<h1><span class='highlight'>" + user +
  "</span></h1>Computer chose " + handsStrs[compIndex] +
  ".  You chose " + userSelection + ".";
  rpsSums.innerHTML = "<pre class='highlight'>Wins: " + wins +
  "     Losses: " + losses + "     Ties: " + ties + "</pre>";
}

// Clicking a button starts it all off :D
$( "#rockButton" ).on( "click", function ( event ) {
  gameRound ("Rock");
});
$( "#paperButton" ).on( "click", function ( event ) {
  gameRound ("Paper");
});
$( "#scissorsButton" ).on( "click", function ( event ) {
  gameRound ("Scissors");
});
