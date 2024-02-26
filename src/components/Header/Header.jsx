import React from "react";
import { Link } from "react-router-dom";

import "./Header.sass"

function Header() {
  return (
    <header className="header">
      <h1>Danny Silva</h1>
      <div>
        {/* <a href="../index.html"
          ><img
            className="top-header__logo"
            src="../assets/logos/Logo-bandsite.svg"
            alt="BandSite logo"
        /></a> */}
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/bgpaint">Layout & Paint</Link>
            </li>
            <li className="header__item">
              <Link to="/bluescluesandyou">Blues Clues and You</Link>
            </li>
            <li className="header__item">
              <Link to="/elinorwonderswhy">Elinor Wonders Why</Link>
            </li>
            <li className="header__item">
              <Link to="/openseason">Open Season: Call of Nature (2023)</Link>
            </li>
            <li className="header__item">
              <Link to="/thesis-em-memoria">Em Memoria</Link>
            </li>
            <li className="header__item">
              <Link to="/pizza-panic-group-film">Pizza Panic!</Link>
            </li>
            <li className="header__item">
              <Link to="/design">Design</Link>
            </li>
            <li className="header__item">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="header__item">
              <Link to="/">About</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
