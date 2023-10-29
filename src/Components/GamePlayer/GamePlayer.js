import './GamePlayerStyles.css'
import GameHeader from '../GameHeader/GameHeader'
import { GameBoard } from '../GameBoard/GameBoard';
import ScoreCard from '../ScoreCard/ScoreCard';

const GamePlayer = () => {
  return (
    <div className="game-container">
        <GameHeader />
        <GameBoard/>
        <div className='score-card-p1'>
          <ScoreCard player='player-one' />
        </div>
        <div className='score-card-p2'>
          <ScoreCard player='player-two' />
        </div>
        
        {/* player turn / timer component */}
        {/* bottom shadow/player victory component */}
    </div>
  );
};

export default GamePlayer;
