import React from 'react';
import logo from '../images/Logomark-Opensea.png';
import { SearchIcon } from '@primer/octicons-react';

const Header = () => {
  return (
    <div className="">
      <img src={logo} className="Logo" alt="CheckShirts" />
      <h1>CheckShirts OpenSea</h1>
      <div className='className="input-group'>
        <SearchIcon size={24} />
        <input
          className="form-control"
          type="text"
          placeholder="Search items,collections,and accounts"
          aria-label="default input example"
        ></input>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="radio" aria-label="Radio button for following text input" />
          </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with radio button" />
      </div>
    </div>
  );
};

export default Header;
