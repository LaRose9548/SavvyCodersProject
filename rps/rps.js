// Variable Initializations
let handUser = 'R';
let handUserIndex = 0;
let handComp = handUser;
let handCompIndex = 0;
let hands = ['R','P','S'];
let handsStrs = ['Rock', 'Paper', 'Scissors'];
let exitLoop = false;
let roundCounter = 0;
let divs = ['#result_1', '#result_2', '#result_3',
    '#result_4', '#result_5'];
let output = null;

// Checking for valid user selection.
const handCheck = (handUser) => {
  if (handUser !== 'R' && handUser !== 'P' && handUser !== 'S'
      && handUser !== 'r' && handUser !== 'p' && handUser !== 's') {
    return "invalid";
  } else {
    return handUser;
  }
}

// Retrieving User Selection
const userSelection = () => {

  do {
    handUser = prompt ("Choose Rock, Paper, or Scissors by typing R, P or S.");

    if (handCheck(handUser) === 'invalid') {
      alert ('Invalid selection.  Please try again.');
      exitLoop = false; // continue the do-while loop until valid selection
    } else {
      handUser = handUser.toUpperCase();
      exitLoop = true; // exit the do-while loop
    }
  } while (exitLoop !== true); // handUser has a valid selection

  if (handUser === 'R') { handUserIndex = 0; }
  else if (handUser === 'P') { handUserIndex = 1; }
  else { handUserIndex = 2; }

  return handUserIndex;
}

// Creating Computer Selection
const compSelection = () => {
    return Math.floor(Math.random() * 3); // 0, 1, 2
}

// 1 round of Rock-Paper-Scissors
const gameRound = (divCounter) => {
  handCompIndex = compSelection ();
  handUserIndex = userSelection ();
  output = document.querySelector(divs[divCounter-1]);

  if (handCompIndex !== handUserIndex) {
    // Rock beat Scissors ( 0 vs 2)
    // Scissors beat Paper (2 vs 1)
    // Paper beat Rock (1 vs 0)
    if ((handCompIndex === 0 && handUserIndex === 2) ||
    (handCompIndex === 2 && handUserIndex === 1) ||
    (handCompIndex === 1 && handUserIndex === 0)) {
      // Computer wins
      output.innerHTML = "<p class='highlight'>Computer wins!</p>Computer chose "
      + handsStrs[handCompIndex] + ".  You chose " + handsStrs[handUserIndex] + ".";
      alert ("Computer wins! Computer chose " + handsStrs[handCompIndex]
      + ".  You chose " + handsStrs[handUserIndex] + ".");
    } else {
      // User wins
      output.innerHTML = "<p class='highlight'>You win!</p>Computer chose "
      + handsStrs[handCompIndex] + ".  You chose " + handsStrs[handUserIndex] + ".";
      alert ("You win! Computer chose " + handsStrs[handCompIndex]
      + ".  You chose " + handsStrs[handUserIndex] + ".");
    }
  } else {
      // Tie
      output.innerHTML = "<p class='highlight'>Tie!</p>Computer chose "
      + handsStrs[handCompIndex] + ".  You chose " + handsStrs[handUserIndex] + ".";
      alert ("Tie! Computer chose " + handsStrs[handCompIndex]
      + ".  You chose " + handsStrs[handUserIndex] + ".");
  }
}

// Playing the game 5 times
while (roundCounter < 5) {
    gameRound(roundCounter + 1);
    roundCounter++;
}
