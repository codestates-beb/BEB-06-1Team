import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeadCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nft-content.upbit.com/c33a6f1f-80e9-4cc0-b31e-fde04e4a7602"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>싸이와 피네이션의 첫번째 NFT</h1>
          <p>10월 26일 사전판매 진행중</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nft-content.upbit.com/a274e8c6-a07a-4af2-acf8-87fdbc73f2d6"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>NFT 알아보기</h1>
          <p>NFT 서비스 이용방법을 확인해보세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://nft-content.upbit.com/982323ca-53d2-4553-870b-7b4f9a9c48c6"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>크볼렉트 MIXXINNG 이벤트</h1>
          <h1>포스트 시즌 및 특별판 NFT 얻을 기회 </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeadCarousel;
