import React from "react";
import { Link } from "react-router-dom";

import "./game-rules.styles.scss";

import checkIcon from "../../assets/images/icon-check.svg";

const GameRules = () => {
  return (
    <div className="game-rules-container">
      <div className="game-rules">
        <h1 className="game-rules-title">RULES</h1>
        <h2 className="game-rules-subtitle">OBJECTIVE</h2>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>

        <div className="instructions-container">
          <h2 className="game-rules-subtitle">HOW TO PLAY</h2>
          <ol className="instructions">
            <li>Red goes first in the first game.</li>
            <li>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </div>

        <Link className="check-button" to="/">
          <img src={checkIcon} alt="check mark button" />
        </Link>
      </div>
    </div>
  );
};

export default GameRules;
