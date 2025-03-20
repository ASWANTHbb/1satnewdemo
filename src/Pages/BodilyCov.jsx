import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SERVER_URL = "http://localhost:4000"; // Backend Server URL

function BodilyCov() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [time, setTime] = useState("00:30:22");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false); // State for view more toggle
  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.success) {
          setProduct(data.product);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Error fetching product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const [hh, mm, ss] = prevTime.split(":").map(Number);
        let totalSeconds = hh * 3600 + mm * 60 + ss;
        if (totalSeconds > 0) {
          totalSeconds -= 1;
        }
        const newHours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const newMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const newSeconds = String(totalSeconds % 60).padStart(2, "0");
        return `${newHours}:${newMinutes}:${newSeconds}`;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle Buy Now button click
  const handleBuyNow = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/payment');
    }
  };

  if (loading) {
    return <h2 className="text-center text-warning mt-5">Loading product details...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  return (
    <div className='bg container-fluid'>
      <Header />
      <div className='container mt-4'>
        <h6 className='text-warning text-center text-md-start px-md-5'>
          <Link style={{ textDecoration: 'none', color: '#F7931A' }}>BODILY COVERINGS</Link> &nbsp; &gt; &nbsp; {product.name}
        </h6>
        <div className='row align-items-center justify-content-center text-center'>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <img
              src={product.gifUrl.startsWith('http') ? product.gifUrl : `${SERVER_URL}${product.gifUrl}`}
              alt={product.name}
              className='img-fluid rounded shadow-lg'
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0 '>
            <div style={{ border: '1px solid orange' }} className='text-center text-light p-4 rounded shadow-lg w-100'>
              <p className='display-5 fw-bold text-warning mb-2'>HURRY UP!</p>
              <p className='display-6 fw-bold text-danger mb-2'>DEAL ENDS IN</p>
              <p className='display-6 fw-bold'>{time}</p>
            </div>
            <div className='d-flex flex-column align-items-start w-100 p-3'>
              <h2 className='text-warning text-center text-md-start'>{product.name}</h2>
              <h5 className='text-warning text-center text-md-start'>${product.price}</h5>

              {/* Description with View More */}
              <p className='text-center text-md-start' style={{ fontSize: '15px' }}>
                {showFullDescription 
                  ? product.description 
                  : `${product.description.slice(0, 150)}...`}
                    <button
                className='btn btn-link text-warning p-0 ms-3'
                onClick={() => setShowFullDescription(!showFullDescription)}
                style={{ fontSize: '14px', textDecoration: 'none' }}
              >
                {showFullDescription ? 'View Less' : 'View More'}
              </button>
              </p>
            

              <p className='fw-bold text-center text-md-start'>BURNO STUDIOS</p>
              <button
                className='btn btn-outline-warning w-100 rounded-pill py-2 mt-2 shadow-sm'
                style={{ transition: '0.3s ease-in-out' }}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='footback'><Footer /></div>
    </div>
  );
}

export default BodilyCov;
