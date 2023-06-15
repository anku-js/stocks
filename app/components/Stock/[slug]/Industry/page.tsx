import "../page.scss";
import "../../../../globals.scss";
import Slider from "../../../Slider";
import Navbar from "../../../Navbar";

async function getStocksData(symbol:string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock/${symbol}/prices?days=1&type=INTRADAY&limit=1`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

async function getStocksReturn(symbol:string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock-returns/${symbol}/`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

async function getStocksKeymetrics(symbol:string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock/${symbol}/consolidated/key-metrics/`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json()
}

export default async function Stocks({params}) {
const stockData = await getStocksData(params.slug)
const stockReturnData = await getStocksReturn(params.slug)
const stocksKeymetrics = await getStocksKeymetrics(params.slug)
  return (
    <div className="page-wrapper">
      <Slider />
      <Navbar />
    </div>

  );
}