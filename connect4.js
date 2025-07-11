console.log("Hello world!");

const prompt = require('prompt-sync')();


class Board { // Board class representing constructor

    constructor() {
        this.grid = Array.from( { length: 6 }, () => // 6 rows x 7 columns
        Array(7).fill(0)); 
    }

    displayBoard() { //displays the board in CLI
        console.clear(); // clears terminal screen
        this.grid.forEach(row => { // for each row in board:
            console.log(row.map(circleSlot => (circleSlot === 0 ? '.' : circleSlot)).join(' ')); // map converts 0 to '.' to visually
            // represent empty circle slot; join puts space between characters for formatting
        });
        console.log("0 1 2 3 4 5 6\n") // prints column headers
    }

    dropToken(column, playerId) { // method 'drops' token into a column of six circle slots
        for (let row = 5; row >= 0; row--) { // starts from bottom row (5, as outined in pseudocode) and works upwards (hence decrementing)
            // as a physical Connect 4 game did
            if (this.grid[row][column] === 0) { // finds the first empty circle slot and sets that circle slot to playerId 1 or 2 
                this.grid[row][column] = playerId;
                return true; //returns true if 'drop' is successful
            }
        }
        return false; //returns false if column is full with tokens
    }

    checkWin(playerId){
        const rows = this.grid.length;
        const cols = this.grid[0].length;

        for (let row = 0; row < rows; row++){
            for (let col = 0; col < cols; col++)  {// Nested for loop

            if (this.grid[row][col] !== playerId) continue; // skips empty cells or cells not belonging to current player
            // Check horizontally →
            if (col + 3 < cols &&
                this.grid[row][col + 1] === playerId &&
                this.grid[row][col + 2] === playerId &&
                this.grid[row][col + 3] === playerId) {
                return true;
            }
            // Check vertically ↓
            if (row + 3 < rows &&
                this.grid[row + 1][col] === playerId &&
                this.grid[row + 2][col] === playerId &&
                this.grid[row + 3][col] === playerId) {
                return true;
            }
            // Check diagonal down-right ↘
            if (row + 3 < rows && col + 3 < cols &&
                this.grid[row + 1][col + 1] === playerId &&
                this.grid[row + 2][col + 2] === playerId &&
                this.grid[row + 3][col + 3] === playerId) {
                return true;
            }
            // Check diagonal up-right ↗
            if (row - 3 >= 0 && col + 3 < cols &&
                this.grid[row - 1][col + 1] === playerId &&
                this.grid[row - 2][col + 2] === playerId &&
                this.grid[row - 3][col + 3] === playerId) {
                return true;
            }
        }
        }
        return false;
    }

    checkDraw(){
        return this.grid.every(row => 
            row.every(circleSlot => circleSlot !== 0));
    }



}




class Game { // the Game class representing constructor
    constructor() {
        this.board = new Board(); // creates new instance of the Board constructor

        const name1 = prompt('Enter name for Player 1: ')
        const name2 = prompt('Enter name for Player 2: ')
        this.player1 = new Player(name1, 'X'); // creates new instance of Player constructor for Player1
        this.player2 = new Player(name2, 'O'); // creates new instance of Player constructor for Player2
        this.currentPlayer = this.player1; // defaults to Player1 as current player
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 
            ? this.player2 
            : this.player1;
        // toggles currentPlayer between 1 and 2 using a ternary operator
    }

    async start() { // async method for CLI ouput
        while (true) { // starts infinite loop - game will continue until broken by win or draw break conditon
            this.board.displayBoard(); // triggers displayBoard method that clears console and prints current board state
            let move = await this.currentPlayer.getMove(); // asks current player to input column
            while (!this.board.dropToken(move, this.currentPlayer.id)) { // triggers dropToken method, which returns false if column is full
                console.log("That circle slot is already occupied by a token. Try again.")
                move = await this.currentPlayer.getMove(); // asks user for new column input
                

;            }
            if (this.board.checkWin(this.currentPlayer.id)){
                this.board.displayBoard();
                
                console.log(`Player ${this.currentPlayer.name} wins!`);
                break;
            }

            if (this.board.checkDraw()){
                this.board.displayBoard();

                console.log(`It's a draw`);
                break;
            }
                
            this.switchPlayer();    

        }
    }
}


class Player {
    constructor(name, id) {
    this.name = name;
    this.id = id;
    }

    async getMove() {
        let input;
        do {
            input = prompt(`Player ${this.name}, input your move by choosing a column (0-6):`);

            if (input.toLowerCase() === 'q') {
                console.log(`👋 ${this.name} has exited the game.`);
                process.exit(); // ✅ exits the Node.js program immediately
            }

            const column = parseInt(input, 10);
            if (Number.isInteger(column) && column >= 0 && column <= 6){
                return column;
            }
            console.log('Invalid input. Please enter a number b/w 0-6')
        }
        while (true);
            
        }

}

const game = new Game();
game.start().catch(console.error);


