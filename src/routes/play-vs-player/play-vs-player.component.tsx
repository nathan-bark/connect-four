import React from "react";
import { useState } from "react";

import "./play-vs-player.styles.scss";

import GameHeader from "../../components/game-header/game-header.component.tsx";
import PlayerScores from "../../components/player-scores/player-scores.component.tsx";
import GameBoard from "../../components/game-board/game-board.component.tsx";
import PlayerTurnTimer from "../../components/player-turn-timer/player-turn-timer.tsx";
import WinBox from "../../components/win-box/win-box.component.tsx";
import Footer from "../../components/footer/footer.component.tsx";

// Header:  pause menu overlay including restart button -  Restart Button and logo
// Player scores: Scores for each player with appropriate face image for p1 and p2
// Game board: 6x7 grid with 6 rows and 7 columns - drops appropriate disc on mouseup to
//lowest empty row in clicked column - 4 connected discs wins - stalemate if no winner -
//touch function blocked when winner banner is shown - winning discs highlighted
// Player Turn Indicator:  Shows which player is up - timer for each player 15 seconds -
//swithc to next player after 15 seconds or disc is played

const PlayVsPlayer = () => {
  let [winner, setWinner] = useState<string>("none");
  let [gameWon, setGameWon] = useState(false);
  let [playerOne, setPlayerOne] = useState(true);
  let [playerOneScore, setPlayerOneScore] = useState<number>(0);
  let [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const originalGrid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  let [gameGrid, setGameGrid] = useState(originalGrid);


  const resetGameBoard = () => {
    setWinner("none");
    setGameWon(false);

    //reset grid
    setGameGrid(originalGrid);

    //remove winning circles
    const winningCircle = document.querySelectorAll(".win-circle");
    winningCircle.forEach((circle) => {
      circle.remove();
    });

    //remove tokens
    const tokenList = document.querySelector(".token-grid");
    const tokenListChildren = tokenList?.children;
    if (tokenListChildren) {
      Array.from(tokenListChildren).forEach((token) => {
        token.removeAttribute("style");
      });
    }
  };

  return (
    <div className="play-vs-player-container">
      <GameHeader />
      <PlayerScores
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <GameBoard
        setWinner={setWinner}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
        setPlayerOneScore={setPlayerOneScore}
        setPlayerTwoScore={setPlayerTwoScore}
        gameWon={gameWon}
        setGameWon={setGameWon}
        gameGrid={gameGrid}
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        setGameGrid={setGameGrid}
      />
      {gameWon ? (
        <WinBox
          gameWon={gameWon}
          winner={winner}
          resetGameBoard={resetGameBoard}
        />
      ) : (
        <PlayerTurnTimer playerOne={playerOne} setPlayerOne={setPlayerOne}/>)}

      <Footer winner={winner} />
    </div>
  );
};

export default PlayVsPlayer;
