"use client";
import { useState } from "react";
import { BsCoin, BsSearch } from "react-icons/bs";
import PopularStocks from "./PopularStocks";

export default function Navbar() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  function handleOnFocus() {
    setIsInputFocused(true);
  }

  function handleBlur() {
    setIsInputFocused(false);
  }

  return (
    <header>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-left">
            <BsCoin className="coin-logo" />
            <h1 className="navbar-name">ANKU'S</h1>
          </div>
          <div className="navbar-right">
            <div className="search-wrapper">
              <label className="search-bar-label" style={{border: isInputFocused ? "transparent 1px solid" : "", borderRadius: isInputFocused ? "30px 30px 0px 0px" : "30px"}}>
                <BsSearch className="search-icon" />
                <input
                  type="search"
                  className="search-bar-input"
                  name="searchStocks"
                  placeholder="Search Your Stocks"
                  onBlur={handleBlur}
                  onFocus={handleOnFocus}
                />
              </label>
              {isInputFocused ? <PopularStocks /> : ""}
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </header>
  );
}
