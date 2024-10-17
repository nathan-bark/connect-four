import React from "react";

import "./footer.styles.scss";

const Footer = ({ winner }) => {
  const footerClass =
    winner === "player-one"
      ? "footer-player-one"
      : winner === "player-two"
      ? "footer-player-two"
      : undefined;
      
  return <div className={`footer-container ${footerClass}`}></div>;
};

export default Footer;
