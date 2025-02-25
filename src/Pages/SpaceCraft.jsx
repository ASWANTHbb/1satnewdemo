import React from 'react';
import '../Pages/Spacecraft.css';
import Header from '../components/Header';

function SpaceCraft() {
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
    </>
  );
}

export default SpaceCraft;