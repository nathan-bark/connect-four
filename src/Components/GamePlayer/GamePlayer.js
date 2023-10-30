import "./GamePlayerStyles.css";
import GameHeader from "../GameHeader/GameHeader";
import ColumnIndicator from "../ColumnIndicator/ColumnIndicator";
import GameBoard from "../GameBoard/GameBoard";
import ScoreCard from "../ScoreCard/ScoreCard";
import TurnTimer from '../TurnTimer/TurnTimer'

const GamePlayer = () => {
  return (
    <div className="game-container">
      <GameHeader />
      <ColumnIndicator />
      <GameBoard />
      <div className="score-card-p1">
        <ScoreCard player="player-one" />
      </div>
      <div className="score-card-p2">
        <ScoreCard player="player-two" />
      </div>
      <TurnTimer />

    </div>
  );
};

export default GamePlayer;
