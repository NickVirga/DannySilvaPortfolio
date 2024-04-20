import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./LayoutPaintPage.sass";

import imageData from "../../assets/data/images-layout-paint.json";

import Modal from "../../components/Modal/Modal";
import Hero from "../../components/Hero/Hero";

function LayoutPaintPage() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (imageId) {
      const { url } = imageData.find((image) => image.id === imageId) ?? {};
      setImageUrl(url);
      setModalOpen(true);
    }
  }, [imageId]);

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/bgpaint");
  };

  const clickHandler = (url) => {
    setImageUrl(url);
    setModalOpen(true);
  };

  return (
    <main>
      <Hero
        isSlider={false}
        imageSrc={imageData[11].url}
        titleText={"Layout & Paint"}
      ></Hero>
      <section className="layout-paint">
        {imageUrl && <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          imageUrl={isMobile ? imageUrl.replace(".", "-s.") : imageUrl}
        ></Modal>}
        {imageData.map((image) => (
          <Link
            className="layout-paint__link"
            key={image.id}
            to={`/bgpaint/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <img
              className="layout-paint__image"
              src={
                isMobile
                  ? image.url.replace(".", "-s.")
                  : image.url.replace(".", "-m.")
              }
              alt={image.caption}
              decoding="async"
              loading={image.lazyload ? "lazy" : "eager"}
            ></img>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default LayoutPaintPage;
