import React from "react";

import "./Footer.sass";

import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__home-btn-bg"></div>
        <FaArrowCircleUp className="footer__home-btn" onClick={scrollToTop} />
      <p className="footer__copyright">©2024 by Danny Silva</p>
      <div className="footer__accent"></div>
    </footer>
  );
}

export default Footer;
