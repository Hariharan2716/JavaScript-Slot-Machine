#🎰 Building Slot Machine

This is a Slot Machine build using node.js and Modern JavaScript (ES-6).

---
### Slot Game blueprint

1. Deposit some money
2. Determine number of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. If then give the user their winnings. else play again...


### 🏧 Deposit function.

- First created a arrow function for the player to enter the deposit amount so for that installed a package called **prompt-sync** and import it via require. This enables to get user input in terminal, the prompt function always returns a string.

- so convert it to a number by using parseFloat(), with condition if the input is less than 0 or negative, the termial would keep on asking the player to enter a valid deposit in order to initiate the game - used while loop.

### Determine the number of lines to bet.

- Used the same logic of Deposit funtion to get the lines to bet but with different condition.

### 💲 Collect the bet amount.

- Created a function to collect the bet amount with condtions.
- This function now is with 2 parameters, (balance, lines) these two are major factor, so the helps to determine the bet per line to validate.
- The balance is initialized with the deposit amount,
storing the balace as `let` so that the amount keep can on changing as per bet loss or wins.

### 💫 Spin the Slot machine.
- Now it is to spin the slot machine in order for that start with defining some variables to depict how big the slot machine and how many symbols potentially it can have, so create a global variable called rows and cols to store the number of lines and symbols to depict the number of rows and cols.
-> How many symbols
-> Value of each symbols
-> Symbols have in total
-> Quantity of each symbol in each reel.

- Make sure to place your global variable at top so that is easy to access and edit. A tradition usually followed the imports, libraries are at the top of program -> Global Variables -> then Classes and Function.  

- For this game I use 3 rows and 3 cols, The number of symbols in each coloumn or reel-roll as a object (key: value) pairs. Follow the same for the symbol values.

- Create a function to **spin** the slot machine and use the values_symbol object as a multiplier for the row, eg., if a line of row get's AAA multiply it with the value. Here spinning is to randomly select.

- Generate the wheels so created a array called symbols in a const variables since the array has reference datatype, then iterate a for loop that has variables of symbol and count using **Object.entries()** loop/iterate through every symbols key value pairs.

- #### Detailed breakdown of implementation and logic of spin function.

- Initialization of symbols array:
-- The function starts by creating an empty array called symbols.
-- It then iterates through the SYMBOLS_COUNT object, which holds each symbol and its corresponding count.
-- For each symbol,  it pushes the symbol into the symbols array as many times as its count dictates.  For eg., if 'A' has a count of 2, 'A' will be added to the symbols array twice. This creates a pool of all possible symbols, weighted by their counts, from which the reels will be populated.

- Reel Generation Loop
-- The function then initalizes an empty array called reels, which will hold the final structure of the slot machine (columns and rows of symbols).
-- It iterates for each coloumn.
-- **Create copy array of symbols = reelSymbols** use to pick a random symbol on each reel, so we copy array of symbols to maximize the utility of symbols
-- Here we used colos as outer loop and rows as inner loop because the loop runs for the row determines how many symbols each reel will have.
-- Inner loop runs for the number of rows whihc determines how many symbols each reel will have. In each loop/iteration a random index is generated based on the current reelSymbols array's length.
The selectedSymbol is retrieved from reelSymbols using randomIndex then push the selectedSymbol to reels array, finally selected symbol is removed from the array of reelSymbols using splice(), return value.  After all reels have been populated with random symbols, the spin function returns the reels array.

### 🌀 Transpose
- Now that this spin() function give the randomly generated reels the values are in a transpose -> meaning - The row values are needed to be in coloumns value vis-versa so in order to fix it we transpose the array.

- Eg.,

```
[A B D] -> This is coloum not the row which need to be transposed.
[D D D]
[B C A]

Transposed Array
[A D B]
[B D C]
[D D A]

```
- The transpose function is a helper function that re-organizes the data from a column-based format to a row-based format.

#### How ⁉
-- Take the reels array in that pick columns as input
-- Then create a new empty array called rows
-- It loops through each potential row [- - -] and then through each column [=] within that row.
-- For each element, it takes the symbol from the current column and the current row and adds it to the new rows array.

To have a Visual appealing result we use string concatination in the 2D array using for each loop and .entries() method with a nested for loop so there we access to each row and print it with a pipe '|' in between the concatiantion of the value in the row.

Eg.,
```
D | A | C
A | B | D
C | C | D

```