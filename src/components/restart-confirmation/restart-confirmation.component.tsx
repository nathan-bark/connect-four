import React from "react";

import './restart-confirmation.styles.scss';


const RestartConfirmation = ({resetGame, setShowResetConfirmation}) => {

    const confirmReset = () => {
        resetGame();
        setShowResetConfirmation(false);
    }
    return (
        <div className="restart-confirmation-container">
            <div className="restart-confirmation">
                <p className="confirmation-text-top">CONFIRM RESET GAME?</p>
                <button className="cancel-button" onClick={() => setShowResetConfirmation(false)}>CANCEL</button>
                <button className="confirm-button" onClick={confirmReset}>CONFIRM</button>
                
            </div>

        </div>
    )
}

export default RestartConfirmation;