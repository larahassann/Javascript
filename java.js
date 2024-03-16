let rolls = 3;
let heldDice = [false, false, false, false, false];

// Store the dice values in an array
let diceValues = [0, 0, 0, 0, 0];

function rollDice() {
  if (rolls == 0) {
    alert("geen kansen meer!");
    return;
  }

  for (let i = 0; i < heldDice.length; i++) {
    if (!heldDice[i]) {
      // Roll only if the dice is not held
      diceValues[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  // Update the dice images
  for (let i = 0; i < diceValues.length; i++) {
    document.getElementById("dice" + (i + 1)).src = "dice" + diceValues[i] + ".png";
  }

  rolls--;
  document.getElementById("rolls").textContent = rolls ;

  // Update other functionalities based on the new dice values
  updateScore(); // Assuming you have a function to update the score based on diceValues



}


function holdDie(dieNum) {
  heldDice[dieNum - 1] = !heldDice[dieNum - 1];
}

// Example of updating score based on dice values
function updateScore() {
  let totalScore = 0;
  for (let i = 0; i < diceValues.length; i++) {
    totalScore += diceValues[i];
  }
  document.getElementById("total").textContent = "Total Score: " + totalScore;
}

// Example of calling selectOnes function
function selectOnesCall() {
  selectOnes();
}

// Example of filtering dice values to find ones
function selectOnes() {
  let onesCount = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + onesCount);
  // You can update the HTML elements to display the count of ones as needed
}
