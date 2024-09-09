//Imports
import React from 'react';

import logo from '../assets/images/logo.svg'
import twoPLayers from '../assets/images/player-vs-player.svg'

//Main Component
const MainMenu = () => {
    return (
        <div className="main-menu-container">
            <div className="main-menu">
                <img className="main-menu-logo" src={logo} alt="logo" />
                <button>PLAY VS PLAYER <img src={twoPLayers} alt="2 player icon" /></button>
                <button>GAME RULES</button>
            </div>

        </div>
    )
}

//Exports
export default MainMenu;