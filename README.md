# connect4-clionly

## Connect Four (also known as Connect 4, Four Up, Plot Four, Find Four, Captain's Mistress, Four in a Row, Drop Four, and in the Soviet Union, Gravitrips) is a game in which the players choose a colour and then take turns dropping coloured tokens into a six-row, seven-column vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. It is therefore a type of m,n,k-game (7, 6, 4) with restricted piece placement. Connect Four is a solved game; the first player can always win by playing the right moves.

## A gameplay example shows the first player starting Connect Four by dropping one of their yellow discs into the center column of an empty game board. The two players then alternate turns dropping one of their discs at a time into an unfilled column, until the second player, with red discs, achieves a diagonal four in a row, and wins the game. If the board fills up before either player achieves four in a row, then the game is a draw.




[Connect4 screenshot for reference](assets/connect4image_forreference.jpg)


<!---
PSEUDOCODE:
Create Game object to hold Board + Player 1 + Player 2 objects
Create Connect4 board grid object 
Create Player object -> Player 1 & Player 2 subclasses
Create coloured token:
    - yellow token: player1
    - red token: player2

game = {
  grid: [
    [0, 0, 0, 0, 0, 0, 0], // 0 represents empty circle; 1 represents if circle is filled by coloured token
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
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