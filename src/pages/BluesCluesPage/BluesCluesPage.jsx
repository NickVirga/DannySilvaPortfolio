import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./BluesCluesPage.sass";

import imageData from "../../assets/data/images-blues-clues.json";

import Modal from "../../components/Modal/Modal";
import Hero from "../../components/Hero/Hero";

function BluesCluesPage() {
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
    navigate("/bluescluesandyou");
  };

  const clickHandler = (url) => {
    setImageUrl(url);
    setModalOpen(true);
  };

  return (
    <main>
      <Hero
        isSlider={false}
        imageSrc={imageData[8].url}
        titleText={"Blues Clues and You"}
      ></Hero>
      <section className="blues-clues">
        {imageUrl && (
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            imageUrl={isMobile ? imageUrl.replace(".", "-s.") : imageUrl}
          ></Modal>
        )}
        {imageData.map((image) => (
          <Link
            className="blues-clues__link"
            key={image.id}
            to={`/bluescluesandyou/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <img
              className="blues-clues__image"
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
        <p className="blues-clues__disclaimer">
          I am solely responsible for the background paint and do not take
          credit for the layout work.
        </p>
      </section>
    </main>
  );
}

export default BluesCluesPage;
