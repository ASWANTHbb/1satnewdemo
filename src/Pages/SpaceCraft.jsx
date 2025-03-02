import React, { useState, useEffect } from 'react';
import '../Pages/Spacecraft.css';
import Header from '../components/Header';
import bglobe from '../assets/ourhistory.png';
import btshirt from '../assets/dress.jpg';
import { Link } from 'react-router-dom';
import arrival from '../assets/arrival.jpg';
import Footer from '../components/Footer'
function SpaceCraft() {
  const [isZoomed, setIsZoomed] = useState(false);

  
  useEffect(() => {
    document.body.style.overflowX = 'hidden'; 
    return () => {
      document.body.style.overflowX = 'auto'; 
    };
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      const imgContainer = document.querySelector('.img-container');
      if (imgContainer) {
        const rect = imgContainer.getBoundingClientRect();
       
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsZoomed(true);
        } else {
          setIsZoomed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
   <div className='bgimg'>
        <Header />
        <div className='container' id='visit'>
          <div className="row">
            {/* Left Column: Spacecraft Heading */}
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='spacecraft' style={{ color: "#F7931A" }}>
                VISIT OUR <br /> SPACECRAFT
              </h1>
            </div>

            {/* Spacer Column (Hidden on Small Screens) */}
            <div className="col-md-1 col-lg-2 d-none d-md-block"></div>

            {/* Right Column: Description */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className='sentence1'>
                In the interest of cross-species understanding, we invite you to book a visit to our spacecraft, where you will experience stunning views, mind-expanding technology, and exceptional Canis Minor hospitality (try the yurgenflark!).
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Next part */}
     <div className='bgimg1'>
        <div className="row p-3 p-md-5">
    {/* Image Column */}
    <div className="col-12 col-md-5 mb-4 mb-md-0">
      <div className={`img-container ${isZoomed ? 'zoomed' : ''}`}>
        <img src={bglobe} alt="no image" className="img-fluid" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    <div className="col-md-2"></div>
      {/* Text Column */}
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center flex-column text-center text-md-start">
        <h1 className="mb-3" style={{ color: '#F7931A' }}>What to Expect</h1>
        <p className="mb-0" style={{marginLeft:'16%'}}>
          We can understand why you might be nervous – it is a giant metal flying object, after all, from a place you’ve never been or even heard of. It’s nothing like a car or plane, but don’t worry! We’ve done this plenty of times and people mostly make it back fully intact.
        </p>
      </div>
    </div>
    {/* next row */}
    <div className="row  p-3 p-md-5">
    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center flex-column text-center text-md-start">
        <h1 className="mb-3" style={{ color: '#F7931A' }}>how to dress</h1>
        <p className="mb-0 " style={{marginLeft:'18%'}}>
        We will try to make your journey as enjoyable as possible, but since your human bodies are not familiar with this form of travel, we suggest wearing only the most comfortable coverings. We have designed a few you might enjoy.
        </p>
       <Link to={'/covering'}>
         <button 
        className='btn' 
        style={{ 
          backgroundColor: 'transparent', 
          color: '#F7931A', 
          border: '1px solid  #F7931A',
          borderRadius: '25px', 
          padding: '1% 20px', 
          width:'100%',
          marginTop:'10%',
          marginLeft:'15%',
          fontSize: '16px', 
          cursor: 'pointer', 
        }}
      >
        SHOP BODILY COVERINGS
      </button>
       </Link>
      </div>
    <div className="col-md-2"></div>
    <div className="col-12 col-md-5 mb-4 mb-md-0">
        <div className={`img-container ${isZoomed ? 'zoomed' : ''}`}>
          <img src={btshirt} alt="no image" className="img-fluid" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      
      
    </div>
    <div className="row p-3 p-md-5">
      {/* Image Column */}
      <div className="col-12 col-md-5 mb-4 mb-md-0">
        <div className={`img-container ${isZoomed ? 'zoomed' : ''}`}>
          <img src={arrival} alt="no image" className="img-fluid" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    <div className="col-md-2"></div>
      {/* Text Column */}
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center flex-column text-center text-md-start">
        <h1 className="mb-3" style={{ color: '#F7931A' }}>ARRIVAL & DEPARTURE</h1>
        <p className="mb-0" style={{marginLeft:'5%'}}>
        After booking your visit, a giant light beam will appear at your specified time and location. Once you are off the ground, time will not move at the rate you are accustomed to, so ensure you have things in order back on Earth. If you do not show up, you will still be charged.
        </p>
      </div>
    </div>
  
<div className='footback'><Footer/></div>
     </div>

    </>
  );
}

export default SpaceCraft;