import React from "react";

import "./tie-box.styles.scss";

const TieBox = ({resetGameBoard}) => {
    return (
        <div className="tie-box-container">
            <div className="tie-box">
                <p>TIE!</p>
                <button onClick={resetGameBoard}>PLAY AGAIN</button>

            </div>
        </div>
    );
};

export default TieBox;