import './GamePlayerStyles.css'
import GameHeader from '../GameHeader/GameHeader'
import { GameBoard } from '../GameBoard/GameBoard';
import ScoreCard from '../ScoreCard/ScoreCard';
import TurnTimer from '../TurnTimer/TurnTimer';
import BottomBanner from '../BottomBanner/BottomBanner';

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
        <BottomBanner />
    </div>
  );
};

export default GamePlayer;
