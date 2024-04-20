import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./ElinorWondersPage.sass";

import imageData from "../../assets/data/images-elinor-wonders.json";

import Modal from "../../components/Modal/Modal";
import Hero from "../../components/Hero/Hero";

function ElinorWondersPage() {
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
    navigate("/elinorwonderswhy");
  };

  const clickHandler = (url) => {
    setImageUrl(url);
    setModalOpen(true);
  };

  return (
    <main>
      <Hero
        isSlider={false}
        imageSrc={imageData[9].url}
        titleText={"Elinor Wonders Why"}
      ></Hero>
      <section className="elinor-wonders">
        {imageUrl && (
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            imageUrl={isMobile ? imageUrl.replace(".", "-s.") : imageUrl}
          ></Modal>
        )}
        {imageData.map((image) => (
          <Link
            className="elinor-wonders__link"
            key={image.id}
            to={`/elinorwonderswhy/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <img
              className="elinor-wonders__image"
              src={
                isMobile
                  ? image.url.replace(".", "-s.")
                  : image.url.replace(".", "-m.")
              }
              alt={image.caption}
            ></img>
          </Link>
        ))}
        <p className="elinor-wonders__disclaimer">
          I am solely responsible for the background paint and do not take
          credit for the layout work.
        </p>
      </section>
    </main>
  );
}

export default ElinorWondersPage;
