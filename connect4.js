class Board { // Board constructor: 6 rows x 7 columns
    constructor() {
        this.grid = Array.from( { length: 6 }, () => 
        Array(7).fill(0)); 
    }

    displayBoard() { //displaying the board
        console.clear();
        this.grid.forEach(row => {
            console.log(row.map(circle => (circle === 0 ? '.' : circle)).join(' '));
        });
        console.log(circle, "0 1 2 3 4 5 6/n")
    }

    dropToken(column, playerId) {
        for (let row = 5; row >= 0; row--) {
            if (this.grid[row][column] === 0) {
                this.grid[row][column] = playerId;
                return true;
            }
        }
        return false;
    }



}



class Game { // the game constructor
    contructor() {
        this.board = new Board(); // creates new instance of the Board constructor
        this.player1 = new Player(1); // creates new instance of Player constructor for Player1
        this.player2 = new Player(2); // creates new instance of Player constructor for Player2
        this.currentPlayer = this.player1; // defaults to Player1 as current player
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        // toggles currentPlayer between 1 and 2 using a ternary operator
    }
}








class Player {
    constructor(name) {
    this.name = name
    }
}



class Player1 extends Player {
    constructor(){
        const name = prompt('Enter name for Player 1: ')
        super(name)
    }

    getMove(){
        let userChoice = prompt((`${this.name} Input your next move: `).toLowerCase().trim())
    }
}


class Player2 extends Player {
    constructor(){
        const name = prompt('Enter name for Player 2:')
        super(name)
    }
    
    getMove(){
        let userChoice = prompt((`${this.name} Input your next move: `).toLowerCase().trim())
    }

}