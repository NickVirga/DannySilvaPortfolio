import ReactDom from "react-dom";

import "./Modal.sass";
import ProtectedImage from "../ProtectedImage/ProtectedImage";

function Modal({ open, onClose, imageUrl, isProtected }) {
    if (!open) return null;

    const portalContainer = document.getElementById("portal");

    if (!portalContainer) {
        return null;
      }

      return ReactDom.createPortal(
        <>
          <div className="modal__overlay" onClick={onClose}> </div>
          <div className="modal">
            {isProtected && <ProtectedImage url={imageUrl}></ProtectedImage>}
            {!isProtected && <img className="modal__image"  src={imageUrl}></img>}
            {/* <button onClick={onClose}>Close Modal</button> */}
          </div>
        </>,
        portalContainer
      );

}


export default Modal;