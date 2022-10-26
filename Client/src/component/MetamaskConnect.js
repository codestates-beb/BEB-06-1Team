import React, { useState } from 'react';
import axios from 'axios';

//@ 네트워크 목록
const chinidList = {
  0x1: 'Ethereum mainnet',
  0x5: 'Goeril',
  0xaa36a7: 'Sepolia',
};
const userData = [];

//user Data가져오기
const getUserData = () => {
  return userData;
}
//@ Metamask connection
const isConnectMetaMask = async () => { 
  //console.log('메타마스크연결 함수 실행');
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  }); 
  let chainid = window.ethereum.chainId;
  let network = chinidList[chainid * 1];
  // setConnectstatus('https://storage.googleapis.com/opensea-static/opensea-profile/29.png');
  // setConnect(`Connected Network: ${network}`);
  // setAccount(accounts[0]);
  
  let data = {
    network: network,
    account: accounts[0],
  };

  if(userData.length === 0){
    userData.push(data);
  } 
  
  return data;
};

const NFTData = [];
const GetJson = () => {
  
  axios.post('http://localhost:4000/senddata', { account: `${userData[0].account}` })
  .then(function(res){
    NFTData.push(res.data);
    // console.log(res.data);
  }).catch(function (error) {
    console.log(error);
  });

  console.log("db:", NFTData);
  return NFTData;
};

const MetamaskConnect = () => { 

  //@ connection 상태
  // const [connectstatus, setConnectstatus] = useState(
  //   'https://testnets.opensea.io/static/images/logos/metamask-fox.svg'
  // );
  //@ 네트워크 이름
  const [connect, setConnect] = useState('');
  //@계정 정보
  const [account, setAccount] = useState('');
  //@ 자식에서 부모로 account값 props통해서 보내기
  const sendAccountValue = (props) => {
    props.getTextValue({ account });
  };
  
  return (
    <div>
      {/* <Button className="buttons" onClick={isConnectMetaMask} variant="contained">
        connect
      </Button>
      <Button className="buttons" onClick={sendAccountValue} variant="contained">
        start?
      </Button> */}

      {/* 계정 주소 pros로 보내기 */}
      {/* <img src={connectstatus} width="30" height="30" alt="images" />
      <p className="account">
        {connect} ##Address: {account}
      </p> */}
    </div>
  );
};


export { MetamaskConnect, isConnectMetaMask, getUserData, GetJson };
