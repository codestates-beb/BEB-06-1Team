import React from 'react';
import './App.css';
import Home from './apps/Home';
import Header from './apps/Header';
// import MetamaskConnect from './apps/MetamaskConnect';
// import NFTMint from './apps/NFTMint';
// import NFTList from './apps/NFTList';
// import MyPage from './apps/MyPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      {/* <MetamaskConnect></MetamaskConnect>
      <NFTMint />
      <NFTList />
      <MyPage /> */}
      <Home />
    </div>
  );
};

export default App;
