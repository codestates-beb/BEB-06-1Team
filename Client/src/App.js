import "./App.css";
import MetamaskConnect from "./apps/MetamaskConnect";
import NFTMint from "./apps/NFTMint";
import NFTList from "./apps/NFTList";
import MyPage from "./apps/MyPage";

function App() {
  return (
    <div>
      <h1>CheckShirts Scan</h1>
      <MetamaskConnect></MetamaskConnect>
      <NFTMint />
      <NFTList />
      <MyPage />
    </div>
  );
}

export default App;
