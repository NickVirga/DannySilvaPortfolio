import React, { useState, useEffect} from "react";
import { Link, useParams, useNavigate} from 'react-router-dom';

import "./EmMemoriaPage.sass"

import imageData from "../../assets/data/images-em-memoria.json"
import videoData from "../../assets/data/videos-em-memoria.json"

import Modal from "../../components/Modal/Modal"


function EmMemoriaPage() {
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
    navigate("/thesis-em-memoria")
  };

  const clickHandler = (url) => {
    setImageUrl(url)
    setModalOpen(true)
  }


  return (
    <section className="em-memoria">
      <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          imageUrl={imageUrl}
        ></Modal>
      {videoData.map(video => (
        <video key={video.id} width="1000" controls >
        <source src={video.url} type="video/mp4"/>
  </video>
      ))}
      {imageData.map(image => (
        <Link className="em-memoria__link" key={image.id} to={`/thesis-em-memoria/${image.id}`} onClick={()=>{clickHandler(image.url)}} >
          <img className="em-memoria__image"  src={image.url} alt={image.caption}></img>
        </Link>
      ))}
    </section>
  );
}

export default EmMemoriaPage;