import ReactDom from "react-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HamburgerMenu.sass";

import { IoClose } from "react-icons/io5";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

function HambugerMenu({ open, onClose }) {
  if (!open) return null;

  const portalContainer = document.getElementById("portal");

  if (!portalContainer) {
    return null;
  }

  const [isProfWorkMenuVisible, setProfWorkMenuVisible] = useState(false);
  const [isFilmsMenuVisible, setFilmsMenuVisible] = useState(false);

  const toggleProfWorkSubMenu = () => {
    setProfWorkMenuVisible(!isProfWorkMenuVisible);
    setFilmsMenuVisible(false);
  };

  const toggleFilmsSubMenu = () => {
    setFilmsMenuVisible(!isFilmsMenuVisible);
    setProfWorkMenuVisible(false);
  };
  
  return ReactDom.createPortal(
    <>
      <div className="hamburger__overlay" onClick={onClose}></div>
      <nav className={open ? "hamburger" : "hamburger--hidden"}>
        <IoClose className="hamburger__close-icon" onClick={onClose} />
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <Link className="hamburger__link" to="/bgpaint">
              Layout & Paint
            </Link>
          </li>
          <li
            className="hamburger__item hamburger__item--submenu"
            onClick={toggleProfWorkSubMenu}
          >
            Professional Work
          </li>
          {isProfWorkMenuVisible && (
            <ul className="hamburger__list hamburger__list--submenu">
              <li className="hamburger__item">
                <Link className="hamburger__sub-link" to="/bluescluesandyou">
                  Blues Clues and You
                </Link>
              </li>
              <li className="hamburger__item">
                <Link className="hamburger__sub-link" to="/elinorwonderswhy">
                  Elinor Wonders Why
                </Link>
              </li>
              <li className="hamburger__item">
                <Link className="hamburger__sub-link" to="/openseason">
                  Open Season: Call of Nature (2023)
                </Link>
              </li>
            </ul>
          )}

          <li
            className="hamburger__item hamburger__item--submenu"
            onClick={toggleFilmsSubMenu}
          >
            Films
          </li>
          {isFilmsMenuVisible && (
            <ul className="hamburger__list hamburger__list--submenu">
              <li className="hamburger__item">
                <Link className="hamburger__sub-link" to="/thesis-em-memoria">
                  Em Memoria
                </Link>
              </li>
              <li className="hamburger__item">
                <Link
                  className="hamburger__sub-link"
                  to="/pizza-panic-group-film"
                >
                  Pizza Panic!
                </Link>
              </li>
            </ul>
          )}

          <li className="hamburger__item">
            <a
              className="hamburger__link"
              href="https://www.instagram.com/_okdanny/"
              target="_blank"
            >
              Personal Work
            </a>
          </li>
          <li className="hamburger__item">
            <a
              className="hamburger__link"
              href="https://drive.google.com/file/d/14_w0y63uVIi85OGG6Yx8Gef0n6952Ll_/view?usp=sharing"
              target="_blank"
              aria-label="RESUME"
            >
              Resume
            </a>
          </li>
          <li className="hamburger__item">
            <Link className="hamburger__link" to="/">
              About
            </Link>
          </li>
        </ul>
        <ul className="hamburger__socials-list">
          <li className="hamburger__socials-item">
            <a
              className="hamburger__socials-link"
              href="mailto:dannysilvaart@gmail.com"
              target="_blank"
              aria-label="CONTACT"
            >
              <IoMail></IoMail>
            </a>
          </li>
          <li className="hamburger__socials-item">
            <a
              className="hamburger__socials-link"
              href="https://www.linkedin.com/in/dannysilvaart"
              target="_blank"
            >
              <IoLogoLinkedin></IoLogoLinkedin>
            </a>
          </li>
          <li className="hamburger__socials-item">
            <a
              className="hamburger__socials-link"
              href="https://twitter.com/_okdanny"
              target="_blank"
            >
              <IoLogoTwitter></IoLogoTwitter>
            </a>
          </li>
          <li className="hamburger__socials-item">
            <a
              className="hamburger__socials-link"
              href="https://instagram.com/_okdanny"
              target="_blank"
            >
              <IoLogoInstagram></IoLogoInstagram>
            </a>
          </li>
        </ul>
      </nav>
    </>,
    portalContainer
  );
}

export default HambugerMenu;
