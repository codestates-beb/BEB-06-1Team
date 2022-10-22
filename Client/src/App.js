import React from 'react';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import MintPage from './pages/MintPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import MetamaskConnect from './apps/MetamaskConnect';
// import NFTMint from './apps/NFTMint';
// import NFTList from './apps/NFTList';
// import MyPage from './apps/MyPage';

const App = () => {
  
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mintpage" element={<MintPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
};

export default App;
