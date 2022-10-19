import { useState } from "react";

function NFTMint() {
  //@ 이미지 파일 선택
  const [inputImage, setInputImage] = useState("이미지 올려주세요");
  //@ 이미지 업로드 ( IPFS 서버 )
  const [uploadStatus, setUploadStatus] = useState("이미지 명");
  //@ NFT 이름
  const [nftName, setNftName] = useState();
  //@ NFT Symbol
  const [nftSymbol, setNftSymbol] = useState();
  //@ Mint Status
  const [mintStatus, setMintStatus] = useState("Please mint");

  const InputImage = () => {
    setInputImage("이걸 올렸습니다");
  };
  const ImageUpload = () => {
    setUploadStatus("Onloading");
  };

  const setNFTName = (e) => {
    setNftName(e.target.value);
  };
  const setSymbol = (e) => {
    setNftSymbol(e.target.value);
  };
  const MintNFT = () => {
    setMintStatus("Completed");
  };

  return (
    <div className="Mint">
      <h3 className="Sum">@ Mint 부분</h3>
      <button onClick={InputImage}>이미지삽입</button> <br />
      <p> {inputImage}</p>
      <button onClick={ImageUpload}>이미지 업로드</button>
      <p>{uploadStatus}</p>
      <br />
      <p>
        NFT Name:
        <textarea onChange={setNFTName} />
        {nftName}
      </p>
      <p>
        NFT Symbol:
        <textarea onChange={setSymbol} />
        {nftSymbol}
      </p>
      <button onClick={MintNFT}>NFT mint</button>
      <p>{mintStatus}</p>
      <br />
    </div>
  );
}

export default NFTMint;
