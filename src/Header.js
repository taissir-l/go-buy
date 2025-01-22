import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="/images/logo.jpg" alt="logo"></img>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">dfffd</span>
          <span className="header__optionTwo">ddd</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">dfffdd</span>
          <span className="header__optionTwo">ddd</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">ddfffdd</span>
          <span className="header__optionTwo">dddd</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
