import React from "react";

import './player-turn-timer.styles.scss';

const PlayerTurnTimer = ({playerOne}) => {
    return(
        <div className="turn-timer-container">
            <div className={playerOne ? "turn-timer player-one" : "turn-timer player-two"}>
                <p>{playerOne ? "PLAYER 1" : "PLAYER 2"}'S TURN</p>
                <p>15s</p>
            </div>

        </div>
    )
}

export default PlayerTurnTimer;