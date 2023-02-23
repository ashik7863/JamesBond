import React from "react";
import images from "./images.png";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TuneIcon from '@mui/icons-material/Tune';

const Header = () => {
  return (
    <div className="parent-section">
      <div className="left-section">
        <div><img src={images} alt="" />
            <div className="logo-name">WASSERSTOFF</div>
        </div>
        <div>
        <div className='search-container'>
        <div className="search-box">
          <input
            type="text"
            placeholder=""
            name=""
            id=""
          />
          <div className="search-icon">
          <SearchIcon/>
          </div>
        </div>
        </div>
        </div>
        
      </div>
      <div className="right-section">
        <div className="right-menu">
        <div>Statistics</div>
        <div>Overview</div>
        <div>Dashboard</div>
        <div>Analytics</div>
        </div>
        <div className="right-icon">
            <div style={{marginLeft:'50px'}}><PersonOutlineIcon/></div>
            <div><TuneIcon/></div>        
        </div>

      </div>
    </div>
  );
};

export default Header;
