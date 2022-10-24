import React from 'react';
import HeadCarousel from '../component/HeadCarousel';

import art from '../images/art-01.png';
import music from '../images/music-01.png';
import trading from '../images/trading-cards-01.png';
import collectibles from '../images/collectibles-01.png';
import photography from '../images/photography-category-01.png';
import utility from '../images/utility-01.png';
import domain from '../images/domain-names-01.png';
import sports from '../images/sports-01.png';
import virtual from '../images/virtual-worlds-01.png';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1 className="display-1">Explore,collect,and sell NFTs</h1>
      </div>
      <HeadCarousel />
      <h1>Browse by category</h1>
      <div className="row text-center">
        <div className="m-1 col card">
          <img src={art} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Art</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={music} className="card-img-top" alt="Music" />
          <div className="card-body">
            <p className="card-text">Music</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={trading} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Trading Cards</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="m-1 col card">
          <img src={collectibles} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Collectibles</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={photography} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Photography</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={utility} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Utility</p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="m-1 col card">
          <img src={domain} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Domain Names</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={sports} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Sports</p>
          </div>
        </div>
        <div className="m-1 col card">
          <img src={virtual} className="card-img-top" alt="Art" />
          <div className="card-body">
            <p className="card-text">Virtual Worlds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
