import React from 'react'
import {useState, useEffect} from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const CookieModal = () => {
    const [show, setShow] = useState(!localStorage.getItem('accept_cookies'));

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const acceptCookies = () => {
        setShow(false)
        localStorage.setItem('accept_cookies', true)
    }
    return (
      <>

  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cookies Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome to Amman Street Art, an open source gallery of Amman's many murals. This website uses cookies from multiple APIs and frameworks to make this project work. By clicking the button below, you would be consenting to the use of cookies that this website relies on.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={acceptCookies}>
              Accept Cookies
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default CookieModal;
