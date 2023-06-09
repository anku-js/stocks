import "./page.scss";
import "../../globals.scss";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";
import StocksDetails from "./StocksDetails";
import Footer from "../../components/Footer";

async function getStocksReturn(symbol: string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock-returns/${symbol}/`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getStocksKeymetrics(symbol: string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock/${symbol}/consolidated/key-metrics/`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getStocksData(symbol: string) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock/${symbol}/prices?days=1&type=INTRADAY&limit=1`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Stocks({ params }: { params: { slug: string } }) {
  const stockData = await getStocksData(params.slug);
  const stockReturnData = await getStocksReturn(params.slug);
  const stocksKeymetrics = await getStocksKeymetrics(params.slug);
  return (
    <div className="page-wrapper">
      <Slider />
      <Navbar />
      <StocksDetails
        stockData={stockData}
        stockName={params.slug}
        stockReturnData={stockReturnData}
        stocksKeymetrics={stocksKeymetrics}
      />
      <Footer />
    </div>
  );
}
