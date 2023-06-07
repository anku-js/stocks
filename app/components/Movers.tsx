"use client";
import { useState, useEffect } from "react";

export default function Movers() {
  const moversDataFromLocalStorage = JSON.parse(localStorage.getItem("movers"));
  const [marketMovers, setMarketMovers] = useState(
    moversDataFromLocalStorage ? moversDataFromLocalStorage : []
  );

  useEffect(function () {
    fetch("https://portal.tradebrains.in/api/index/NIFTY/movers/")
      .then((res) => res.json())
      .then((data) => setMarketMovers(data));
    localStorage.setItem("movers", JSON.stringify(marketMovers));
  }, []);

  return (
    <div className="movers-container">
      <div className="gainers-container">
        <div className="gainers">
          <p>Gainers</p>
          <table>
            <tbody>
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Percentage</th>
                <th>Change</th>
              </tr>
              {marketMovers.gainers.map(
                ({ comp_name, close, percent, change }) => (
                  <tr key={comp_name}>
                    <td className="comp-name">
                      <a>{comp_name}</a>
                    </td>
                    <td className="price">{close}</td>
                    <td className="percent">+{percent}</td>
                    <td className="change">+{change}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="losers-container">
        <div className="losers">
          <p>Losers</p>
          <table>
            <tbody>
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Percentage</th>
                <th>Change</th>
              </tr>
              {marketMovers.losers.map(
                ({ comp_name, close, percent, change }) => (
                  <tr key={comp_name}>
                    <td className="comp-name">
                      <a>{comp_name}</a>
                    </td>
                    <td className="price">{close}</td>
                    <td className="percent">{percent}</td>
                    <td className="change">{change}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
