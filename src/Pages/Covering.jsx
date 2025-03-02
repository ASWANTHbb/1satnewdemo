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
import { Link } from 'react-router-dom'


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
      <div className="flex-column d-flex justify-content-center align-items-center">
   
   <p className='access d-flex justify-content-center align-items-center text-center' style={{ color: '#F7931A' }}>
     <Link to={'/covering'} style={{textDecoration:'none',color:' #F7931A'}} >COVERINGS</Link>  |  <Link to={'/covering'} style={{textDecoration:'none',color:' #F7931A'}}>ACCESSORIES </Link>  |   <Link to={'/covering'} style={{textDecoration:'none',color:' #F7931A'}}>OBJECTS</Link>
   </p>
 
  
   <hr className='hr1' style={{
     border: 'none',
     height: '2px',
     background: '#F7931A',
     width: '50%', 
     margin: '20px 0',
   }}/>       
   
   {/* First Row */}
   <div className="row mt-5 w-100" style={{marginLeft:'100px'}}> 
     <div className="col-12 col-md-1"></div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={tshirt} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>TORSO COVERING</h6>
         <p>Sold out</p>
       </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={cap} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>HEAD COVERING</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={hoodie} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>THICKER COVERING</h6>
         <p>Sold out</p>
       </div>
     </div>
     <div className="col-12 col-md-1"></div>
   </div>
 
   {/* Second Row */}
   <div className="row mt-5 w-100 px-3" style={{marginLeft:'100px'}}> 
     <div className="col-12 col-md-1"></div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={bag} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>GREETINGS TOTE</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={top} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>RAIN REPELLER</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={umb} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>UFO ATTRACTOR</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-1"></div>
   </div>  
 
   {/* Third Row */}
   <div className="row mt-5 w-100 px-3" style={{marginLeft:'100px'}}> 
     <div className="col-12 col-md-1"></div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={fris} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}>
         <h6 style={{ color: '#F7931A' }}>PERSONAL UFO</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={doll} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>DIRT RECEPTACLE</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-3 mb-4 mb-md-0 text-center">
       <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <img src={take} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
       </div>
       <div className='mt-3' style={{ color: '#F7931A' }}> 
         <h6 style={{ color: '#F7931A' }}>ANGST RELIEVER</h6>
         <p>Sold out</p>
         </div>
     </div>
     <div className="col-12 col-md-1"></div>
   </div>     
 </div>
      
    </div>
  )
}

export default Covering