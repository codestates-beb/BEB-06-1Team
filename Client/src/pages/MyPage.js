import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import avatar from '../images/cat.jpeg';
import { getUserData, GetJson } from '../component/MetamaskConnect';
import MyCard from '../component/NFTCard';

const MyPage = () => {
  //@ 하위컴포넌트인 MetamaskConnect.js에서 지갑 주소를 가져올 state
  const [textValue, setTextValue] = useState('');
  const [NFTdatas, setNFTdatas] = useState([]);
  
  const getTextValue = async () => {
    
   
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      const NFTdata = await GetJson();
      setTextValue(data[0]);
      setNFTdatas(NFTdata);
      // data.json().then(x => {
       
      // })
      // NFTdata.then(() => {
      //   setNFTdatas(NFTdata);
      // }) 
    } 
    fetchData(); 
    console.log("myPage", textValue, NFTdatas); 
  },[]);

  return (
    <>
    {textValue == '' ? <></> :
    <div className="container-fluid">
      <Card style={{ height: '400px' }} className="mb-2">
        <Card.Img
          variant="top"
          className="MypageBanner"
          src="https://file.mir4global.com/xdraco/img/public/unavailable/bg-unavailable.webp"
        />
        <Card.Body>
          <Card.Text className="Avatar">
            <img src={avatar} className="Avatarimg align-self-center" alt="CheckShirts" />
            <h4 className="px-3 red">Name: Imomo</h4>
            <div className="d-flex px-2">
              <h6 className="align-self-center px-2">address : { textValue.account }</h6>
              <h6 className="align-self-center px-2 Mypagedate">Joined October 2022</h6>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Nav
        className="px-4"
        variant="tabs"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link>
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
      <p className="text-center mt-4 mb-4">My NFT List</p>
      <div className='row'>
      {NFTdatas != null ? NFTdatas.map((x) => {
        return   <MyCard data={x}/>
      }) : <></>}
      </div>
    </div>
}
    </>
  );
};

export default MyPage;
