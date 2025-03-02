import React from "react";
import "./DebitCredit.css";
import Footer from "../components/Footer";

const PaymentForm = () => {
  return (
    <div className="bg">
        <div className="dc-container">
          <div className="payment-box">
            <h2 className="title">DEBIT/CREDIT CARD</h2>
            
            <div className="balance-box">
          <div className="balance-text-container">
            <span className="balance-title">SAVING 5 SAT</span>
            <p className="balance-text">From sat balance</p>
          </div>
          <button className="remove-btn" style={{textDecoration:'underline'}}>remove</button>
        </div>
    
            <div className="card-type">
              <span className="active">Debit</span>
              <span>Credit</span>
            </div>
    
            <label className="label">Card Number</label>
            <div className="card-input">
              <input type="text" placeholder="**** **** **** ****" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="card-logo" />
            </div>
    
            <div className="card-details">
              <select className="select">
                <option>Jan</option>
              </select>
              <select className="select">
                <option>2025</option>
              </select>
              <input type="text" placeholder="CVV" className="cvv-input" />
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
       <div className="footback"> <Footer/></div>
    </div>
  );
  
};

export default PaymentForm;
