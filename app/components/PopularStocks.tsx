"use client";
import { useState, useEffect } from "react";

export default function PopularStocks() {
  const [stocksData, setStockData] = useState([]);

  useEffect(function () {
    fetch(
      "https://api.bseindia.com/BseIndiaAPI/api/GetStkCurrMain/w?flag=Equity&ddlVal1=Index&ddlVal2=S%26P%20BSE%20SENSEX&m=0&pgN=1"
    )
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);
  console.log(stocksData);

  return (
    <div className="popularStocks-list-wrapper">
      {stocksData.map(({ LongName, ScripName, Price, PercentChange }) => (
        <div className="popularStocks-list">
          <div className="stocks-name">
            <p className="stocks-fullname">{LongName}</p>
            <p className="stocks-abbreviation">{ScripName}</p>
          </div>
          <div className="stocks-price-wrapper">
            <p className="stocks-price">{Price}</p>
            <p className="stocks-pricechange">{PercentChange}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
