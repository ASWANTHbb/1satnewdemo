import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../Pages/History.css';
import hy from '../assets/hy.gif';


function History() {
  useEffect(() => {
      document.body.style.overflowX = 'hidden'; 
      return () => {
        document.body.style.overflowX = 'auto'; 
      };
    }, []);
  return (
    
    <div>
      
      <div className='his'>
        <Header />
        <div className='container' id='space'>
          <div className="row">
            {/* Left Column: Spacecraft Heading */}
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='study' style={{ color: "#F7931A" }}>
                STUDY OUR <br /> HISTORY
              </h1>
            </div>

            {/* Spacer Column (Hidden on Small Screens) */}
            <div className="col-md-1 col-lg-2 d-none d-md-block"></div>

            {/* Right Column: Description */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className='sentence2'>
              While you are just learning about our civilization’s existence, we have been aware of yours for millennia and have spent the last hundred years attempting to contact you. You haven’t made it easy! We hope this online course will highlight our efforts and debunk any misunderstandings you may have.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* next part */}
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <img src={hy} alt="no image" className="img-fluid" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
        </div>
        <div className="col-md-4">
          <div>
            <p className='mt-5' style={{fontSize:'70px'}}> WHAT’S COVERED</p>
            <hr className='mb-5' style={{
    border: '#F7931A',
    height: '2px',
    background: ' #F7931A',
    width: '90vh',
    margin: '20px 0',
    
  }}/>            
      <p>[ 01 ] CANIS MINOR: OUR LITTLE CORNER OF THE GALAXY
          </p>     
        
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default History