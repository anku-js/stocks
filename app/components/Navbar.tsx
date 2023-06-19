"use client";
import { useState, useEffect } from "react";
import { BsCoin, BsSearch } from "react-icons/bs";
import PopularStocks from "./PopularStocks";
import SearchedStock from "./SearchedStock";
import { ChangeEvent } from 'react';

interface SearchedStock {
  company?: string;
  symbol?: string;
}


export default function Navbar() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchValue, setSearchValue ] = useState("")
  const [ searchedStock, setSearchedStock] = useState<SearchedStock[]>([])
  function handleOnFocus() {
    setIsInputFocused(true);
  }

  function handleBlur() {
    setIsInputFocused(false);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchValue(value) 
  }

  useEffect(function () {
    fetch(
      `https://portal.tradebrains.in/api/test-search/?keyword=${searchValue}&length=4`
    )
      .then((res) => res.json())
      .then((data) => setSearchedStock(data));
  }, [searchValue]);

  return (
    <header>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-left">
            <BsCoin className="coin-logo" />
            <h1 className="navbar-name">ANKU&apos;S Stocks Watch</h1>
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
                  onChange={handleChange}
                />
              </label>
              {isInputFocused && searchValue === "" ? <PopularStocks /> : null}
              {searchValue !== "" ? <SearchedStock searchedStock={searchedStock}/> : null}
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </header>
  );
}
