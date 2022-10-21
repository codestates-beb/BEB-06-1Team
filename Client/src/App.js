import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MintPage from "./pages/MintPage"
// import MetamaskConnect from "./component/MetamaskConnect";
// import NFTMint from "./component/NFTMint";
// import NFTList from "./component/NFTList";
// import MyPage from "./pages/MintPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/mintpage" element={<MintPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <h1>CheckShirts Scan</h1>
    //   <MetamaskConnect></MetamaskConnect>
    //   <NFTMint />
    //   <NFTList />
    //   <MyPage />
    // </div>
  );
}

export default App;
