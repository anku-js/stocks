import { BsCoin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-actions">
        <div className="footer-left">
          <BsCoin className="coin-logo" />
          <h1 className="footer-name">ANKU</h1>
          <p className="footer-p">
            ANKU'S is a platform to keep you updated with your stocks and share
            market with insightful visuals.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-losers">
            <a href="#movers-container">Top Gainers</a>
          </div>
          <div className="footer-losers">
            <a href="#movers-container">Top Losers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
