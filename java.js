let rolls = 3;
<<<<<<< Updated upstream
let heldDice = [false, false, false, false, false];

// Store the dice values in an array
let diceValues = [0, 0, 0, 0, 0];

=======
let vastGehouden = [false, false, false, false, false];


let diceValues = [0, 0, 0, 0, 0];

let enenSpeler1=0;
let enenSpeler2=0;
let tweeënSpeler1=0;
let tweeënSpeler2=0;
let drieeënSpeler1=0;
let drieeënSpeler2=0;
let vierenSpeler1=0;
let vierenSpeler2=0;
let vijfenSpeler1=0;
let vijfenSpeler2=0;
let zessenSpeler1=0;
let zessenSpeler2=0;

let threeOfAKindtotaalSpeler1=0;
let fourOfAKindtotaalSpeler1=0;
let threeOfAKindtotaalSpeler2=0;
let fourOfAKindtotaalSpeler2=0;
let yahtzeeSpeler1=0;
let yahtzeespeler2=0;
let fullHouseSpeler1=0;
let fullhouseSpeler2=0;
let smallStraightSpeler1=0;
let smallStraightSpeler2=0;
let largeStraightSpeler1=0;
let largeStraightSpeler2=0;


>>>>>>> Stashed changes
function rollDice() {
  if (rolls == 0) {
    alert("geen kansen meer!");
    return;
  }

<<<<<<< Updated upstream
  for (let i = 0; i < heldDice.length; i++) {
    if (!heldDice[i]) {
      // Roll only if the dice is not held
=======
  for (let i = 0; i < vastGehouden.length; i++) {
    if (!vastGehouden[i]) {
      
>>>>>>> Stashed changes
      diceValues[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

<<<<<<< Updated upstream
  // Update the dice images
=======
  
>>>>>>> Stashed changes
  for (let i = 0; i < diceValues.length; i++) {
    document.getElementById("dice" + (i + 1)).src = "dice" + diceValues[i] + ".png";
  }

  rolls--;
  document.getElementById("rolls").textContent = rolls ;

<<<<<<< Updated upstream
  // Update other functionalities based on the new dice values
  updateScore(); // Assuming you have a function to update the score based on diceValues
=======
 
>>>>>>> Stashed changes



}


<<<<<<< Updated upstream
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
=======
function vastHouden(dieNum) {
  vastGehouden[dieNum - 1] = !vastGehouden[dieNum - 1];
}






function selectOnesPlayer1() {
  let onesCount = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + onesCount);
  document.getElementById("onesPlayer1").textContent=enenSpeler1;
}

function spelerVerwisselen(){
  rolls = 3;
  document.getElementById("rolls").textContent = rolls;
}


function selecteer1Speler1() {
 enenSpeler1 = diceValues.filter(value => value === 1).length;
  console.log("Number of ones: " + enenSpeler1);
  document.getElementById("enenSpeler1").textContent = enenSpeler1; 
  
}
function selecteer1Speler2() {
 enenSpeler2 = diceValues.filter(value => value === 1).length;
  document.getElementById("enenSpeler2").textContent = enenSpeler2; 
  console.log("Number of ones: " + enenSpeler2);
}
function selecteer2Speler1() {
 tweeënSpeler1 = diceValues.filter(value => value === 2).length;
  document.getElementById("tweeënSpeler1").textContent = tweeënSpeler1; 
  console.log("Number of Twos: " + tweeënSpeler1);
}
function selecteer2Speler2() {
 tweeënSpeler2 = diceValues.filter(value => value === 2).length;
  document.getElementById("tweeënSpeler2").textContent = tweeënSpeler2; 
  console.log("Number of Twos: " + tweeënSpeler2);
}
function selecteer3Speler1() {
 drieeënSpeler1 = diceValues.filter(value => value === 3).length;
  document.getElementById("drieeënSpeler1").textContent = drieeënSpeler1; 
  console.log("Number of threes: " + drieeënSpeler1);
}
function selecteer3Speler2() {
 drieeënSpeler2 = diceValues.filter(value => value === 3).length;
  document.getElementById("drieeënSpeler2").textContent = drieeënSpeler2; 
  console.log("Number of threes: " + drieeënSpeler2);
}
function selecteer4Speler1() {
 vierenSpeler1 = diceValues.filter(value => value === 4).length;
  document.getElementById("vierenSpeler1").textContent = vierenSpeler1; 
  console.log("Number of fours: " + foursCountPlayer1);
}
function selecteer4Speler2() {
 vierenSpeler2 = diceValues.filter(value => value === 4).length;
  document.getElementById("vierenSpeler2").textContent = vierenSpeler2; 
  console.log("Number of fours: " + vierenSpeler2);
}
function selecteer5Speler1() {
 vijfenSpeler1 = diceValues.filter(value => value === 5).length;
  document.getElementById("vijfenSpeler1").textContent = vijfenSpeler1;
  console.log("Number of fives: " + vijfenSpeler1);
}
function selecteer5Speler2() {
 vijfenSpeler2 = diceValues.filter(value => value === 5).length;
  document.getElementById("vijfenSpeler2").textContent = vijfenSpeler2;
  console.log("Number of fives: " + vijfenSpeler2);
}
function selecteer6Speler1() {
 zessenSpeler1 = diceValues.filter(value => value === 6).length;
  document.getElementById("zessenSpeler1").textContent = zessenSpeler1;
  console.log("Number of sixes: " + zessenSpeler1);
}
function selecteer6Speler1() {
 zessenSpeler2 = diceValues.filter(value => value === 6).length;
  document.getElementById("zessenSpeler2").textContent = zessenSpeler2;
  console.log("Number of sixes: " + zessenSpeler2);
}

function switchPlayer(){
  rollsLeft = 3;
  document.getElementById("rollsLeft").textContent = "Rolls left: " + 3;
  for (let i = 0; i < diceValues.length; i++){
  document.getElementById("dice" + (i + 1)).src = "dice 1.png";
  }
  heldDice = [false, false, false, false, false];
}

function threeOfAKind() {
  const tellen = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    tellen[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (tellen[i] >= 3) {
      document.getElementById("threeOfaKind").textContent = threeOfAKindtotaalSpeler1;
      threeOfAKindtotaalSpeler1 = diceValues[0] + diceValues[1] + diceValues [2] + diceValues [3] + diceValues [4] ;
      return true; 
    }
  }
  document.getElementById("threeOfaKind").textContent = "No";
  return false; 
}

function threeOfAKindSpeler2() {
  const tellen = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    tellen[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (tellen[i] >= 3) {
      document.getElementById("threeOfaKindSpeler2").textContent = threeOfAKindtotaalSpeler2;
      threeOfAKindtotaalSpeler1 = diceValues[0] + diceValues[1] + diceValues [2] + diceValues [3] + diceValues [4];
      return true; 
    }
  }
  document.getElementById("threeOfaKind").textContent = "No";
  return false; 
}

function fourOfAKind() {
  const tellen = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    tellen[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (tellen[i] >= 4) {
      document.getElementById("fourOfaKind").textContent = fourOfAKindtotaalSpeler1;
      threeOfAKindtotaalSpeler1 = diceValues[0] + diceValues[1] + diceValues [2] + diceValues [3] + diceValues [4] ;

      threeOfAKindtotaal
      return true; 
    }
  }
  document.getElementById("fourOfaKind").textContent = "No";
  return false; 
}

function fourOfAKindSpeler2() {
  const tellen = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    tellen[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (tellen[i] >= 4) {
      document.getElementById("fourOfaKindSpeler2").textContent = fourOfAKindtotaalSpeler2;
      threeOfAKindtotaalSpeler1 = diceValues[0] + diceValues[1] + diceValues [2] + diceValues [3] + diceValues [4] ;

      threeOfAKindtotaal
      return true; 
    }
  }
  document.getElementById("fourOfaKind").textContent = "No";
  return false; 
}

function fullHouse() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    document.getElementById("fullHouse").textContent = fullHouseSpeler1;
    fullHouseSpeler1 = 25;
    return true; 
  } else {
    document.getElementById("fullHouse").textContent = "No";
    return false; 
  }
}

function fullHousSpeler2() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  let hasThree = false;
  let hasTwo = false;
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 3) {
      hasThree = true;
    } else if (counts[i] === 2) {
      hasTwo = true;
    }
  }
  if (hasThree && hasTwo) {
    document.getElementById("fullHouseSpeler2").textContent = fullhouseSpeler2;
    fullhouseSpeler2 = 25;
    return true; 
  } else {
    document.getElementById("fullHouse").textContent = "No";
    return false; 
  }
}

