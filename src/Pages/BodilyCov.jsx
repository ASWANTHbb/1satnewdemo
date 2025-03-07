import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import gif from '../assets/hoodie.gif';
import Footer from '../components/Footer';

function BodilyCov() {
  const [time, setTime] = useState("00:30:22");
  const navigate = useNavigate();

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

  const handleAddToCart = () => {
    localStorage.setItem('cartItem', JSON.stringify({ image: gif, name: 'Thicker Covering', price: 64 }));
    navigate('/Payment');
  };

  return (
    <div className='bg container-fluid'>
      <Header />
      <div className='container mt-4'>
        <h6 className='text-warning text-center text-md-start px-md-5'>
          BODILY COVERINGS &nbsp; &gt; &nbsp; THICKER COVERING
        </h6>
        <div className='row align-items-center justify-content-center text-center'>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <img 
              src={gif} 
              alt='no image' 
              className='img-fluid rounded shadow-lg' 
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0'>
            <div style={{border:'1px solid orange'}} className='text-center text-light p-4 rounded shadow-lg w-100'>
              <p className='display-5 fw-bold text-warning mb-2'>HURRY UP!</p>
              <p className='display-6 fw-bold text-danger mb-2'>DEAL ENDS IN</p>
              <p className='display-6 fw-bold'>{time}</p>
            </div>
            <div className='d-flex flex-column align-items-start w-100 p-3'>
              <h2 className='text-warning text-center text-md-start'>THICKER COVERING</h2>
              <h5 className='text-warning text-center text-md-start'>$64</h5>
              <p className=' text-center text-md-start' style={{ fontSize: '15px' }}>
                Not all humans believe in us, but we believe in you! The perfect hoodie to share in our excitement that we all exist.
              </p>
              <p className='fw-bold text-center text-md-start'>BURNO STUDIOS</p>
              <button 
                className='btn btn-outline-warning w-100 rounded-pill py-2 mt-2 shadow-sm' 
                style={{ transition: '0.3s ease-in-out' }}
                onClick={handleAddToCart}
              >
               Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
     <div className='footback'> <Footer/></div>
    </div>
  );
}

export default BodilyCov;