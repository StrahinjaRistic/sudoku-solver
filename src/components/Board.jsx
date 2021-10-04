import Square from 'components/Square';

import styled from 'styled-components';

const Game = styled.section`
  width: 100%;
  @media screen and (max-width: 670px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const GameTable = styled.table`
  border: 3px solid grey;
  border-collapse: collapse;
  margin: 20px auto;
`;

const TableRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 3px solid grey;
  }
`;

const Board = (props) => {
  const { solved } = props;

  const generateBoard = () => {
    const table = [];
    for (let i = 0; i < solved.length; i++) {
      let currRow = [];
      for (let j = 0; j < solved[i].length; j++) {
        let currSquare = (
          <Square
            key={'' + i + j}
            value={solved[i][j]}
            rowIndex={i}
            colIndex={j}
          />
        );
        currRow.push(currSquare);
      }
      table.push(<TableRow key={i}>{currRow}</TableRow>);
    }
    return table;
  };
  return (
    <Game>
      <GameTable>
        <tbody>{generateBoard()}</tbody>
      </GameTable>
    </Game>
  );
};

export default Board;
