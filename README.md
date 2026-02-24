#🎰 Building Slot Machine

This is a Slot Machine build using node.js and Modern JavaScript (ES-6).


Slot Game blueprint

1. Deposit some money
2. Determine number of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. If then give the user their winnings. else play again...

### Deposit function

- First created a arrow function for the player to enter the deposit amount so for that installed a package called **prompt-sync** and import it via require. This enables to get user input in terminal, the prompt function always returns a string.

- so convert it to a number by using parseFloat(), with condition if the input is less than 0 or negative, the termial would keep on asking the player to enter a valid deposit in order to initiate the game - used while loop.

### Determine the number of lines to bet

- Used the same logic of Deposit funtion to get the lines to bet but with different condition.

### Collect the bet amount

- Created a function to collect the bet amount with condtions.
- This function now is with 2 parameters, (balance, lines) these two are major factor, so the helps to determine the bet per line to validate.
- The balance is initialized with the deposit amount,
storing the balace as `let` so that the amount keep can on changing as per bet loss or wins.