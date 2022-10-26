import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

import Home from './pages/Home';
import MintPage from './pages/MintPage';
import MyPage from './pages/MyPage';
import Profile from './pages/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid App">
        <div className="row"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mintpage" element={<MintPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
