import React from "react";
import { useState } from "react";

import "./game-board.styles.scss";

import bottomLayerSmall from "../../assets/images/board-layer-black-small.svg";
import topLayersmall from "../../assets/images/board-layer-white-small.svg";
import yellowToken from "../../assets/images/counter-yellow-small.svg";
import pinkToken from "../../assets/images/counter-red-small.svg";

const gameGrid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const GameBoard = ({setWinner}) => {
  let [playerOne, setPlayerOne] = useState(true);
  let [gameWon, setGameWon] = useState(false);

  const winningLines = (cells: number[][]) => {
    if (cells.length === 4) {
      cells.forEach((token: number[]) => {
        const circle = document.createElement("div");
        circle.classList.add("win-circle");
        const selectorCell = document.querySelector(
          `.selector-${token[0]}-${token[1]}`
        ) as HTMLDivElement;
        selectorCell.appendChild(circle);
        selectorCell.style.display = "flex";
        selectorCell.style.justifyContent = "center";
        selectorCell.style.alignItems = "center";
      });
    }
    setGameWon(true);
    
  };

  const winCheck = (row: number, col: number, setWinner: (winner: string) => void) => {
    let playerOneCounter: number = 0;
    let playerTwoCounter: number = 0;
    let winningTokens: number[][] = [];

    //check row for four consecutive 1's or 2's
    for (let i = 0; i < 7; i++) {
      if (gameGrid[row][i] === 1) {
        playerOneCounter++;
        playerTwoCounter = 0;
        winningTokens.push([row, i]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else if (gameGrid[row][i] === 2) {
        playerTwoCounter++;
        playerOneCounter = 0;
        winningTokens.push([row, i]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else {
        playerOneCounter = 0;
        playerTwoCounter = 0;
        winningTokens = [];
      }
      if (playerOneCounter === 4) {
        console.log("Winner!", winningTokens);
        winningLines(winningTokens);
        setWinner('player-one');
      } else if (playerTwoCounter === 4) {
        console.log("Winner!", winningTokens);
        winningLines(winningTokens);
        setWinner('player-two');
      }
    }

    // check column for four consecutive 1's or 2's
    playerOneCounter = 0;
    playerTwoCounter = 0;
    winningTokens = [];
    for (let i = 0; i < gameGrid.length; i++) {
      if (gameGrid[i][col] === 1) {
        playerOneCounter++;
        playerTwoCounter = 0;
        winningTokens.push([i, col]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else if (gameGrid[i][col] === 2) {
        playerTwoCounter++;
        playerOneCounter = 0;
        winningTokens.push([i, col]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else {
        playerOneCounter = 0;
        playerTwoCounter = 0;
        winningTokens = [];
      }
      if (playerOneCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-one');
      } else if (playerTwoCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-two');
      }
    }

    // Check diagonal bottom-left to top-right
    let rowOffset = row;
    let colOffset = col;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    winningTokens = [];
    while (rowOffset < gameGrid.length && colOffset >= 0) {
      if (gameGrid[rowOffset][colOffset] === 1) {
        playerOneCounter++;
        playerTwoCounter = 0;
        winningTokens.push([rowOffset, colOffset]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else if (gameGrid[rowOffset][colOffset] === 2) {
        playerTwoCounter++;
        playerOneCounter = 0;
        winningTokens.push([rowOffset, colOffset]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else {
        playerOneCounter = 0;
        playerTwoCounter = 0;
        winningTokens = [];
      }
      if (playerOneCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-one');
      } else if (playerTwoCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-two');
      }
      rowOffset++;
      colOffset--;
    }

    // Check diagonal bottom-right to top-left
    rowOffset = row;
    colOffset = col;
    playerOneCounter = 0;
    playerTwoCounter = 0;
    winningTokens = [];
    while (rowOffset < gameGrid.length && colOffset < gameGrid[0].length) {
      if (gameGrid[rowOffset][colOffset] === 1) {
        playerOneCounter++;
        playerTwoCounter = 0;
        winningTokens.push([rowOffset, colOffset]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else if (gameGrid[rowOffset][colOffset] === 2) {
        playerTwoCounter++;
        playerOneCounter = 0;
        winningTokens.push([rowOffset, colOffset]);
        if (winningTokens.length > 4) {
          winningTokens.shift();
        }
      } else {
        playerOneCounter = 0;
        playerTwoCounter = 0;
        winningTokens = [];
      }
      if (playerOneCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-one');
      } else if (playerTwoCounter === 4) {
        winningLines(winningTokens);
        setWinner('player-two');
      }
      rowOffset++;
      colOffset++;
    }
    
  };

  const addTokenOnClick = (key) => (e) => {
    let row: number = 5;
    const col: number = key.split("-")[1];

    while (row >= 0) {
      if (gameGrid[row][col] === 0) {
        gameGrid[row][col] = playerOne ? 1 : 2;

        setPlayerOne(!playerOne);

        const tokenCell = document.querySelector(
          `.token-${row}${col}`
        ) as HTMLDivElement;
        tokenCell.style.backgroundImage = playerOne
          ? `url(${yellowToken})`
          : `url(${pinkToken})`;
        tokenCell.style.backgroundSize = "100%";
        tokenCell.style.backgroundRepeat = "no-repeat";
        tokenCell.style.backgroundPosition = "center";

        winCheck(row, col, setWinner);

        break;
      }
      row--;
    }
  };

  return (
    <div className="board-container">
      <img className="bottom-layer" src={bottomLayerSmall} alt="bottom layer" />
      <div className="token-grid">
        {Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <div
              key={`${r}-${c}`}
              className={`token-${r}${c}`}
              style={{ gridColumn: c + 1, gridRow: r + 1 }}
            ></div>
          ))
        )}
      </div>
      <img className="top-layer" src={topLayersmall} alt="top layer" />
      <div className="selector-grid">
        {Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <div
              key={`${r}-${c}`}
              className={`selector-${r}-${c}`}
              style={{ gridColumn: c + 1, gridRow: r + 1 }}
              onClick={!gameWon ? addTokenOnClick(`${r}-${c}`): undefined}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;
