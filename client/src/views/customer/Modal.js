import React from 'react';
import "../../styles/Model.css"

const Modal = ({ onClose, children, imageUrl }) => {
  return (
    <div className="modal-overlay1">
      <div className="modal2">
        <button className="modal-close1" onClick={onClose}>X</button>
        {imageUrl && <img src={imageUrl} alt="Modal" className="modal-image" />}
        {children}
      </div>
    </div>
  );
};

export default Modal;

