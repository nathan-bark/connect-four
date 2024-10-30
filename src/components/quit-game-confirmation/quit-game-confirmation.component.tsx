import React from "react";
import { Link } from "react-router-dom";

import './quit-game-confirmation.styles.scss';

const QuitGameConfirmation = ({setShowQuitConfirmation, setShowInGameMenu}) => {


    const cancelQuit = () => {
        setShowQuitConfirmation(false);
        setShowInGameMenu(true);
    }
    return (
        <div className="quit-game-container">
            <div className="quit-game-confirmation">
                <p>QUIT?</p>
                <button onClick={cancelQuit}>CANCEL</button>
                <Link to="/"><button>QUIT GAME</button></Link>
            </div>
        </div>
    )
};

export default QuitGameConfirmation;