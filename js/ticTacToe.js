var State = function(oldState) {
  //Set up game state variables
  this.grid = [];
  this.aiMoveCount = 0;
  this.turn = '';
  this.result = 'running';

  //If not the first move, get values from last state
  if (typeof oldState !== 'undefined') {
    this.grid = oldState.grid.slice(0);
    this.aiMoveCount = oldState.aiMoveCount;
    this.turn = oldState.turn;
    this.result = oldState.result;
  }

  //Function to advance turn
  this.advanceTurn = function() {
    this.turn = this.turn === 'X' ? '0' : 'X';
  }

  //Get state's empty cells
  this.emptyCells = function() {
    var eCells = [];
    this.grid.forEach(function(e) {
      if (e === 'E') {
        eCells.push(e);
      }
    });
    return eCells;
  }

  //Check if current state is end state and give result
  this.checkEndState = function() {
    var G = this.grid;

    //Check rows
    for(var i = 0; i <= 6; i = i + 3) {
      if(G[i] !== 'E' && G[i] === G[i + 1] && G[i + 1] == G[i + 2]) {
        this.result = G[i] + '-won';
        return true;
      }
    }

    //Check columns
    for(var i = 0; i <= 2 ; i++) {
      if(G[i] !== 'E' && G[i] === G[i + 3] && G[i + 3] === G[i + 6]) {
        this.result = G[i] + '-won';
        return true;
      }
    }

    //Check diagonals
    for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
      if(G[i] !== 'E' && G[i] == G[i + j] && G[i + j] === G[i + 2*j]) {
        this.result = G[i] + '-won';
        return true;
      }
    }
    
    //Check for draw
    var available = this.emptyCells();
    if(available.length === 0) {
      this.result = 'draw';
      return true;
    }
    else {
      return false;
    }
  }
}

var Game = function() {
  
}