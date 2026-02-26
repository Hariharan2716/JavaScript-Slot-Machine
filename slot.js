const { get } = require("mongoose");

const prompt = require("prompt-sync")();
// Node.js require import modules

const ROWS = 3;
const COLOUMNS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8  
}

const VALUES_SYMBOL = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

// 1. Function to Deposit money
const deposit = () => {
  while(true){
    const depositAmount = prompt("Enter a deposit amount: ");  //prompt() get the input in string data type.
    const numberDepositAmount = parseFloat(depositAmount);     //parseFloat helps to convert the sting to float.

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
      console.log("Invalid deposit amount, please enter a valid amount.");
    }else{
      return(numberDepositAmount);
    }
  }
}

// 2. Determine number of lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
}

// 3. Collect a bet amount
const getBetAmount = (balance, lines) => {
  while(true){
    const getBet = prompt("Enter the bet amount per line: ");
    const numberBet = parseFloat(getBet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance/lines)){
      console.log("Invalid bet amount please enter computed amount, can bet");
    } else {
      return numberBet;
    }
  }
}

// 4. Spin the slot machine
const spin = () => {
  const symbols = [];
  for (const[symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i = 0; i < count; i++){
      symbols.push(symbol);
    }
  }

  const reels = []; // this nested array stors the random reel symbols each array depicts a single coloumn which gives value for 3 symbols in a row.
  
  /** I picked rows for the outer loop but logic might be wrong since the number of rows are fixed to 3 but what if the user input the cols to more than 3 when this 
   * is scaled to a dynamic slot machine, so made the outer loop to be in cols and inner to be in rows and to make the adding of arrays dynamic, meaning to have a nested
   * array loop.
   */
  for(let i=0; i<COLOUMNS; i++){
    reels.push([]);
    const reelSymbols = [...symbols];
    for(let j=0; j<ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
}

// 5. Check if the user won
// 6. Give the winnings
// 7. Play again

// Call the functions
// console.log(deposit());
console.log(spin());
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBetAmount(balance, numberOfLines);