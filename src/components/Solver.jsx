import Board from 'components/Board';

const getRows = (row, number, board) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === number) {
      return true;
    }
  }
  return false;
};
const getColumns = (col, number, board) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === number) {
      return true;
    }
  }
  return false;
};
const getBox = (row, col, number, board) => {
  let r = row - (row % 3);
  let c = col - (col % 3);
  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (board[i][j] === number) {
        return true;
      }
    }
  }
  return false;
};

const isAllowed = (row, col, number, board) => {
  return !(
    getRows(row, number, board) ||
    getColumns(col, number, board) ||
    getBox(row, col, number, board)
  );
};

const sudokuSolver = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let number = 1; number <= 9; number++) {
          if (isAllowed(row, col, number, board)) {
            board[row][col] = number;
            if (sudokuSolver(board)) {
              return board;
            } else {
              board[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return board;
};

const Solver = () => {
  let board = [
    [0, 2, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  return <Board solved={sudokuSolver(board)} />;
};

export default Solver;
