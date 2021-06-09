import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function AppModal(props) {
    const [show, setShow] = useState(false);
    const { btnName, btnClass } = props;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button variant="primary" onClick={handleShow} className={btnClass}>
          {btnName}
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
              {React.cloneElement(props.children)}
          </Modal.Body>
        </Modal>
      </>
    );
}

export default AppModal;
