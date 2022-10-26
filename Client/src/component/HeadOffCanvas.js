import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import imgMetaMask from '../images/metamask.png';
import { isConnectMetaMask } from '../component/MetamaskConnect';

const ConnectMetaMask = () => {
  const [userData, setUserData] = useState([]);

  const onClickMeta = async () => {
    const data = await isConnectMetaMask(); 
    setUserData(data);
    console.log('연결지갑 확인', userData, data);
  }

  return (
    <>
      <Offcanvas.Header>
        <Offcanvas.Title>My wallet</Offcanvas.Title>
      </Offcanvas.Header>
      <hr />
      <Offcanvas.Body>
        <div className='pills d-flex p-2' onClick={onClickMeta}>
          <img src={imgMetaMask} className="canvasimg" alt='metamask'/>
          <p className='align-self-center m-2'>MetaMask</p> 
        </div>
        {userData != null ? <div><p>Connected Network: { userData.network }</p>
        <p>User Address: { userData.account }</p></div>
         : <></>}
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
