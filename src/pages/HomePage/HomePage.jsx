import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.sass";

// import profilePic from "../../assets/images/misc/AVATAR.png";

function HomePage() {
  return (
    <section className="about">
      <div className="about__img-container">
        <img className="about__profile-pic" src={"/images/AVATAR.png"}></img>
      </div>
      <div className="about__content">
        <h1 className="about__title">ABOUT</h1>
        <p className="about__bio">
          Danny is an experienced background painter and layout artist working
          in animation. Currently, they are working with 9Story/Brown Bag Films
          on Sony Pictures Animation's <i>Open Season: Call of Nature</i> as a
          background artist and previously worked in the same role on Blues
          Clues and You. With experience working on 2D, 3D, and live-action
          productions, they would make an excellent addition to any production
          team. 
        </p>
        <Link className="about__resume-link" to="/resume">
          RESUME
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
