import {BsCoin} from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-actions">
      <div className="footer-left">
            <BsCoin className="coin-logo" />
            <h1 className="footer-name">ANKU</h1>
          </div>
        <div className="company">
          <p>Support</p>
        </div>
        <div className="company">
          <p>Account</p>
        </div>
      </div>
    </footer>
  );
}
