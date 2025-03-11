import React, { useState, useEffect } from "react";
import "../Pages/Payment.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import gpay from '../assets/gpay.png';
import phonepay from '../assets/phonepay.png';

const PaymentPage = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ _id: "" }); // Define the product object

  // If you need to fetch the product, use useEffect
  useEffect(() => {
    // Fetch product data here if needed
    // Example:
    // fetchProduct().then(data => setProduct(data));
  }, []);

  return (
    <div className="payment-container">
      <div className='backarrow'>
        <Link to={'/covering'}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="payment-box">
        <h2 className="title">CHOOSE PAYMENT OPTION</h2>

        <div className="balance-box">
          <span>SAVING 5 SAT</span>
          <span className="remove" style={{ textDecoration: 'underline' }}>remove</span>
        </div>

        <button className="payment-button">
          <Link to={'/debitcredit'} style={{ textDecoration: 'none', color: 'white', fontFamily: 'space mono,monospace' }}>Debit / Credit card</Link>
        </button>
        <button className="payment-button" style={{ color: 'white' }}>Internet banking</button>

        <div className="upi-text">Pay by any UPI app</div>

        <button className="upi-button">
          <img src={gpay} alt="GPay" className="icon" />
        </button>
        <button className="upi-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="icon" />
        </button>
        <button className="upi-button">
          <img src={phonepay} alt="PhonePe" className="icon" />
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
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;