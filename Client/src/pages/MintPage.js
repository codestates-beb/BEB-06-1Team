import { useState } from 'react';
import MetamaskConnect from '../component/MetamaskConnect';
import Loading from '../component/Loading';
import Web3 from 'web3'
import Abi from '../component/Abi';

const MintPage = () => {
  //@ 이미지 등록 및 프리뷰 테스트
  const [imageSrc, setImageSrc] = useState('');
  //@ NFT 이름
  const [nftName, setNftName] = useState();
  //@ NFT 상세설명
  const [nftDescription, setNftDescription] = useState();
  //@ 로딩
  const [loading, setLoading] = useState(false);
  //@ 민팅 완료확인
  const [mintDone, setMintDone] = useState(false);

  // window.ethereum 연결 
  const web3 = new Web3(Web3.givenProvider || []); 
  const SMaddress = "0x2e3B15d9B894540C0053D2C1Db489d30B393E6B6";
  const addr="0x78275EFFE5f5613454565Deb0c194faC198749cd";
  const tokenURI="https://gateway.pinata.cloud/ipfs/QmRzcbdkzW3FBFVkukXBb1qFiWvUYBgaSPNUVHgUHv4hrA"
  const contract = new web3.eth.Contract(Abi, SMaddress); // abi : 복사해서 그대로

  const EncodeFileToBase64 = (fileBlob) => {
    // https://nukw0n-dev.tistory.com/30#FileReader-readAsDataURL--
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        console.log(imageSrc);
      }
    })
  }
  const setNFTName = (e) => {
    setNftName(e.target.value);
  };
  const setNFTDescription = (e) => {
    setNftDescription(e.target.value);
  };
  const saveTextToJson = () => {
    const details = {
      name: `${nftName}`,
      description: `${nftDescription}`
    }
    console.log(imageSrc);
    console.log(details);
  };
  const mintNFT = () => {
    // 추가 작성 필요
    contract.methods.mintNFT(addr, tokenURI).send({ from: addr });
    setLoading(true)
  }
  const trafficLight = () => {
    // advanced 요소
  }

  return (
    <div>
      <div className="header">
        <div className="topText">
          <h1>Mint Page</h1>
        </div>
        <MetamaskConnect></MetamaskConnect>
      </div>
      <div className="mint">
        <div className="typeName">
          <h2>NFT Name</h2>
          <div className="input-group mb-3">
            <input onChange={setNFTName} type="text" className="form-control" placeholder="Recipient's username" aria-label="Type NFT Name" aria-describedby="button-addon2" />
            <button onClick={saveTextToJson} className="btn btn-outline-secondary" type="button" id="button-addon2">save</button>
          </div>        
        <div className="typeDescription">
          <h2>NFT Description</h2>
          <div class="input-group mb-3">
            <input onChange={setNFTDescription} type="text" class="form-control" placeholder="Recipient's username" aria-label="Type NFT Description" aria-describedby="button-addon2"/>
            <button onClick={saveTextToJson} class="btn btn-outline-secondary" type="button" id="button-addon2">save</button>
          </div>
        </div>
        <div className="imageUpload">
          <h2>Upload Image</h2>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" onChange={(e) => {EncodeFileToBase64(e.target.files[0]);}}/>
            <label class="input-group-text" for="inputGroupFile02" onClick={mintNFT}>mint</label>
          </div>
          <div className="preview">
            <button onClick={mintNFT} type="button">mint</button>
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </div>
        </div>
        <div className="mintImage">
          <div>{mintDone ? setLoading(false) : loading ? <Loading /> : null}</div>
        </div>
      </div>
    </div>
   </div>
  )
}
 {/* // {mintDone ? setLoading(false) : loading ? <Loading /> : null}</div> 
    // 민팅이 끝났는지 확인되면 setLoading을 false로 두고
    // 안 끝났다면 loading의 T/F 확인후 T라면 로딩창 띄우기 아니면 null */}
export default MintPage;

