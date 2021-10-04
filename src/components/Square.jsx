import styled from 'styled-components';

const TableCell = styled.td`
  &:nth-child(3n) {
    border-right: 3px solid grey;
  }
  height: 2em;
  width: 2em;
  border: 1px solid #ccc;
  text-align: center;
  outline: none;
`;

const SquareInput = styled.input`
  font-size: 2.5em;
  width: 1em;
  border: none;
  text-align: center;
  outline: none;
  @media screen and (max-width: 670px) {
    font-size: 1.5em;
  }
`;

const Square = (props) => {
  let { value } = props;
  return (
    <TableCell>
      <SquareInput type="text" value={value} disabled />
    </TableCell>
  );
};

export default Square;
