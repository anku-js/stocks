import {useState, useEffect } from "react"

export default function StockLogo({stockName}) {
  const [stockLogo, setStockLogo] = useState("")

  useEffect(function () {
    fetch(
        `https://portal.tradebrains.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FportalFavICon.53398193.png&w=256&q=75`
    )
      .then((res) => res.json())
      .then((data) => setStockLogo(data));
  }, []);
  return (
    <div>
      <img src={stockLogo} />
    </div>
  );
}
