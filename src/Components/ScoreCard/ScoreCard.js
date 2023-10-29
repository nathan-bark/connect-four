import './ScoreCardStyles.css'
import p1Icon from "../../assets/images/player-one.svg";
import p2Icon from "../../assets/images/player-two.svg";

const ScoreCard = ({ player }) => {
  const playerOneOrTwo = player === "player-one" ? "PLAYER 1" : "PLAYER 2";
  const playerIcon = player === "player-one" ? p1Icon : p2Icon;

  return (
    <div className="score-card-container">
      <img src={playerIcon} alt="player icon" className='player-icon' />
      <p className="player-title">{playerOneOrTwo}</p>
      <p className="player-score">0</p>
    </div>
  );
};

export default ScoreCard;
