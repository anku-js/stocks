import "./page.scss";
import "../../../globals.scss";
import Slider from "../../Slider";
import Navbar from "../../Navbar";
import StocksDetails from "./StocksDetails";
interface Params {
  params: {
    slug: string
  }
}

async function getStocksReturn(symbol:Params) {
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

async function getStocksKeymetrics(symbol:Params) {
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

async function getStocksData(symbol:Params) {
  const res = await fetch(
    `https://portal.tradebrains.in/api/stock/${symbol}/prices?days=1&type=INTRADAY&limit=1`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(res)
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
      <StocksDetails stockData={stockData} stockName={params.slug} stockReturnData={stockReturnData} stocksKeymetrics={stocksKeymetrics}/>
    </div>

  );
}