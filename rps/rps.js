// Variable Initializations
let handUser = 'R';
let handComp = handUser;
let hands = ['R','P','S'];
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

  return handUser;
}

// Creating Computer Selection
const compSelection = () => {
  do {
    handCompIndex = Math.ceil(Math.floor(Math.random() * 100) / 33) - 1;
    handComp = hands[handCompIndex];
    handComp = handCheck (handComp)
  } while (handComp === 'invalid');

  return handComp;
}

// 1 round of Rock-Paper-Scissors
const gameRound = (divCounter) => {
  handComp = compSelection ();
  handUser = userSelection ();
  output = document.querySelector(divs[divCounter-1]);
console.log("comp is " + handComp + " user is " + handUser);
  if (handComp !== handUser) {
    // Rock beat Scissors
    // Scissors beat Paper
    // Paper beat Rock
    if ((handComp === 'R' && handUser === 'S') ||
    (handComp === 'S' && handUser === 'P') ||
    (handComp === 'P' && handUser === 'R')) {
      // Computer wins
      output.innerHTML = "<p>Computer wins!</p> Computer chose " + handComp
      + ". You chose " + handUser + ".";
    } else {
      // User wins
      output.innerHTML = "<p>You win!</p> Computer chose " + handComp
      + ". You chose " + handUser + ".";
    }
  } else {
      // Tie
      output.innerHTML = "<p>Tie!</p> Computer chose " + handComp
      + ". You chose " + handUser + ".";
  }
}

// Playing the game 5 times
while (roundCounter < 5) {
    gameRound(roundCounter + 1);
    roundCounter++;
}
