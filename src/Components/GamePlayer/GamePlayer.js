import "./GamePlayerStyles.css";
import GameHeader from "../GameHeader/GameHeader";
import ColumnIndicator from "../ColumnIndicator/ColumnIndicator";
import GameBoard from "../GameBoard/GameBoard";
import ScoreCard from "../ScoreCard/ScoreCard";
import TurnTimer from "../TurnTimer/TurnTimer";
import { useState } from "react";

const GamePlayer = () => {
  const [position, setPosition] = useState({ x: 165 });

  // 1st column = 165px if between 112 and 208
  // 2nd column = 255px if between 208 and 298
  //3rd col = 342px beetween 298 and 386
  // 4th col = 430px = between 386 and 475
  // 5th col = 520 = between 475 and 563
  //  6th col = 607 = between 563 and 650
  //  7th col = 695 = to between 650 to 740

  const indicatorPosition = (e) => {
    let leftPosition = e.clientX - 475;

    switch (true) {
      case leftPosition >= 108 && leftPosition < 208:
        leftPosition = 165;
        break;
      case leftPosition >= 208 && leftPosition < 298:
        leftPosition = 255;
        break;
      case leftPosition >= 298 && leftPosition < 386:
        leftPosition = 342;
        break;
      case leftPosition >= 386 && leftPosition < 475:
        leftPosition = 430;
        break;
      case leftPosition >= 475 && leftPosition < 563:
        leftPosition = 520;
        break;
        case leftPosition >= 563 && leftPosition < 650:
          leftPosition = 607;
          break;
          case leftPosition >= 650 && leftPosition <= 740:
            leftPosition = 695;
            break;
      default:
        console.log("broke");
    }

    setPosition({ x: leftPosition });
    console.log(position);
  };

  return (
    <div className="game-container">
      <GameHeader />
      <ColumnIndicator position={position} />
      <GameBoard indicatorPosition={indicatorPosition} />
      <div className="score-card-p1">
        <ScoreCard player="player-one" />
      </div>
      <div className="score-card-p2">
        <ScoreCard player="player-two" />
      </div>
      <TurnTimer />
    </div>
  );
};

export default GamePlayer;