function largeStraight() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      document.getElementById("largeStraight").textContent = largeStraightSpeler1;
      largeStraightSpeler1 = 40;
      return false; 
    }
  }
  document.getElementById("largeStraight").textContent = "yes!";
  return true; 
}
function largeStraightspeler2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 1; i++) {
    if (sortedDiceValues[i] + 1 !== sortedDiceValues[i + 1]) {
      document.getElementById("largeStraightSpeler2").textContent = largeStraightSpeler2;
      largeStraightSpeler2 = 40;
      return false; 
    }
  }
  document.getElementById("largeStraight").textContent = "yes!";
  return true; 
}


function smallStraight() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
      document.getElementById("smallStraight").textContent = smallStraightSpeler1;
      smallStraightSpeler1=30;
      return true;
    }
  }
  document.getElementById("smallStraight").textContent = "No";
  return false; 
}
function smallStraight2() {
  const sortedDiceValues = diceValues.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedDiceValues.length - 2; i++) {
    if (sortedDiceValues[i] + 1 === sortedDiceValues[i + 1] &&
        sortedDiceValues[i + 1] + 1 === sortedDiceValues[i + 2]) {
      document.getElementById("smallStraightSpeler2").textContent = smallStraightSpeler2;
      smallStraightSpeler2=30;
      return true;
    }
  }
  document.getElementById("smallStraight").textContent = "No";
  return false; 
}


