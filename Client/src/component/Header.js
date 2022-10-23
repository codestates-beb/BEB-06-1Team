import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logomark-Opensea.png';
import { SearchIcon, BrowserIcon } from '@primer/octicons-react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className="container-fluid">
      <Nav variant="pills d-flex p-2" activeKey="1">
        <Nav.Item>
          <Link to="/">
            <img src={logo} className="App-logo align-self-center" alt="CheckShirts" />
          </Link>
        </Nav.Item>
        <Nav.Item className="align-self-end m-3">
          <h6 className="">CheckShirts OpenSea</h6>
        </Nav.Item>
        <div className="inner-addon left-addon align-self-center col">
          <SearchIcon className="search" size={16} />
          <input
            className="form-control"
            type="text"
            placeholder="Search items,collections,and accounts"
            aria-label="default input example"
          ></input>
        </div>
        <NavDropdown title="Explore" className="m-3" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">All NFTs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.2">Art</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Music</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Trading Cards</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Collectibles</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Photography</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Utility</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Domain Names</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Sports</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Virtual Worlds</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Stats" className="m-3" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Rankings</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Activity</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Resources" className="m-3" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Learn</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Help Center</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Platform Status</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Partners</NavDropdown.Item>
        </NavDropdown>

        <Nav.Item className="m-3">
          <Nav.Link eventKey="3">
            <Link to="/mintpage">Create </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="m-3">
          <Nav.Link eventKey="4">사용자 아이콘</Nav.Link>
        </Nav.Item>

        <Nav.Item className="m-3">
          <Nav.Link eventKey="5">
            <Link to="/about">
              <BrowserIcon size={24} />
            </Link>
            {/* <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="m-3">
          <Nav.Link eventKey="6">장바구니</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
