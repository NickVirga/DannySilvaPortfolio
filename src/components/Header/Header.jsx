import React from "react";
import { Link } from "react-router-dom";

import "./Header.sass"

function Header() {
  return (
    <header className="header">
      
      <Link className="header__logo" to="/"><h1>Danny Silva</h1></Link>
      <h2>Layout Artist & Background Painter</h2>
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
              <Link className="header__link" to="/bgpaint">Layout & Paint</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/bluescluesandyou">Blues Clues and You</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/elinorwonderswhy">Elinor Wonders Why</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/openseason">Open Season: Call of Nature (2023)</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/thesis-em-memoria">Em Memoria</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/pizza-panic-group-film">Pizza Panic!</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/design">Design</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/resume">Resume</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/">About</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
