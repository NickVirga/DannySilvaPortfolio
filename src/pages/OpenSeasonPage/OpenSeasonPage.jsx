import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./OpenSeasonPage.sass";

import imageData from "../../assets/data/images-open-season.json";

import Modal from "../../components/Modal/Modal";

function OpenSeasonPage() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [imageDataArray, setImageDataArray] = useState(imageData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(imageId);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (imageId) {
      const { image } =
        imageDataArray.find((image) => image.id === imageId) ?? {};
      setImageUrl(image);
      setModalOpen(true);
    }
  }, [imageDataArray]);

  const handlePasswordSubmit = async () => {
    try {
      const responses = await Promise.all(
        imageData.map(async (image) => {
          const imageUrl = `${baseUrl}${image.url}`;
          return axios.get(imageUrl, {
            headers: {
              Authorization: password,
            },
            responseType: "blob",
          });
        })
      );

      const updatedImageDataArray = imageDataArray.map((image, index) => ({
        ...image,
        image: URL.createObjectURL(responses[index].data),
      }));

      setImageDataArray(updatedImageDataArray);

      setIsAuthorized(true);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Unauthorized");
    }
  };

  const handleOnChange = (input) => {
    setPassword(input);
    setErrorMessage(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/openseason");
  };

  const clickHandler = (image) => {
    setImageUrl(image);
    setModalOpen(true);
  };

  if (!isAuthorized) {
    return (
      <div className="open-season__prompt-container">
        <div className="open-season__prompt">
          <p className="open-season__instruction">Enter Password</p>
          <input
            className="open-season__input"
            type="password"
            value={password}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button className="open-season__btn" onClick={handlePasswordSubmit}>
            SUBMIT
          </button>
          {errorMessage && <p className="open-season__error">{errorMessage}</p>}
        </div>
      </div>
    );
  }

  return (
    <section className="open-season">
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        imageUrl={imageUrl}
      ></Modal>
      <div className="open-season__gallery">
        {imageDataArray.map((imageData) => (
          <Link
            className="open-season__link"
            key={imageData.id}
            to={`/openseason/${imageData.id}`}
            onClick={() => {
              clickHandler(imageData.image);
            }}
          >
            <img
              className="open-season__image"
              key={imageData.id}
              src={imageData.image}
              alt={imageData.caption}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OpenSeasonPage;
