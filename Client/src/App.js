import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header';
import MintPage from './pages/MintPage';
import Footer from './component/Footer';
// import MetamaskConnect from './component/MetamaskConnect';
// import NFTMint from './component/NFTMint';
// import NFTList from './component/NFTList';
import MyPage from './component/MyPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mintpage" element={<MintPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
