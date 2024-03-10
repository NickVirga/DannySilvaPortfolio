import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"

import "./OpenSeasonPage.sass";

import imageData from "../../assets/data/images-open-season.json";

import Modal from "../../components/Modal/Modal";
import ProtectedImage from "../../components/ProtectedImage/ProtectedImage";

function OpenSeasonPage() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(imageId);


  useEffect(() => {
    if (imageId) {
      const { url } = imageData.find((image) => image.id === imageId) ?? {};
      setImageUrl(url);
      setModalOpen(true);
    }

  }, [imageId]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('/.netlify/functions/authenticate', {
      body: JSON.stringify({ password }),
    });

    console.log(response.data)

    if (response.data.authenticated) {
      sessionStorage.authToken = response.data.token;
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      setErrorMessage("Access Denied");
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

  if (!isAuthenticated) {
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
        isProtected={true}
      ></Modal>
      <div className="open-season__gallery">
        {imageData.slice(0, 18).map((image) => (
          <Link
            className="open-season__link"
            key={image.id}
            to={`/openseason/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <ProtectedImage id={image.id} alt={image.alt} url={image.url} fcnId={1}></ProtectedImage>
          </Link>
        ))}
        {imageData.slice(18).map((image) => (
          <Link
            className="open-season__link"
            key={image.id}
            to={`/openseason/${image.id}`}
            onClick={() => {
              clickHandler(image.url);
            }}
          >
            <ProtectedImage id={image.id} alt={image.alt} url={image.url} fcnId={2}></ProtectedImage>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OpenSeasonPage;
