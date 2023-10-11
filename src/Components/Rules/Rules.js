import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import './RulesStyles.css'
import rulesDone from '../../assets/images/icon-check.svg'

const Rules = () => {
  const navigate = useNavigate();
  const doneClick = useCallback(() => navigate("/"), [navigate]);
  return (
    <div className="rules-container">
      <h1 className="rules-title">RULES</h1>
      <h2 className="rules-sub-heading">OBJECTIVE</h2>
      <p className="rules-text">
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <h2 className="rules-sub-heading">HOW TO PLAY</h2>
      <ol className="rules-text">
        <li>Red goes first in the first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>
      <button className="rules-done" onClick={doneClick}><img src={rulesDone} alt="Done" /></button>
    </div>
  );
};

export default Rules;
