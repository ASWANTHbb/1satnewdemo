import React from "react";
import "../Pages/Payment.css";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2 className="title">CHOOSE PAYMENT OPTION</h2>

        <div className="balance-box">
          <span>SAVING 5 SAT</span>
          <span className="remove" style={{textDecoration:'underline'}}>remove</span>
        </div>

        <button className="payment-button"><Link to={'/debitcredit'} style={{textDecoration:'none',color:'orange'}}>Debit / Credit card</Link></button>
        <button className="payment-button">Internet banking</button>

        <div className="upi-text">Pay by any UPI app</div>

        <button className="upi-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" alt="GPay" className="icon" /> G Pay
        </button>
        <button className="upi-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="icon" /> Paytm
        </button>
        <button className="upi-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/PhonePe_Logo.png" alt="PhonePe" className="icon" /> PhonePe
        </button>
      </div>

      <div className="footback">
          <div className="marquee-box">
            <marquee behavior="scroll" direction="left" className="marquee">
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
              <span>🚀</span>
              <span>WE COME IN PEACE</span>
            </marquee>
          </div>
      </div>
    </div>
  );
};

export default PaymentPage;
