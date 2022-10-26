import { useState } from 'react';
import axios from 'axios';
import MetamaskConnect from '../component/MetamaskConnect';

const Profile = () => {
  //@ 하위컴포넌트인 MetamaskConnect.js에서 지갑 주소를 가져올 state
  const [textValue, setTextValue] = useState("")
  //@ DB Json
  const [jsonDB, setJsonDB] = useState('');

  const getTextValue = (text) => {
    setTextValue(text.account);
    GetJson(textValue);  // account 주소가 변경되는 시점에만 DB를 가져옴 // 즉 지갑연결 시점
  }

  const GetJson = () => {

    // debugger;
    axios.post('http://localhost:4000/senddata', { account: `${textValue}` })
    .then(function(res){
      setJsonDB(res.data);
      // console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    });

    console.log("db:", jsonDB)

    // console.log("value :", value);

    // debugger;

    // axios.get('http://localhost:4000/senddata') 
    // .then(function (res) {
    //   setJsonDB(res.data);
    //   console.log(res.data);
    // }).catch(function (error) {
    //   console.log(error);
    // });



  };

  // GetJson();

    return (
        <div>
            {/* <MetamaskConnect getTextValue= {getTextValue}/> */}
        </div>
    );
};

export default Profile;