import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Hero.sass";

import imageData from "../../assets/data/images-hero.json";

function Hero() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive'
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {imageData.map((image, index) => {
          return (
            <div key={index} className="hero__image-container">
              <div className="hero__overlay"></div>
              <img key={index} className="hero__image" src={image.url} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Hero;
