import "./TurnTimerStyles.css";
import p1Timer from "../../assets/images/turn-background-red.svg";

const TurnTimer = () => {
  return (
    <div className="timer-container">
      <img src={p1Timer} alt="timer" />
      <div className="timer-text">
        <p className="player-turn">PLAYER 1'S TURN</p>
        <p className="time-countdown">30s</p>
      </div>
    </div>
  );
};

export default TurnTimer;
