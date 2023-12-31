import './GameBoard.css'
import whiteBoardLarge from "../../assets/images/board-layer-white-large.svg";
import blackBoardLarge from "../../assets/images/board-layer-black-large.svg";
const GameBoard = ({indicatorPosition}) => {
  return (
    <div className="board-container" onMouseMove={indicatorPosition}>
      <img className="black-board" src={blackBoardLarge} alt="shadow of board" />
      <img className="white-board" src={whiteBoardLarge} alt="white board"  />
    </div>
  );
};

export default GameBoard;
