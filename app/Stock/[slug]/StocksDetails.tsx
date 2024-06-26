"use client";
import StockChart from "./StockChart";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface StockData {
  close: number;
  percent: number;
  change: number;
  prev_close: number;
}

interface StockReturnData {
  one_month: number;
  six_months: number;
  one_year: number;
  three_year: number;
  five_year: number;
}

interface StocksKeymetrics {
  mcap: number;
  industry: string;
  industry_pe: number;
  stk_exchange: string;
}
interface Props {
  stockData: StockData[];
  stockName: string;
  stockReturnData: StockReturnData;
  stocksKeymetrics: StocksKeymetrics;
}

export default function StocksDetails({
  stockData,
  stockName,
  stockReturnData,
  stocksKeymetrics,
}: Props) {
  return (
    <div className="stocksPage-container">
      <div className="stocksPage">
        <div className="selectedStock-container">
          {stockData.map(({ close, percent, change, prev_close }) => (
            <div key={8}>
              <div className="selectedStock-top">
                <div className="selectedStock-heading">
                  <h1 className="selectedStock-name">{stockName}</h1>
                </div>
                <div className="selectedStock-shortName-industry">
                  <p className="selectedStock-shortName">
                    Sector: {stocksKeymetrics.industry}
                  </p>
                  <p className="selectedStock-industry">
                    Stock Exchange: {stocksKeymetrics.stk_exchange}
                  </p>
                </div>
                <div className="selectedStock-details">
                  <div className="selectedStock-value-priceChange">
                    <div className="selectedStock-value">
                      <span>
                        {" "}
                        {close > prev_close ? (
                          <AiFillCaretUp className="up-arrow" />
                        ) : (
                          <AiFillCaretDown className="down-arrow" />
                        )}
                      </span>
                      <p>₹ {close}</p>
                    </div>
                    <p
                      className="selectedStock-priceChange"
                      style={{
                        color:
                          close > prev_close
                            ? "rgb(0, 255, 87)"
                            : "rgb(248, 46, 46)",
                      }}
                    >
                      {percent}%({change})
                    </p>
                  </div>
                  <div className="marketcap-container">
                    <p className="marketcap-value">
                      ₹ {stocksKeymetrics.mcap} Cr
                    </p>
                    <p className="marketcap-p">Market cap</p>
                  </div>
                  <div className="industry-pe-container">
                    <p className="marketcap-value">
                      {stocksKeymetrics.industry_pe}
                    </p>
                    <p className="industry-pe-p">PE (TTM)</p>
                  </div>
                </div>
              </div>
              <StockChart
                stockName={stockName}
                close={close}
                prev_close={prev_close}
              />
            </div>
          ))}
          <div className="stocks-return-container">
            <div className="stocks-return">
              <div className="stocks-return-box">
                <div className="stocks-return-month">1M Returns</div>
                <div
                  className="stocks-return-value"
                  style={{
                    color:
                      stockReturnData.one_month > 0
                        ? "rgb(0, 255, 87)"
                        : "rgb(248, 46, 46",
                  }}
                >
                  {stockReturnData.one_month}%
                </div>
              </div>
              <div className="stocks-return-box">
                <div className="stocks-return-month">6M Returns</div>
                <div
                  className="stocks-return-value"
                  style={{
                    color:
                      stockReturnData.six_months > 0
                        ? "rgb(0, 255, 87)"
                        : "rgb(248, 46, 46",
                  }}
                >
                  {stockReturnData.six_months}%
                </div>
              </div>
              <div className="stocks-return-box">
                <div className="stocks-return-month">1Y Returns</div>
                <div
                  className="stocks-return-value"
                  style={{
                    color:
                      stockReturnData.one_year > 0
                        ? "rgb(0, 255, 87)"
                        : "rgb(248, 46, 46",
                  }}
                >
                  {stockReturnData.one_year}%
                </div>
              </div>
              <div className="stocks-return-box">
                <div className="stocks-return-month">3Y Returns</div>
                <div
                  className="stocks-return-value"
                  style={{
                    color:
                      stockReturnData.three_year > 0
                        ? "rgb(0, 255, 87)"
                        : "rgb(248, 46, 46",
                  }}
                >
                  {stockReturnData.three_year}%
                </div>
              </div>
              <div className="stocks-return-box">
                <div className="stocks-return-month">5Y Returns</div>
                <div
                  className="stocks-return-value"
                  style={{
                    color:
                      stockReturnData.five_year > 0
                        ? "rgb(0, 255, 87)"
                        : "rgb(248, 46, 46",
                  }}
                >
                  {stockReturnData.five_year}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