function yahtzee() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      document.getElementById("yahtzee").textContent = yahtzeeSpeler1;
      yahtzeeSpeler1 = 50;
      return true; 
    }
  }
  document.getElementById("yahtzee").textContent = "No";
  return false; 
}


function yahtzeesspeler2() {
  const counts = Array.from({ length: 6 }, () => 0); 
  for (const value of diceValues) {
    counts[value - 1]++; 
  }
  for (let i = 0; i < 6; i++) {
    if (counts[i] === 5) {
      document.getElementById("yahtzeeSpeler2").textContent = yahtzeeSpeler2;
      yahtzeeSpeler2 = 50;
      return true; 
    }
  }
  document.getElementById("yahtzee").textContent = "No";
  return false; 
}

function totalScore() {
  totalPlayer1 = (enenSpeler1 * 1) + (tweeënSpeler1 * 2) + (drieeënSpeler1 * 3) + (vierenSpeler1 * 4) + (vijfenSpeler1 * 5) + (zessenSpeler1 * 6) + threeOfAKindtotaalSpeler1 +yahtzeeSpeler1 + fullHouseSpeler1 + smallStraightSpeler1;

  document.getElementById("totalScore").textContent =totalPlayer1;

}

// function totaleSpeler2() {
//  totaaleSpeler2 = (enenSpeler2 * 1) + (tweeënSpeler2 * 2) + (drieeënSpeler2 * 3) + (vierenSpeler2 * 4) + (vijfenSpeler2 * 5) + (zessenSpeler2 * 6) + threeOfAKindtotaalSpeler2 +yahtzeeSpeler2 + fullHouseSpeler2 + smallStraightSpeler2;

//   document.getElementById("totalScoreSpeler2").textContent = totaaleSpeler2;

// }

function totaleSpeler2(){
  totaalScore = (enenSpeler2 *1) + (tweeënSpeler2 * 2) + (drieeënSpeler2 * 3) + (vierenSpeler2 * 4) + ( vijfenSpeler2 * 5) + (zessenSpeler2 *6) + threeOfAKindtotaalSpeler2 + fourOfAKindtotaalSpeler2 + fullhouseSpeler2 + smallStraightSpeler2 + yahtzeespeler2;

  document.getElementById("totalScoreSpeler2").textContent = totaalScore
}
>>>>>>> Stashed changes
