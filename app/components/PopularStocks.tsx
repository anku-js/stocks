"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  comp_name: string;
  symbol: string;
  close: number;
  percent: number;
}
interface VolumeMovers {
  volume_movers?: Props[];
}

export default function PopularStocks() {
  const [stocksData, setStockData] = useState<VolumeMovers>({});
  useEffect(function () {
    fetch("https://portal.tradebrains.in/api/index/NIFTY/movers/?limit=8")
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);

  return (
    <div className="popularStocks-list-wrapper">
      {stocksData?.volume_movers?.filter(data => data.symbol !== "NESTLEIND").map(
        ({ comp_name, symbol, close, percent }) => (
          <div className="popularStocks-list" key={comp_name}>
            <div className="stocks-name">
              <Link href={`/Stock/${symbol}`} className="stocks-fullname">
                {comp_name}
              </Link>
              <p className="stocks-abbreviation">{symbol}</p>
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
