# connect4-clionly

## Connect Four (also known as Connect 4, Four Up, Plot Four, Find Four, Captain's Mistress, Four in a Row, Drop Four, and in the Soviet Union, Gravitrips) is a game in which the players choose a colour and then take turns dropping coloured tokens into a six-row, seven-column vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. It is therefore a type of m,n,k-game (7, 6, 4) with restricted piece placement. Connect Four is a solved game; the first player can always win by playing the right moves.

## A gameplay example shows the first player starting Connect Four by dropping one of their yellow discs into the center column of an empty game board. The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves a diagonal four in a row, and wins the game. If the board fills up before either player achieves four in a row, then the game is a draw.




[Connect4 screenshot for reference](assets/connect4image_forreference.jpg)


<!---
PSEUDOCODE:
Create Game object to hold Board + Player 1 + Player 2 objects
Create Connect4 board grid object 
Create Player object -> Player 1 & Player 2 subclasses
Create object? - {
    "player1": yellowToken,
    "player2": redToken
    }
Create columns = [1, 2, 3, 4, 5, 6, 7]
Create rows = [1, 2, 3, 4, 5, 6]

// need to delineate each circle (A1, A2, A3)

function Game { //Game prototype
    contains variables above

    
// Populates the grid with each circle via a nested loop. X and Y are based on the normal coordinate system of
// x: horizontal axis, y: vertical axis

        
        }
    
    
    }

}

Visual representation of board:
[0, 0, 0, 0, 0, 0, 0], // 0 represents empty circle; 1 represents if circle is filled by coloured token


connect4board = {
  grid: [
    column 0 / column 1 / column 2 / column 3 / column 4 / column 5 / column 6
    [0, 0, 0, 0, 0, 0, 0], // row 0 (top)
    [0, 0, 0, 0, 0, 0, 0], // row 1
    [0, 0, 0, 0, 0, 0, 0], // row 2
    [0, 0, 0, 0, 0, 0, 0], // row 3
    [0, 0, 0, 0, 0, 0, 0], // row 4
    [0, 0, 0, 0, 0, 0, 0], // row 5
  ],
  player1: {
    x: 0,
    y: 0,
  },
  player2: {
    x: 0,
    y: 0,
  },
};


};

if (circle is empty) {
    drop token into circle;
    else circle is not emptys
}




Game class - each game is an instance of Game class, contains all other classes.
Board class - check grid state, function dropPiece, function checkWin, function checkDraw, display new grid state, 
Player class - base class for Player 1 & Player 2, contains playerInput



class Player {
    constructor(name, tokenColour){
        this.name = prompt(`Please enter ur name: `)
        this.token = token
    }
}





