import React from "react";

import "./LayoutPaintPage.sass"

import image0 from "../../assets/images/layout-paint/placeholder.jpg";
import image1 from "../../assets/images/layout-paint/placeholder(1).jpg";
import image2 from "../../assets/images/layout-paint/placeholder(2).jpg";
import image3 from "../../assets/images/layout-paint/placeholder(3).jpg";

function LayoutPaintPage() {
  return (
    <section className="layout-paint">
      {/* <h1>Layout & Paint</h1> */}
      <img className="layout-paint__image" src={image0}></img>
      <img className="layout-paint__image" src={image1}></img>
      <img className="layout-paint__image" src={image2}></img>
      <img className="layout-paint__image" src={image3}></img>
    </section>
  );
}

export default LayoutPaintPage;
