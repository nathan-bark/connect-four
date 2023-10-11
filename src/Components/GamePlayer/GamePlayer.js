import './GamePlayerStyles.css'

import whiteBoardLarge from "../../assets/images/board-layer-white-large.svg";
import blackBoardLarge from "../../assets/images/board-layer-black-large.svg";
import GameHeader from '../GameHeader/GameHeader'
const GamePlayer = () => {
  return (
    <div className="game-container">
        <GameHeader />
        {/* Board component */}
        {/* Player scores components */}
        {/* player turn / timer compenent */}
        {/* bottom shadow/player victory component */}
    </div>
  );
};

export default GamePlayer;
