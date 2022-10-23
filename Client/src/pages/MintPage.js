import { useState } from 'react';
import React from 'react';
import MetamaskConnect from '../component/MetamaskConnect';
import Loading from '../component/Loading';

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

  const EncodeFileToBase64 = (fileBlob) => {
    // https://nukw0n-dev.tistory.com/30#FileReader-readAsDataURL--
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        console.log(imageSrc);
      };
    });
  };
  const setNFTName = (e) => {
    setNftName(e.target.value);
  };
  const setNFTDescription = (e) => {
    setNftDescription(e.target.value);
  };
  const saveTextToJson = () => {
    const details = {
      name: `${nftName}`,
      description: `${nftDescription}`,
    };
    console.log(details);
  };
  const mintNFT = () => {
    // 추가 작성 필요
    setLoading(true);
  };
  const trafficLight = () => {
    // advanced 요소
  };

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
          <textarea onChange={setNFTName} />
        </div>
        <button onClick={saveTextToJson}>save</button>
        <div className="typeDescription">
          <h2>NFT Description</h2>
          <textarea onChange={setNFTDescription} />
        </div>
        <button onClick={saveTextToJson}>save</button>
      </div>
      <div className="imageUpload">
        <h2>Upload Image</h2>
        <input
          type="file"
          onChange={(e) => {
            EncodeFileToBase64(e.target.files[0]);
          }}
        />
        <div className="preview">{imageSrc && <img src={imageSrc} alt="preview-img" />}</div>
      </div>
      <div className="mintImage">
        <button onClick={mintNFT}>mint</button>
        <div>{mintDone ? setLoading(false) : loading ? <Loading /> : null}</div>
      </div>
    </div>
    // {mintDone ? setLoading(false) : loading ? <Loading /> : null}</div>
    // 민팅이 끝난는지 확인되면 setLoading을 false로 두고
    // 안 끝났다면 loading의 T/F 확인후 T라면 로딩창 띄우기 아니면 null
  );
};

export default MintPage;
