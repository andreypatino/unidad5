
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//assets
import carr from '../../assets/landing/c1.png';
function ModalCarr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Ver mas
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Automovil</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                 <img src={carr} alt="" />
                 <p> Modelo - 2004, KM 60000, Marca MERCEDEZ, Precio $25.000.000</p>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCarr;