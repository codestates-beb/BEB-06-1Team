import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import avatar from '../images/cat.jpeg';

const MyPage = () => {
  return (
    <div>
      <div>
        <Card>
          <Card.Img
            variant="top"
            className="MypageBanner"
            src="https://nft-content.upbit.com/c33a6f1f-80e9-4cc0-b31e-fde04e4a7602"
          />
          <Card.Body>
            <Card.Text>
              <img src={avatar} className="Avatar align-self-center" alt="CheckShirts" />
              <h4 className="px-3">Imomo Name</h4>
              <div className="d-flex px-2">
                <h6 className="align-self-center px-2">0x3156...C8f3 address</h6>
                <h6 className="align-self-center px-2 Mypagedate">Joined October 2022</h6>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <Nav
        className="px-4"
        variant="tabs"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">
            <p className="MypageNav">Collected</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <p className="MypageNav">Created</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <p className="MypageNav">Favorites</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <p className="MypageNav">Activity</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default MyPage;
