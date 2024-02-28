import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';

import "./LayoutPaintPage.sass"

import imageData from "../../assets/data/images-layout-paint.json"

import Modal from "../../components/Modal/Modal"


function LayoutPaintPage() {
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
    navigate("/bgpaint")
  };

  const clickHandler = (url) => {
    setImageUrl(url)
    setModalOpen(true)
  }


  return (
    <section className="layout-paint">
      <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          imageUrl={imageUrl}
        ></Modal>
      {imageData.map(image => (
        <Link className="layout-paint__link" key={image.id} to={`/bgpaint/${image.id}`} onClick={()=>{clickHandler(image.url)}} >
          <img className="layout-paint__image"  src={image.url} alt={image.caption}></img>
        </Link>
      ))}
    </section>
  );
}

export default LayoutPaintPage;
