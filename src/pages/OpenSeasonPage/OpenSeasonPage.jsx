import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./OpenSeasonPage.sass";

import imageData from "../../assets/data/images-open-season.json";

import Modal from "../../components/Modal/Modal";
import Hero from "../../components/Hero/Hero";

function OpenSeasonPage() {
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
    navigate("/openseason");
  };

  const clickHandler = (url) => {
    setImageUrl(url);
    setModalOpen(true);
  };

  return (
    <main>
      <Hero
        isSlider={false}
        imageSrc={imageData[10].url}
        titleText={"Open Season: Call of Nature"}
      ></Hero>
      <section className="open-season">
        {imageUrl && (
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            imageUrl={isMobile ? imageUrl.replace(".", "-s.") : imageUrl}
          ></Modal>
        )}
        {imageData.map((image) => (
          <Link
            className="open-season__link"
            key={image.id}
            to={`/openseason/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <img
              className="open-season__image"
              src={
                isMobile
                  ? image.url.replace(".", "-s.")
                  : image.url.replace(".", "-m.")
              }
              alt={image.caption}
            ></img>
          </Link>
        ))}
        <p className="open-season__disclaimer">
          I am solely responsible for the background paint and do not take
          credit for the layout work.
        </p>
      </section>
    </main>
  );
}

export default OpenSeasonPage;
