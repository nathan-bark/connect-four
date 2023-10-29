import './GamePlayerStyles.css'
import GameHeader from '../GameHeader/GameHeader'
import { GameBoard } from '../GameBoard/GameBoard';
import ScoreCard from '../ScoreCard/ScoreCard';
import TurnTimer from '../TurnTimer/TurnTimer';

const GamePlayer = () => {
  return (
    <div className="game-container">
        <GameHeader />
        {/* colun indicator component */}
        <GameBoard/>
        <div className='score-card-p1'>
          <ScoreCard player='player-one' />
        </div>
        <div className='score-card-p2'>
          <ScoreCard player='player-two' />
        </div>
        
        <TurnTimer />
        {/* bottom shadow/player victory component */}
    </div>
  );
};

export default GamePlayer;
