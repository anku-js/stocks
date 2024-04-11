"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsEmojiSmile } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
interface Gainers {
  comp_name: string;
  symbol: string;
  close: number;
  percent: number;
  change: number;
}
interface Losers {
  comp_name: string;
  symbol: string;
  close: number;
  percent: number;
  change: number;
}

interface MarketMovers {
  gainers?: Gainers[];
  losers?: Losers[];
}
export default function Movers() {
  const [marketMovers, setMarketMovers] = useState<MarketMovers>({});

  useEffect(function () {
    fetch("https://portal.tradebrains.in/api/index/NIFTY/movers/")
      .then((res) => res.json())
      .then((data) => setMarketMovers(data));
  }, []);

  return (
    <div id="movers-container">
      <div className="gainers-container">
        <div className="gainers">
          <div className="gainers-heading">
            <div className="circle-heading">
              <BsEmojiSmile className="smile-icon" />
            </div>
            <div>
              <p>Gainers</p>
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
                ({ symbol, comp_name, close, percent, change }) => (
                  <tr key={comp_name}>
                    <td className="comp-name">
                      <Link href={`/Stock/${symbol}`}>{comp_name}</Link>
                    </td>
                    <td className="price">{close}</td>
                    <td className="percent">+{percent.toFixed(2)}</td>
                    <td className="change">+{change.toFixed(2)}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="losers-container">
        <div className="losers">
          <div className="losers-heading">
            <div className="circle-heading">
              <TfiFaceSad className="sad-icon" />
            </div>
            <div>
              <p>Losers</p>
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
                ({ symbol, comp_name, close, percent, change }) => (
                  <tr key={comp_name}>
                    <td className="comp-name">
                      <Link href={`/Stock/${symbol}`}>{comp_name}</Link>
                    </td>
                    <td className="price">{close}</td>
                    <td className="percent">{percent.toFixed(2)}</td>
                    <td className="change">{change.toFixed(2)}</td>
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
