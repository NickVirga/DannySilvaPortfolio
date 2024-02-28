import React from "react";
import { Link } from "react-router-dom";

import "./Header.sass";

import linkedInIcon from "../../assets/icons/linkedin-icon.png"
import twitterIcon from "../../assets/icons/twitter-icon.png"
import instagramIcon from "../../assets/icons/instagram-icon.png"

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <h1>Danny Silva</h1>
      </Link>
      <h2>Layout Artist & Background Painter</h2>
      <div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link" to="/bgpaint">
                Layout & Paint
              </Link>
            </li>
            <li className="header__item">Professional Work</li>
            {/* <li className="header__item">
              <Link className="header__link" to="/bluescluesandyou">Blues Clues and You</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/elinorwonderswhy">Elinor Wonders Why</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/openseason">Open Season: Call of Nature (2023)</Link>
            </li> */}
            <li className="header__item">
              <Link className="header__link" to="/thesis-em-memoria">
                Em Memoria
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/pizza-panic-group-film">
                Pizza Panic!
              </Link>
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
            {/* <li className="header__item">
              <Link className="header__link" to="/design">Design</Link>
            </li> */}
            <li className="header__item">
              <Link className="header__link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/">
                About
              </Link>
            </li>
            <li className="header__item">
              <a className="about__resume-link" href="mailto:dannysilvaart@gmail.com">
                CONTACT
              </a>
            </li>
            <li className="header__item">
              <img src={linkedInIcon} />
            </li>
            <li className="header__item">
              <img src={twitterIcon} />
            </li>
            <li className="header__item">
              <img src={instagramIcon} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
