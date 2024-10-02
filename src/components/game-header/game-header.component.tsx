import React from "react";

import './game-header.styles.scss';

import logo from '../../assets/images/logo.svg'

const GameHeader = () => {
    return (
        <div className="game-header">
            <button className="menu-button">MENU</button>
            <img src={logo} alt="logo" />
            <button className="restart-button">RESTART</button>
        </div>
    )
}

export default GameHeader;