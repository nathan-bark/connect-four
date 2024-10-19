import React, { useEffect, useState } from "react";

import "./player-turn-timer.styles.scss";

const PlayerTurnTimer = ({ playerOne, setPlayerOne }) => {
  const [countdown, setCountdown] = useState(15);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          setPlayerOne(!playerOne);
        }
        return prevCountdown - 1;
      });
      
      
    }, 1000);
  
    return () => {
      clearInterval(timer);
      setCountdown(15);
    };
  }, [playerOne, setPlayerOne]);
 
 useEffect(() => {
     console.log(playerOne);
     
 }, [playerOne]);
  return (
    <div className="turn-timer-container">
      <div
        className={
          playerOne ? "turn-timer player-one" : "turn-timer player-two"
        }
      >
        <p>{playerOne ? "PLAYER 1" : "PLAYER 2"}'S TURN</p>
        <p>{countdown}s</p>
      </div>
    </div>
  );
};

export default PlayerTurnTimer;
