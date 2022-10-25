import React, { useState } from 'react';
import './MintPage.css';
import MetamaskConnect from '../component/MetamaskConnect';
import Loading from '../component/Loading';
import Web3 from 'web3';
import Abi from '../component/Abi';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import fs from 'fs'

const MintPage = () => {
  //@ 하위컴포넌트인 MetamaskConnect.js에서 지갑 주소를 가져올 state
  const [textValue, setTextValue] = useState('');
  //@ NFT 콜렉션
  const [nftCollectionName, setNftCollectionName] = useState();
  //@ NFT 작가
  const [nftArtist, setNftArtist] = useState();
  //@ NFT 이름
  const [nftName, setNftName] = useState();
  //@ 로딩
  const [loading, setLoading] = useState(false);
  //@ 민팅 완료확인
  const [mintDone, setMintDone] = useState(false);
  //@ 이미지 등록 및 프리뷰 테스트
  const [imageSrc, setImageSrc] = useState('');

  // window.ethereum 연결 후 여러 세팅 준비
  const web3 = new Web3(Web3.givenProvider || []); // 고정
  const addr = textValue.account;
  const contractHx = '0xDFf98Fd0B1cABBF81d3bBd6FB85d751510591415'; // 고정
  // const tokenURI="https://gateway.pinata.cloud/ipfs/QmRzcbdkzW3FBFVkukXBb1qFiWvUYBgaSPNUVHgUHv4hrA" // 임시
  const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정

  const getTextValue = (text) => {
    setTextValue(text);
  };
  const setNFTCollectionName = (e) => {
    setNftCollectionName(e.target.value);
  };
  const setNFTArtist = (e) => {
    setNftArtist(e.target.value);
  };
  const setNFTName = (e) => {
    setNftName(e.target.value);
  };

  // const EncodeFileToBase64 = (fileBlob) => {

  //   // https://nukw0n-dev.tistory.com/30#FileReader-readAsDataURL--
  //   const reader = new FileReader();
  //   reader.readAsDataURL(fileBlob);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImageSrc(reader.result);
  //       resolve();
  //     }
  //   })
  // }


  const saveTextToJson = () => {
    const details = {
      account: textValue.account,
      artist: `${nftArtist}`,
      collection: `${nftCollectionName}`,
      name: `${nftName}`,
      // description: `${nftDescription}`
    };
    //console.log(details);
    return details;
  };

  const postJsonData = () => {
    saveTextToJson(); // 보내기 직전 내용 전체 저장

    const data = imageSrc;
    // 데이터 보내고

    console.log('민트버튼');
    // console.log(data)

    const formData = new FormData();
    formData.append('img', data);

    axios
      .post('http://localhost:4000/tokenUri', formData)
      .then(function (res) {
        // console.log(res.data)
        mintNFT(res.data); // tokenUri 형태로 받고
        const tokenJson = { tokenUri: `${res.data}` }; // 받은걸 DB에 올릴 형식으로 만들어주고
        const finalJson = Object.assign(saveTextToJson(), tokenJson); // textField에 적었던 내용과 합침
        axios.post('http://localhost:4000/getthedata', finalJson); // DB를 위해서 POST
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const mintNFT = (token) => {
    // 추가 작성 필요
    contract.methods
      .mintNFT(addr, token)
      .send({ from: addr })
      .on('receipt', function (receipt) {
        console.log(receipt); //메소드내를 변경하므로 .send() 사용 vs 계약상태를 변경하지않는다면 .call()
      });
    setLoading(true);
  };

  return (
    <div className="container-fluid text-center m-3">
      <div className="header">
        <div className="topText p-3">
        </div>
        <MetamaskConnect getTextValue={getTextValue} />
      </div>
      <div className="mint p-3">
        <div className="imageUpload">
          <h2 className="headline">Upload Image</h2>
          <div className="input-image  p-3">
            <form>
              <input
                name="img"
                type="file"
                className="getImage"
                id="inputGroupFile02"
                onChange={(e) => {
                  setImageSrc(e.target.files[0]);
                }}
              />
            </form>
          </div>
          {/* <div className="preview">
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </div> */}
        </div>
        <div className="row text-center">
          <h2 className="text-center p-3">Type Details</h2>
          <div className="col-12 m-1">
            <div>
              <TextField
                onChange={setNFTArtist}
                sx={{ '& > :not(style)': { m: 1, width: '50ch', textAlign: 'left' } }}
                type="text"
                className="center"
                id="outlined-basic"
                label="Who is artist?"
                variant="outlined"
              />
            </div>
          </div>  
          <div className="col-12 mb-3">
            <TextField onChange={setNFTCollectionName} sx={{'& > :not(style)': { m: 1, width: '50ch', textAlign: 'left'},}} type="text" className="type-collection-name" id="outlined-basic" label="What is collection name?" variant="outlined" />
          </div> 
          <div className="col-12 mb-3">
            <TextField onChange={setNFTName} sx={{'& > :not(style)': { m: 1, width: '50ch', textAlign: 'left' },}} type="text" className="type-NFT-name" id="outlined-basic" label="What is NFT's name?" variant="outlined" />
          </div>  
          <div className="buttons-mint">
            <Button className="buttons-mint" onClick={postJsonData} variant="contained" sx={{'& > :not(style)': { m: 1, width: '50ch'},}}>MINT</Button>
            <mapCard />
          </div>
        </div>

        <div className="mintImage">
          <div>{mintDone ? setLoading(false) : loading ? <Loading /> : null}</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
{
  /* // {mintDone ? setLoading(false) : loading ? <Loading /> : null}</div> 
    // 민팅이 끝났는지 확인되면 setLoading을 false로 두고
    // 안 끝났다면 loading의 T/F 확인후 T라면 로딩창 띄우기 아니면 null */
}
export default MintPage;
