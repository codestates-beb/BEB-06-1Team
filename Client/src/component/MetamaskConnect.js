import { useState } from "react";

function MetamaskConnect(props) {
  //@ connection 상태
  const [connectstatus, setConnectstatus] = useState(
    "https://testnets.opensea.io/static/images/logos/metamask-fox.svg"
  );
  //@ 네트워크 이름
  const [connect, setConnect] = useState("");
  //@계정 정보
  const [account, setAccount] = useState("");
  //@ 네트워크 목록
  const chinidList = {
    0x1: "Ethereum mainnet",
    0x5: "Goeril",
    0xaa36a7: "Sepolia",
  };
  //@ 자식에서 부모로 account값 props통해서 보내기
  const sendAccountValue = () => {
    props.getTextValue({account});
  }
  //@ Metamask connection
  const metaMaskConnection = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    let chainid = window.ethereum.chainId;
    let network = chinidList[chainid * 1];
    setConnectstatus(
      "https://storage.googleapis.com/opensea-static/opensea-profile/29.png"
    );
    setConnect(`Connected Network: ${network}`);
    setAccount(accounts[0]);
  };
  return (
    <div className="MetaMask">
      <h3 className="Sum">@메타마스크 연결부</h3>
      <button onClick={metaMaskConnection}>connect</button> 
      <button onClick={sendAccountValue}>start?</button>
      <img src={connectstatus} width="30" height="30" alt="images"/>
      <p className="account">
        {connect} ##Address: {account}
      </p>
    </div>
  );
}


export default MetamaskConnect;
