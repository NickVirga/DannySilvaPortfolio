import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';

import "./BluesCluesPage.sass"

import imageData from "../../assets/data/images-blues-clues.json"

import Modal from "../../components/Modal/Modal"

function BluesCluesPage() {
  const navigate = useNavigate()
  const { imageId } = useParams();
  const [modalOpen, setModalOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState(imageId)

  useEffect(() => {
    if (imageId) {
      const { url } = imageData.find(image => image.id === imageId) ?? {};
      setImageUrl(url)
      setModalOpen(true)
    }
  }, [imageId])
  

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/bluescluesandyou")
  };

  const clickHandler = (url) => {
    setImageUrl(url)
    setModalOpen(true)
  }


  return (
    <section className="blues-clues">
      <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          imageUrl={imageUrl}
        ></Modal>
      {imageData.map(image => (
        <Link className="blues-clues__link" key={image.id} to={`/bluescluesandyou/${image.id}`} onClick={()=>{clickHandler(image.url)}} >
          <img className="blues-clues__image"  src={image.url} alt={image.caption}></img>
        </Link>
      ))}
      <p className="blues-clues__disclaimer">I am solely responsible for the background paint and do not take credit for the layout work.</p>
    </section>
  );
}

export default BluesCluesPage;