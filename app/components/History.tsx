"use client";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineFieldTime } from "react-icons/ai"; 

export default function History() {
  const [marketMovers, setMarketMovers] = useState({});

  useEffect(function () {
    fetch("https://portal.tradebrains.in/api/index/NIFTY/movers/")
      .then((res) => res.json())
      .then((data) => setMarketMovers(data));
  }, []);

  return (
    <div className="history-container">
      <div className="recentlyViewed-container">
        <div className="recentlyViewed">
          <div className="recentlyViewed-heading">
            <div className="circle-heading">
              <AiOutlineFieldTime className="time-icon" />
            </div>
            <div>
              <p>Recently Viewed</p>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Percentage</th>
                <th>Change</th>
              </tr>
              {marketMovers?.gainers?.map(
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
      <div className="watchList-container">
        <div className="watchList">
          <div className="watchList-heading">
            <div className="circle-heading">
              <AiOutlineHeart className="heart-icon" />
            </div>
            <div>
              <p>Watchlist</p>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Company</th>
                <th>Price</th>
                <th>Percentage</th>
                <th>Change</th>
              </tr>
              {marketMovers?.losers?.map(
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
