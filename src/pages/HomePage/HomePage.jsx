import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.sass";

import profilePic from "../../assets/images/about/danny-profile-pic-temp.png";

function HomePage() {
  return (
    <section className="about">
      <img className="about__profile-pic" src={profilePic}></img>
      <div className="about__content">
        <h1>ABOUT</h1>
        <p className="about__bio">
          Danny is an experienced background painter and layout artist working
          in animation. Currently, they are working with 9Story/Brown Bag Films
          on Sony Pictures Animation's Open Season: Call of Nature as a
          background artist and previously worked in the same role on Blues
          Clues and You. With experience working on 2D, 3D, and live-action
          productions, they would make an excellent addition to any production
          team.
        </p>
        <Link className="about__resume-link" to="/resume">Resume</Link>
      </div>
    </section>
  );
}

export default HomePage;
