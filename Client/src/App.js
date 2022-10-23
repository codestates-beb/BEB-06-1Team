import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header';
import MintPage from './pages/MintPage';
import HeadCarousel from './component/HeadCarousel';
import Footer from './component/Footer';
// import MetamaskConnect from './apps/MetamaskConnect';
// import NFTMint from './apps/NFTMint';
// import NFTList from './apps/NFTList';
// import MyPage from './apps/MyPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row"></div>
        <Header />
        <div className="text-center">
          <h1 className="display-1">Explore,collect,and sell NFTs</h1>
        </div>
        <HeadCarousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mintpage" element={<MintPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
