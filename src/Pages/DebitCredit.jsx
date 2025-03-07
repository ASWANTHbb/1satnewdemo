import React, { useState } from "react";
import "./DebitCredit.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PaymentForm = () => {
  const [cardType, setCardType] = useState("Debit");

  // Generate months dynamically
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("en", { month: "short" })
  );

  // Generate years dynamically (From 1900 to the next 10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 11 }, (_, i) => 1900 + i);

  return (
    <div className="bg">
      <div className="back">
        <Link to={'/Payment'}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>

      <div className="dc-container">
        <div className="payment-box">
          <h2 className="title">DEBIT/CREDIT CARD</h2>

          <div className="balance-box">
            <div className="balance-text-container">
              <span className="balance-title">SAVING 5 SAT</span>
              <p className="balance-text">From sat balance</p>
            </div>
            <button className="remove-btn" style={{ textDecoration: 'underline' }}>Remove</button>
          </div>

          {/* Toggle Button Group for Debit / Credit */}
          <div className="card-type-group">
            <button
              className={`card-type-btn ${cardType === "Debit" ? "active" : ""}`}
              onClick={() => setCardType("Debit")}
            >
              Debit
            </button>
            <button
              className={`card-type-btn ${cardType === "Credit" ? "active" : ""}`}
              onClick={() => setCardType("Credit")}
            >
              Credit
            </button>
          </div>

          <label className="label">Card Number</label>
          <div className="card-input">
            <input type="text" placeholder="**** **** **** ****" maxLength="19" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="card-logo" />
          </div>

          <div className="card-details">
            <select className="select">
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>

            <select className="select">
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <input type="text" placeholder="CVV" className="cvv-input" maxLength="4" />
          </div>

          <label className="label">Name</label>
          <input type="text" className="name-input" placeholder="JOHN PETER" />

          <div className="checkbox-container">
            <input type="checkbox" id="save-card" />
            <label htmlFor="save-card">Save card for checkouts</label>
          </div>

          <div className="button-container">
            <button className="cancel-btn">Cancel Payment</button>
            <button className="pay-btn">Pay Now</button>
          </div>
        </div>
      </div>

      <div className="footback">
        <Footer />
      </div>
    </div>
  );
};

export default PaymentForm;
