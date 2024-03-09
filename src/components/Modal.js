// Modal.js
import React from 'react';
import '../styles/Modal.css'; // Create a Modal.css file for styling

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
