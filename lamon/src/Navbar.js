import React from "react";
import "./Navbar.css";
import Logo from "./static/images/logo.svg";

function Navbar() {
  return (
    <div className="header">
      <div className="header__div header__left">
        <img src={Logo} alt="" width="40" height="40" />
        <input type="text" className="header__search" placeholder="Type to search..." />
        <button className="header__searchButton">
          <i className="fa fa-search header__searchIcon"></i>
        </button>
      </div>
      <div className="header__div header__right">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Our</span>
          <span className="header__optionLineTwo">Products</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__optionBasket">
          <i className="fa fa-shopping-cart header__cartIcon"></i>
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
