import React from "react";

import "./restart-confirmation.styles.scss";

const RestartConfirmation = ({
  resetGame,
  setShowResetConfirmation,
  setIsTimerPaused,
  setCountdown,
}) => {
  const confirmReset = () => {
    resetGame();
    setShowResetConfirmation(false);
    setIsTimerPaused(false);
    setCountdown(15);
  };

  const cancelReset = () => {
    setShowResetConfirmation(false);
    setIsTimerPaused(false);
  };
  return (
    <div className="restart-confirmation-container">
      <div className="restart-confirmation">
        <p className="confirmation-text-top">CONFIRM RESET GAME?</p>
        <button className="cancel-button" onClick={cancelReset}>
          CANCEL
        </button>
        <button className="confirm-button" onClick={confirmReset}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default RestartConfirmation;
