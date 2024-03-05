import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

import "./OpenSeasonPage.sass";

import imageData from "../../assets/data/images-open-season.json";

import Modal from "../../components/Modal/Modal";

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
      const { url } = imageData.find(image => image.id === imageId) ?? {};
      setImageUrl(url)
      setModalOpen(true)
    }
  }, [imageId])

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/.netlify/functions/authenticate', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    const { authenticated } = await response.json();
    setAuthenticated(authenticated);
    
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
      ></Modal>
      <div className="open-season__gallery">
        {imageData.map(image => (
        <Link className="open-season__link" key={image.id} to={`/openseason/${image.id}`} onClick={()=>{clickHandler(image.url)}} >
          <img className="open-season__image"  src={image.url} alt={image.caption}></img>
        </Link>
      ))}
      </div>
    </section>
  );
}

export default OpenSeasonPage;
