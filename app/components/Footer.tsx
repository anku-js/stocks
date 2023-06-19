import { BsCoin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-actions">
        <div className="footer-left">
          <BsCoin className="coin-logo" />
          <h1 className="footer-name">ANKU&apos;S Stocks Watch</h1>
        </div>
        <p className="footer-p">
          ANKU&apos;S Stocks Watch is a platform to keep you updated with your stocks and share
          market with insightful visuals.
        </p>
      </div>
    </footer>
  );
}
