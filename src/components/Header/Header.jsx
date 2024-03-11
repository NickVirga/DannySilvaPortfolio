import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.sass";

import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";

function Header() {
  const [isProfWorkMenuVisible, setProfWorkMenuVisible] = useState(false);
  const [isFilmsMenuVisible, setFilmsMenuVisible] = useState(false);
  let leaveProfWorkTimeout;
  let leaveFilmsTimeout;

  const handleMouseEnterProfWorkMenu = () => {
    clearTimeout(leaveProfWorkTimeout);
    setFilmsMenuVisible(false);
    setProfWorkMenuVisible(true);
  };

  const handleMouseLeaveProfWorkMenu = () => {
    leaveProfWorkTimeout = setTimeout(() => {
      setProfWorkMenuVisible(false);
    }, 500);
  };

  const handleMouseEnterFilmsMenu = () => {
    clearTimeout(leaveFilmsTimeout);
    setProfWorkMenuVisible(false);
    setFilmsMenuVisible(true);
  };

  const handleMouseLeaveFilmsMenu = () => {
    leaveFilmsTimeout = setTimeout(() => {
      setFilmsMenuVisible(false);
    }, 500);
  };

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <h1 className="header__title">Danny Silva</h1>
      </Link>
      <h2 className="header__subtitle">Layout Artist & Background Painter</h2>
      <div>
        <nav className="header__nav">
          <ul className="header__list header__list--wraps">
            <li className="header__item">
              <Link className="header__link" to="/bgpaint">
                Layout & Paint
              </Link>
            </li>
            <li
              className="header__item--submenu"
              onMouseEnter={handleMouseEnterProfWorkMenu}
              onMouseLeave={handleMouseLeaveProfWorkMenu}
            >
              Professional Work
              {isProfWorkMenuVisible && (
                <ul className="header__drop-list">
                  <li className="header__item">
                    <Link
                      className="header__link header__link--submenu"
                      to="/bluescluesandyou"
                    >
                      Blues Clues and You
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link
                      className="header__link header__link--submenu"
                      to="/elinorwonderswhy"
                    >
                      Elinor Wonders Why
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link
                      className="header__link header__link--submenu"
                      to="/openseason"
                    >
                      Open Season: Call of Nature (2023)
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="header__item--submenu"
              onMouseEnter={handleMouseEnterFilmsMenu}
              onMouseLeave={handleMouseLeaveFilmsMenu}
            >
              Films
              {isFilmsMenuVisible && (
                <ul className="header__drop-list">
                  <li className="header__item">
                    <Link
                      className="header__link header__link--submenu"
                      to="/thesis-em-memoria"
                    >
                      Em Memoria
                    </Link>
                  </li>
                  <li className="header__item">
                    <Link
                      className="header__link header__link--submenu"
                      to="/pizza-panic-group-film"
                    >
                      Pizza Panic!
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="header__item">
              <a
                className="header__link"
                href="https://www.instagram.com/_okdanny/"
                target="_blank"
              >
                Personal Work
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link"
                href="https://drive.google.com/file/d/14_w0y63uVIi85OGG6Yx8Gef0n6952Ll_/view?usp=sharing"
                target="_blank"
                aria-label="RESUME"
              >
                Resume
              </a>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/">
                About
              </Link>
            </li>
          </ul>
          <ul className="header__list">
            <li className="header__item">
              <a
                className="header__contact-link"
                href="mailto:dannysilvaart@gmail.com"
                target="_blank"
                aria-label="CONTACT"
              >
                CONTACT
              </a>
            </li>
            <li className="header__item">
              <a
                href="https://www.linkedin.com/in/dannysilvaart"
                target="_blank"
              >
                <img src={linkedInIcon} />
              </a>
            </li>
            <li className="header__item">
              <a href="https://twitter.com/_okdanny" target="_blank">
                <img src={twitterIcon} />
              </a>
            </li>
            <li className="header__item">
              <a href="https://instagram.com/_okdanny" target="_blank">
                <img src={instagramIcon} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
