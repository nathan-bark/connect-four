import React from 'react';

import './play-vs-player.styles.scss';

import GameHeader from '../../components/game-header/game-header.component.tsx';

// Header:  pause menu overlay including restart button -  Restart Button and logo
// Player scores: Scores for each player with appropriate face image for p1 and p2
// Game board: 6x7 grid with 6 rows and 7 columns - drops appropriate disc on mouseup to
//lowest empty row in clicked column - 4 connected discs wins - stalemate if no winner - 
//touch function blocked when winner banner is shown - winning discs highlighted
// Player Turn Indicator:  Shows which player is up - timer for each player 15 seconds -
//swithc to next player after 15 seconds or disc is played

const PlayVsPlayer = () => {
    return (
        <div className="play-vs-player-container">
            <div className='game-header-container'>
                <GameHeader />
            </div>
        </div>
    );
};

export default PlayVsPlayer;

