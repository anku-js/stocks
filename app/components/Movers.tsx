import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://portal.tradebrains.in/api/index/NIFTY/movers/",
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Movers() {
  const data = await getData();

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
              {data.gainers.map(({ symbol, comp_name, close, percent, change }) => (
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
              {data.losers.map(({ symbol, comp_name, close, percent, change }) => (
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
