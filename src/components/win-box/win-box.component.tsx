import React from "react";

import "./win-box.styles.scss";

const WinBox = ({ gameWon, winner, resetGameBoard }) => {
  const name = winner === "player-one" ? "PLAYER 1" : "PLAYER 2";
  return (
    <div className="win-box-container">
      <div className="win-box">
        <p>{name}</p>
        <p>WINS</p>
        <button onClick={resetGameBoard}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default WinBox;
