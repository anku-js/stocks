"use client"
import {useEffect, useState} from "react"
import Link from "next/link";
interface Gainers {
  comp_name: string,
  symbol: string,
  close: number,
  percent: number,
  change: number,
}
interface Losers {
  comp_name: string,
  symbol: string,
  close: number,
  percent: number,
  change: number
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
              {marketMovers?.gainers?.map(({ symbol, comp_name, close, percent, change }) => (
                <tr key={comp_name}>
                  <td className="comp-name">
                    <Link href={`/components/Stock/${symbol}`}>
                      {comp_name}
                    </Link>
                  </td>
                  <td className="price">{close}</td>
                  <td className="percent">+{percent}</td>
                  <td className="change">+{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* `/Stocks/${comp_name}`  components/Stock/[slug]*/}
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
              {marketMovers?.losers?.map(({ symbol, comp_name, close, percent, change }) => (
                <tr key={comp_name}>
                  <td className="comp-name">
                  <Link href={`/components/Stock/${symbol}`}>
                      {comp_name}
                    </Link>
                  </td>
                  <td className="price">{close}</td>
                  <td className="percent">{percent}</td>
                  <td className="change">{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
