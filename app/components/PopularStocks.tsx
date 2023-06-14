"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type CompanyData = {
  comp_name: string,
  symbol: string,
  close: number,
  percent: number
}

export default function PopularStocks() {
  const [stocksData, setStockData] = useState({});
  useEffect(function () {
    fetch("https://portal.tradebrains.in/api/index/NIFTY/movers/?limit=8")
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);
  // console.log(stocksData)
  return (
    <div className="popularStocks-list-wrapper">
      {stocksData?.volume_movers?.map(
        ({ comp_name, symbol, close, percent }: CompanyData) => (
          <div className="popularStocks-list" key={comp_name}>
            <div className="stocks-name">
              <a className="stocks-fullname">{comp_name}</a>
              <p className="stocks-abbreviation"><Link href={`/components/Stock/${symbol}`}>{symbol}</Link></p>
              
              {/* <p className="stocks-abbreviation">{symbol}</p> */}
            </div>
            <div className="stocks-price-wrapper">
              <p className="stocks-price">{close}</p>
              <p className="stocks-pricechange">{percent}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
