import React, { useState, createRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const modalRoot = createRef();

  const openModal = () => {
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  return createPortal(
    <div className={`modal ${display ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content" ref={modalRoot}>
        {children}
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>,
    document.body
  );
};

export default Modal;