import React from "react";

import "./PizzaPanicPage.sass"

function PizzaPanicPage() {
  return (
    <section className="pizza-panic"> 
      <div className="pizza-panic__video-container">
      <iframe
      className="pizza-panic__video"
        src="https://www.youtube.com/embed/esq33z8eSDc?si=SwvzQn7UyVDaN5rd"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <p className="pizza-panic__summary">
        "Pizza Panic!" is a third-year group film produced at Sheridan College
        that has been nominated for best student film at the 2020 Ottawa
        International Animation Festival. The film tells the story of a botched
        demon summoning and the ensuing hijinks. As design supervisor, I was
        responsible for keeping the production and style of the fun-pack on
        track and ready for film production. I and ten other students were
        responsible for the production of rough and clean animation, layout,
        background painting, and compositing.{" "}
      </p>
      
    </section>
  );
}

export default PizzaPanicPage;


