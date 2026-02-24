const prompt = require("prompt-sync")();
// Node.js require import modules

// 1. Function to Deposit money
const deposit = () => {
  while(true){
    const depositAmount = prompt("Enter a deposit amount: ");  //prompt() get the input in string data type.
    const numberDepositAmount = parseFloat(depositAmount);     //parseFloat helps to convert the sting to float.

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
      console.log("Invalid deposit amount, please enter a valid amount.");
    }else{
      return depositAmount;
    }
  }
}

// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the winnings
// 7. Play again

// Call the functions
deposit();