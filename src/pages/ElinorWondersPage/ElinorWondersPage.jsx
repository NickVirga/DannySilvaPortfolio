import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';

import "./ElinorWondersPage.sass"

import imageData from "../../assets/data/images-elinor-wonders.json"

import Modal from "../../components/Modal/Modal"


function ElinorWondersPage() {
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
    navigate("/elinorwonderswhy")
  };

  const clickHandler = (url) => {
    setImageUrl(url)
    setModalOpen(true)
  }


  return (
    <section className="elinor-wonders">
      <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          imageUrl={imageUrl}
        ></Modal>
      {imageData.map(image => (
        <Link className="elinor-wonders__link" key={image.id} to={`/elinorwonderswhy/${image.id}`} onClick={()=>{clickHandler(image.url)}} >
          <img className="elinor-wonders__image"  src={image.url} alt={image.caption}></img>
        </Link>
      ))}
    </section>
  );
}

export default ElinorWondersPage;