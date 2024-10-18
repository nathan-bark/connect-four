import React from 'react';

import './player-scores.styles.scss';

import playerOne from '../../assets/images/player-one.svg'
import playerTwo from '../../assets/images/player-two.svg'

const PlayerScores = ({playerOneScore, playerTwoScore}) => {
    return(
        <div className='player-scores-container'>
            {/* player one */}
            <img className='player-one-image' src={playerOne} alt="" />
            <div className='player-one-box'>
                <p className='player-one-name'>PLAYER ONE</p>
                <p className='player-one-score'>{playerOneScore}</p>
            </div>

            {/* player two */}
            <div className='player-two-box'>
                <p className='player-two-name'>PLAYER TWO</p>
                <p className='player-two-score'>{playerTwoScore}</p>
            </div>
            <img className='player-two-image' src={playerTwo} alt="" />

        </div>
    )
}

export default PlayerScores;