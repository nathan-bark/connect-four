import React from "react";
import { useState } from "react";

import "./play-vs-player.styles.scss";

import GameHeader from "../../components/game-header/game-header.component.tsx";
import PlayerScores from "../../components/player-scores/player-scores.component.tsx";
import GameBoard from "../../components/game-board/game-board.component.tsx";
import PlayerTurnTimer from "../../components/player-turn-timer/player-turn-timer.tsx";
import WinBox from "../../components/win-box/win-box.component.tsx";
import Footer from "../../components/footer/footer.component.tsx";
import RestartConfirmation from "../../components/restart-confirmation/restart-confirmation.component.tsx";
import InGameMenu from "../../components/in-game-menu/in-game-menu.component.tsx";
import QuitGameConfirmation from "../../components/quit-game-confirmation/quit-game-confirmation.component.tsx";

// Header:  pause menu overlay including restart button -  Restart Button and logo
// Player scores: Scores for each player with appropriate face image for p1 and p2
// Game board: 6x7 grid with 6 rows and 7 columns - drops appropriate disc on mouseup to
//lowest empty row in clicked column - 4 connected discs wins - stalemate if no winner -
//touch function blocked when winner banner is shown - winning discs highlighted
// Player Turn Indicator:  Shows which player is up - timer for each player 15 seconds -
//swithc to next player after 15 seconds or disc is played

const PlayVsPlayer = () => {
  let [winner, setWinner] = useState<string>("none");
  let [gameWon, setGameWon] = useState<boolean>(false);
  let [playerOne, setPlayerOne] = useState<boolean>(true);
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

  let [gameGrid, setGameGrid] = useState<number[][]>(originalGrid);
  let [showResetConfirmation, setShowResetConfirmation] =
    useState<boolean>(false);
  let [showInGameMenu, setShowInGameMenu] = useState<boolean>(false);
  let [showQuitConfirmation, setShowQuitConfirmation] =
    useState<boolean>(false);
  let [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(15);

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

  const resetGame = () => {
    resetGameBoard();
    setPlayerOne(!playerOne);
    setPlayerOne(true);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  return (
    <div className="play-vs-player-container">
      <GameHeader
        setShowResetConfirmation={setShowResetConfirmation}
        setIsTimerPaused={setIsTimerPaused}
        setShowInGameMenu={setShowInGameMenu}
      />
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
        <PlayerTurnTimer
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          isTimerPaused={isTimerPaused}
          countdown={countdown}
          setCountdown={setCountdown}
        />
      )}

      <Footer winner={winner} />

      {showResetConfirmation && (
        <RestartConfirmation
          resetGame={resetGame}
          setShowResetConfirmation={setShowResetConfirmation}
          setIsTimerPaused={setIsTimerPaused}
          setCountdown={setCountdown}
        />
      )}

      {showInGameMenu && (
        <InGameMenu
          setShowInGameMenu={setShowInGameMenu}
          setIsTimerPaused={setIsTimerPaused}
          resetGame={resetGame}
          setCountdown={setCountdown}
          setShowResetConfirmation={setShowResetConfirmation}
          setShowQuitConfirmation={setShowQuitConfirmation}
        />
      )}

      {showQuitConfirmation && (
        <QuitGameConfirmation
          setShowQuitConfirmation={setShowQuitConfirmation}
          setShowInGameMenu={setShowInGameMenu}
        />
      )}
    </div>
  );
};

export default PlayVsPlayer;
