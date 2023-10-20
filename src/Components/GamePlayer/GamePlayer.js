import './GamePlayerStyles.css'
import GameHeader from '../GameHeader/GameHeader'
import { GameBoard } from '../GameBoard/GameBoard';

const GamePlayer = () => {
  return (
    <div className="game-container">
        <GameHeader />
        <GameBoard/>
        {/* Player scores components */}
        {/* player turn / timer compenent */}
        {/* bottom shadow/player victory component */}
    </div>
  );
};

export default GamePlayer;
