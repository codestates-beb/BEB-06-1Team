import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import imgMetaMask from '../images/metamask.png';

const ConnectMetaMask = () => {
  return (
    <>
      <Offcanvas.Header>
        <Offcanvas.Title>My wallet </Offcanvas.Title>
      </Offcanvas.Header>
      <hr />
      <Offcanvas.Body>
        <img src={imgMetaMask} className="Avatarimg" />
        MetaMask
      </Offcanvas.Body>
    </>
  );
};

const HeadOffCanvas = ({ show, handleClose, placement }) => {
  HeadOffCanvas.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    placement: PropTypes.string.isRequired,
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <ConnectMetaMask />
      </Offcanvas>
    </>
  );
};

export default HeadOffCanvas;
