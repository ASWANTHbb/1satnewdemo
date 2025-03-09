import React, { useEffect } from 'react';
import '../Pages/ViewProduct.css';
import { Link } from 'react-router-dom';
import tshirt from '../assets/tshirt.gif';
import hoodie from '../assets/hoodie.gif';
import cap from '../assets/headcap.gif';

function ViewProduct() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div>
      <div className='bod'>
        <div className='container' id='cov'>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='ring' style={{ color: "#F7931A" }}>
                BODILY<br /> COVERINGS
              </h1>
            </div>
            <div className="col-md-1 col-lg-2 d-none d-md-block"></div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className='sentence3'>
                From our research, we understand that you express yourselves through your coverings. We hope you will express your excitement around our arrival with this collection.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-column d-flex justify-content-center align-items-center">
        <p className='access d-flex justify-content-center align-items-center text-center' style={{ color: '#F7931A' }}>
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>COVERINGS</Link>  |  
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>ACCESSORIES </Link>  |   
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>OBJECTS</Link>
        </p>

        <hr className='hr1' style={{
          border: 'none',
          height: '2px',
          background: '#F7931A',
          width: '50%',
          margin: '20px 0',
        }} />

        {/* First Row */}
        <div className="row mt-5 w-100" style={{ marginLeft: '100px' }}>
          <div className="col-12 col-md-1"></div>

          {/* Product Card */}
          {[ 
            { image: tshirt, title: "TORSO COVERING", name: "Espancho", price: "1Sat", usd: "12$" },
            { image: cap, title: "HEAD COVERING", name: "Espancho", price: "1Sat", usd: "12$" },
            { image: hoodie, title: "HOODIE", name: "Espancho", price: "1Sat", usd: "12$" }
          ].map((product, index) => (
            <div key={index} className="col-12 col-md-3 mb-4 mb-md-0 text-center">
              <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={product.image} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div className='mt-3 d-flex justify-content-center align-items-center flex-column' style={{ color: '#F7931A' }}>
                <h6 style={{ color: '#F7931A' }}>{product.title}</h6>
                <p>{product.name}</p>
                <p className='fs-5'>{product.price} <span style={{ fontSize: '20px' }}>{product.usd}</span></p>
                <div className="d-flex gap-3">
                  {/* Edit Button */}
                  <button className="btn btn-success">
                    <i className="bi bi-pencil"></i>
                  </button>
                  {/* Delete Button */}
                  <button className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
