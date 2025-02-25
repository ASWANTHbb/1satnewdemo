import React from 'react';
import '../Pages/Spacecraft.css';
import Header from '../components/Header';

function SpaceCraft() {
  return (
    <>
      <div className='bgimg'>
       <Header/>
        <div className='container' id='visit'>
          <div className="row">
            
            <div className="col-md-6">
              <h1 className='spacecraft' style={{color: "#F7931A",
              }}>VIST OUR <br /> SPACECRAFT</h1>
            </div>
            
            <div className="col-md-6 ">
              <div className='sentence1'>In the interest of cross-species understanding, we invite you to book a visit to our spacecraft, where you will experience stunning views, mind-expanding technology and exceptional Canis Minor hospitality (try the yurgenflark!). </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default SpaceCraft;