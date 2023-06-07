"use client";
import { useState, useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function SensexNifty() {
  const [sensexData, setSensexData] = useState([]);
  const [niftyData, setNiftyData] = useState([]);
  const [niftyFinanceData, setNiftyFinanceData] = useState([]);
  const [niftyBankData, setNiftyBankData] = useState([]);

  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/SENSEX/prices?days=1&type=INTRADAY&limit=1"
    )
      .then((res) => res.json())
      .then((data) => setSensexData(data));
  }, []);
  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/NIFTY/prices?days=1&type=INTRADAY&limit=1"
    )
      .then((res) => res.json())
      .then((data) => setNiftyData(data));
  }, []);
  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/NIFTYFINANCE/prices?days=1&type=INTRADAY&limit=1"
    )
      .then((res) => res.json())
      .then((data) => setNiftyFinanceData(data));
  }, []);
  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/BANKNIFTY/prices?days=1&type=INTRADAY&limit=1"
    )
      .then((res) => res.json())
      .then((data) => setNiftyBankData(data));
  }, []);
  console.log(sensexData);

  return (
    <div className="index-contianer">
      <div className="sensex-container">
        {sensexData.map(({ open, close, percent, change }) => (
          <div className="sensex">
            <p className="index-type">SENSEX</p>
            <div className="index-value">
              <p>
                {close > open ? (
                  <AiFillCaretUp className="upArrow" />
                ) : (
                  <AiFillCaretDown className="downArrow" />
                )}
              </p>
              <h1>{close}</h1>
            </div>
            <div className="index-change-details">
              <div
                className="index-change"
                style={{
                  color: close > open ? "rgb(0, 255, 87)" : "rgb(248, 46, 46)",
                }}
              >
                {close > open
                  ? `+ ${percent} (+ ${change})`
                  : `- ${percent} (- ${change})`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="nifty-container">
        {niftyData.map(({ open, close, percent, change }) => (
          <div className="nifty">
            <p className="index-type">NIFTY</p>
            <div className="index-value">
              <p>
                {close > open ? (
                  <AiFillCaretUp className="upArrow" />
                ) : (
                  <AiFillCaretDown className="downArrow" />
                )}
              </p>
              <h1>{close}</h1>
            </div>
            <div className="index-change-details">
              <div
                className="index-change"
                style={{
                  color: close > open ? "rgb(0, 255, 87)" : "rgb(248, 46, 46)",
                }}
              >
                {close > open
                  ? `+ ${percent} (+ ${change})`
                  : `- ${percent} (- ${change})`}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="niftyFinance-container">
        {niftyFinanceData.map(({ open, close, percent, change }) => (
          <div className="niftyFinance">
            <p className="index-type">NIFTY FINANCE </p>
            <div className="index-value">
              <p>
                {close > open ? (
                  <AiFillCaretUp className="upArrow" />
                ) : (
                  <AiFillCaretDown className="downArrow" />
                )}
              </p>
              <h1>{close}</h1>
            </div>
            <div className="index-change-details">
              <div
                className="index-change"
                style={{
                  color: close > open ? "rgb(0, 255, 87)" : "rgb(248, 46, 46)",
                }}
              >
                {close > open
                  ? `+ ${percent} (+ ${change})`
                  : `- ${percent} (- ${change})`}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="niftyBank-container">
        {niftyBankData.map(({ open, close, percent, change }) => (
          <div className="niftyBank">
            <p className="index-type">NIFTY BANK</p>
            <div className="index-value">
              <p>
                {close > open ? (
                  <AiFillCaretUp className="upArrow" />
                ) : (
                  <AiFillCaretDown className="downArrow" />
                )}
              </p>
              <h1>{close}</h1>
            </div>
            <div className="index-change-details">
              <div
                className="index-change"
                style={{
                  color: close > open ? "rgb(0, 255, 87)" : "rgb(248, 46, 46)",
                }}
              >
                {close > open
                  ? `+ ${percent} (+ ${change})`
                  : `- ${percent} (- ${change})`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
