import ReactDom from "react-dom";

import "./Modal.sass";

function Modal({ open, onClose, imageUrl }) {
    if (!open) return null;

    const portalContainer = document.getElementById("portal");

    if (!portalContainer) {
        return null;
      }

      return ReactDom.createPortal(
        <>
          <div className="modal__overlay" onClick={onClose}> </div>
          <div className="modal">
            <img className="modal__image"  src={imageUrl}></img>
          </div>
        </>,
        portalContainer
      );

}


export default Modal;