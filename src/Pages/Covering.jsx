import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../Pages/Covering.css'
import tshirt from '../assets/tshirt.gif'
import hoodie from '../assets/hoodie.gif'
import cap from '../assets/headcap.gif'
import bag from '../assets/HandBag.gif'
import top from '../assets/poncho.gif'
import umb from '../assets/umbrella.gif'
import fris from '../assets/frisbee.gif'
import doll from '../assets/Aliendoll.gif'
import take from '../assets/Doormat.gif'


function Covering() {
   useEffect(() => {
      document.body.style.overflowX = 'hidden'; 
      return () => {
        document.body.style.overflowX = 'auto'; 
      };
    }, []);
  return (
    <div>
     <div className='bod'>
        <Header />
        <div className='container' id='cov'>
          <div className="row">
            {/* Left Column: Spacecraft Heading */}
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='ring' style={{ color: "#F7931A" }}>
                BODILY<br /> COVERINGS
              </h1>
            </div>

            {/* Spacer Column (Hidden on Small Screens) */}
            <div className="col-md-1 col-lg-2 d-none d-md-block"></div>

            {/* Right Column: Description */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className='sentence3'>
              from our research, we understand that you express yourselves through your coverings. We hope you will express your excitement around our arrival with this collection.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-column d-flex justify-content-center align-items-center">
        <p className='access d-flex justify-content-center align-items-center'>COVERINGS  |  ACCESSORIES   |   OBJECTS </p>
        <hr className='hr1 ' style={{
    border: '#F7931A',
    height: '2px',
    background: ' #F7931A',
    width: '100vh',
    margin: '20px 0',
    
  }}/>       
  <div className="row mt-5 d-flex justify-content-between">
    <div className="col-md-1"></div>
    <div className="col-md-3">
    <img src={tshirt} alt="no image" />
    </div>
    <div className="col-md-3">
      <img src={cap} alt="no image" />
    </div>
    <div className="col-md-3">
      <img src={hoodie} alt="no image" style={{height:'100%',width:'100%'}} />
    </div>
    <div className="col-md-1"></div>
    </div>

     <div className="row mt-5 d-flex justify-content-between">
    <div className="col-md-1"></div>
    <div className="col-md-3">
    <img src={bag} alt="no image"  style={{height:'100%',width:'100%'}}/>
    </div>
    <div className="col-md-3">
      <img src={top} alt="no image"  style={{height:'100%',width:'100%'}}/>
    </div>
    <div className="col-md-3">
      <img src={umb} alt="no image" style={{height:'100%',width:'100%'}} />
    </div>
    <div className="col-md-1"></div>
    </div>  


     <div className="row mt-5 d-flex justify-content-between">
    <div className="col-md-1"></div>
    <div className="col-md-3">
    <img src={fris} alt="no image"  style={{height:'100%',width:'100%'}}/>
    </div>
    <div className="col-md-3">
      <img src={doll} alt="no image"  style={{height:'100%',width:'100%'}}/>
    </div>
    <div className="col-md-3">
      <img src={take} alt="no image" style={{height:'100%',width:'100%'}} />
    </div>
    <div className="col-md-1"></div>
    </div>     
      </div>
      
    </div>
  )
}

export default Covering