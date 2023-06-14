import SensexNifty from "./SensexNifty";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HeroPage() {
  return (
    <section className="heroPage-container">
      <SensexNifty />
      <div className="heroPage-right">
        <h1>
          Open the doors of <span>Investment!</span>
        </h1>
        <div className="heroPage-trendingStocks">
          <a className="trendingStock">Reliance Industries Ltd</a>
          <a className="trendingStock">HDFC Bank Ltd</a>
          <a className="trendingStock">
            Tata Consultancy Services Ltd
          </a>
          <a className="trendingStock">ITC Ltd</a>
        </div>
        <p className="heroPage-p">
          Trade brains portal helps investors make efficient stock research and
          analysis by providing quality fundamental data with insightful
          visuals.
        </p>
        <a className="getStarted">
          <button>
            Get Started
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}
