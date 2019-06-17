//If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

//Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

//[[0, 0, 1],
//[0, 1, 2],
//[2, 1, 0]]

//We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).

// there are only 8 ways to win the game.
//three row, three columbs, and 2 diagonals.
// one function checks rows, one columns, one diagonals.
function checkMatches(arr){
  console.log(arr)
  if(arr[0]===arr[1] && arr[1]===arr[2] && arr[0] != 0) return arr[0]
  if(arr.includes(0)) return -1
  else return 0
}

function checkThreeRow(array){
  let result=[]
  console.log(array);
  for(let i = 0; i<3; i++){
    result.push(checkMatches(array[i]));
  }
  if (result.includes(1)) return 1;
  if (result.includes(2)) return 2;
  if (result.includes(0)) return -1;
  return 0;
}

function convertToCols(board){
  const columns =[];
  for (let i = 0; i < board.length; i++) {
    columns.push([board[0][i],board[1][i],board[2][i]])
  }
  return columns
}

function convertToDiags(board){
  const diags =[[],[],[]];
  for (let i = 0; i < board.length; i++) {
    diags[0].push(board[i][i])
    diags[1].push(board[2-i][i])
  }
  console.log(diags)
  return diags
}

function checkWins(rowR, colR, diagR){
  const results=[rowR, colR, diagR]
  console.log(results)
  if (results.includes(1)) return 1
  if (results.includes(2)) return 2
  if (results.includes(-1)) return -1
  else return 0
}

function isSolved(board) {
  const columns = convertToCols(board)
  const diags = convertToDiags(board);
  console.log(diags)
  
  const rowResults = checkThreeRow(board);
  console.log(rowResults)
  const colResults = checkThreeRow(columns)
  const diagResults = checkThreeRow(diags);

  console.log(diagResults)
  console.log(rowResults || colResults)
  return checkWins(rowResults, colResults, diagResults);
}

const board = [[2, 1, 1],
              [0, 1, 1],
              [2, 2, 2]]
console.log(isSolved(board));