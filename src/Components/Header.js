import React from "react";

//importing image
import Logo from "../Image/logo.png";

//importing CSS
import "../Style/header.css";

//importing icons from Material-ui
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo on left */}
      <img className="header_logo" src={Logo} alt="" />
      {/* search box on left side as well  */}
      <div className="header_search">
        <input
          type="text"
          placeholder="Search"
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links */}
      <div class="header_nav">
        <div className="header_option">
          <a href="/">
            <div className="header_snap">
              <snap className="header_snapO1">Hello Sagar</snap>
              <snap className="header_snapO2">Sign In</snap>
            </div>
          </a>
        </div>
        <div className="header_option">
          <a href="/">
            <div className="header_snap">
              <snap className="header_snapO1">Return</snap>
              <snap className="header_snapO2">& Order</snap>
            </div>
          </a>
        </div>
        <div className="header_option">
          <a href="/">
            <div className="header_snap">
              <snap className="header_snapO1"> Your</snap>
              <snap className="header_snapO2">Prime</snap>
            </div>
          </a>
        </div>
        {/* Basket icon with number */}
        <div className="header_icon">
          <ShoppingBasketIcon className="header_iconBasket" />
        </div>

        {/* putting the item counter in basket */}
        <div className="header_basketCounter">
          <span>0</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
