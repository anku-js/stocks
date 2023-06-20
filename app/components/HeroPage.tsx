import SensexNifty from "./SensexNifty";
import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="heroPage-container">
      <SensexNifty />
      <div className="heroPage-right">
        <h1>
          Open the doors of <span>Investment!</span>
        </h1>
        <div className="heroPage-trendingStocks">
          <Link href={`/Stock/RELIANCE`} className="trendingStock">Reliance Industries Ltd</Link>
          <Link href={`/Stock/HDFCBANK`} className="trendingStock">HDFC Bank Ltd</Link>
          <Link href={`/Stock/TCS`} className="trendingStock">Tata Consultancy Services Ltd</Link>
          <Link href={`/Stock/ITC`} className="trendingStock">ITC Ltd</Link>
        </div>
        <p className="heroPage-p">
          ANKU&apos;S helps investors make efficient stock research and analysis by
          providing quality fundamental data with insightful visuals.
        </p>
        <a className="getStarted"></a>
      </div>
    </section>
  );
}
