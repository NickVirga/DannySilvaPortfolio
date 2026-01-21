import Hero from "../../components/Hero/Hero"

import "./HomePage.sass";


function HomePage() {
  return (
    <main>
      <Hero isSlider={true}></Hero>
      <section className="about">
      <div className="about__img-container">
        <img className="about__profile-pic" src={"/images/AVATAR.png"} alt="illustration of Danny holding up hand peace sign"></img>
      </div>
      <div className="about__content">
        <h2 className="about__title">ABOUT</h2>
        <p className="about__bio">
          Danny is an experienced illustrator and background artist working
          in animation. He has most recently worked with 9Story/Brown Bag Films
          on Sony Pictures Animation's <i>Open Season: Call of Nature</i> as a
          background artist and previously worked in the same role on Nick Jr.'s <i>Blues
          Clues and You</i>. With experience working on 2D, 3D, and live-action
          productions, he would make an excellent addition to any production
          team. 
        </p>
        <a className="about__resume-link" href="https://docs.google.com/document/d/1bmQXmo0ViyWEl28L_ll32TvSsFJP9ggfAFLPaO645aw/mobilebasic" target="_blank" aria-label="RESUME">
          RESUME
        </a>
      </div>
      </section>
    </main>
  );
}

export default HomePage;
