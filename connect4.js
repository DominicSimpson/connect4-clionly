class Board { // Board constructor: 6 rows x 7 columns
    constructor() {
        this.grid = Array.from( { length: 6 }, () => 
        Array(7).fill(0)); 
    }
}



class Game { // the game constructor
    contructor() {
        this.board = new Board();
        this.player1 = new Player(1);
        this.player2 = new Player(2);
        this.currentPlayer = this.player1;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        // toggles currentPlayer between 1 and 2 using a ternary operator
    }
}