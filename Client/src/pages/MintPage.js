import { useState } from 'react';
import MetamaskConnect from '../component/MetamaskConnect';
import Loading from '../component/Loading';
import Web3 from 'web3'
import Abi from '../component/Abi';
import axios from 'axios';

const MintPage = () => {
  //@ 하위컴포넌트인 MetamaskConnect.js에서 지갑 주소를 가져올 state
  const [textValue, setTextValue] = useState("")
  //@ NFT 콜렉션
  const [nftCollectionName, setNftCollectionName] = useState();
  //@ NFT 작가
  const [nftArtist, setNftArtist] = useState();
  //@ NFT 이름
  const [nftName, setNftName] = useState();
  // //@ NFT 상세설명
  // const [nftDescription, setNftDescription] = useState();
  //@ 이미지 등록 및 프리뷰 테스트
  const [imageSrc, setImageSrc] = useState('');
  //@ 로딩
  const [loading, setLoading] = useState(false);
  //@ 민팅 완료확인
  const [mintDone, setMintDone] = useState(false);


  // window.ethereum 연결 후 여러 세팅 준비
  const web3 = new Web3(Web3.givenProvider || []);  // 고정
  const addr = textValue.account;
  const contractHx = "0xDFf98Fd0B1cABBF81d3bBd6FB85d751510591415";  // 고정
  const tokenURI="https://gateway.pinata.cloud/ipfs/QmRzcbdkzW3FBFVkukXBb1qFiWvUYBgaSPNUVHgUHv4hrA" // 임시
  const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정


  const EncodeFileToBase64 = (fileBlob) => {
    // https://nukw0n-dev.tistory.com/30#FileReader-readAsDataURL--
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      }
    })
  }
  const getTextValue = (text) => {
    setTextValue(text);
  }
  const setNFTCollectionName= (e) => {
    setNftCollectionName(e.target.value);
  };
  const setNFTArtist= (e) => {
    setNftArtist(e.target.value);
  };
  const setNFTName = (e) => {
    setNftName(e.target.value);
  };
  // const setNFTDescription = (e) => {
  //   setNftDescription(e.target.value);
  // };
  const saveTextToJson = () => {
    const details = {
      account: textValue.account,
      collection: `${nftCollectionName}`,
      artist: `${nftArtist}`,
      name: `${nftName}`,
      base64: `${imageSrc}`
      // description: `${nftDescription}`
    }
    console.log(details);
    return details;
  };
  const postJsonData = (jsonData) => {
    axios.post('http://localhost:3000/getthedata', {jsonData})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const mintNFT = () => {
    // 추가 작성 필요
    contract.methods.mintNFT(addr, tokenURI).send({from: addr}); //메소드내를 변경하므로 .send() 사용 vs 계약상태를 변경하지않는다면 .call()
    setLoading(true)
    postJsonData(saveTextToJson()) //DB로 보낼때 필요
    // postBase64Data(imageSrc)
  }

  // const postBase64Data = (base64Data) => {
  //   axios.post('http://localhost:3000/getthedata', {base64Data})
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
  // const trafficLight = () => {
  //   // advanced 요소
  // }
  

  return (
    <div className="mintpage">
      <div className="header">
        <div className="topText">
          <h1>Mint Page</h1>
        </div>
        <MetamaskConnect getTextValue= {getTextValue}/>
      </div>
      <div className="mint">
        <div className="typeCollection">
          <h2>Collection Name</h2>
          <div className="input-group mb-3">
            <input onChange={setNFTCollectionName} type="text" className="form-control" placeholder="Recipient's username" aria-label="Type NFT Collection" aria-describedby="button-addon2" />
          </div>  
        </div>    
        <div className="typeArtist">
          <h2>typeArtist</h2>
          <div className="input-group mb-3">
            <input onChange={setNFTArtist} type="text" className="form-control" placeholder="Recipient's username" aria-label="Type NFT Artist" aria-describedby="button-addon2" />
          </div>  
        </div>     
        <div className="typeName">
          <h2>NFT Name</h2>
          <div className="input-group mb-3">
            <input onChange={setNFTName} type="text" className="form-control" placeholder="Recipient's username" aria-label="Type NFT Name" aria-describedby="button-addon2" />
            <button onClick={saveTextToJson} className="btn btn-outline-secondary" type="button" id="button-addon2">save all</button>
          </div>  
        </div>        
        {/* <div className="typeDescription">
          <h2>NFT Description</h2>
          <div className="input-group mb-3">
            <input onChange={setNFTDescription} type="text" className="form-control" placeholder="Recipient's username" aria-label="Type NFT Description" aria-describedby="button-addon2"/>
            <button onClick={saveTextToJson} className="btn btn-outline-secondary" type="button" id="button-addon2">save all</button>
          </div>
        </div> */}
        <div className="imageUpload">
          <h2>Upload Image</h2>
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => {EncodeFileToBase64(e.target.files[0]);}}/>
            <button className="input-group-text" htmlFor="inputGroupFile02" onClick={mintNFT}>mint</button>
          </div>
          <div className="preview">
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </div>
        </div>
        <div className="mintImage">
          <div>{mintDone ? setLoading(false) : loading ? <Loading /> : null}</div>
        </div>
    </div>
   </div>
  )
}
 {/* // {mintDone ? setLoading(false) : loading ? <Loading /> : null}</div> 
    // 민팅이 끝났는지 확인되면 setLoading을 false로 두고
    // 안 끝났다면 loading의 T/F 확인후 T라면 로딩창 띄우기 아니면 null */}
export default MintPage;

