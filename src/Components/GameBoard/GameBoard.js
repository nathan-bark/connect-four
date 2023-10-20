import './GameBoard.css'
import whiteBoardLarge from "../../assets/images/board-layer-white-large.svg";
import blackBoardLarge from "../../assets/images/board-layer-black-large.svg";

export const GameBoard = () => {
  return (
    <div className="board-container">
      <img className="black-board" src={blackBoardLarge} alt="shadow of board" />
      <img className="white-board" src={whiteBoardLarge} alt="white board" />
    </div>
  );
};
