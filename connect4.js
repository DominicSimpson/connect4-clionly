const connect4 = {
    grid: Array.from({ length: 6 }, () => Array(7).fill(0)), // creates 6 rows x 7 columns
    switchPlayer() { // switches 
        this.Player = this.Player === 1 ? 2 : 1;
    }
}