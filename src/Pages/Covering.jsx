import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../Pages/Covering.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faShop } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { SERVER_URL } from '../api/serverUrl';

function Covering() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      document.body.style.overflowX = 'hidden';
      setLoading(true);
      axios.get(`${SERVER_URL}/products`)
         .then((response) => {
            console.log('API Response:', response.data);
            if (response.data && Array.isArray(response.data.products)) {
               setProducts(response.data.products);
            } else {
               console.error('Unexpected API response:', response.data);
               setProducts([]);
            }
            setLoading(false);
         })
         .catch((error) => {
            console.error('Error fetching products:', error);
            setLoading(false);
         });
      
      return () => {
         document.body.style.overflowX = 'auto';
      };
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <div className='bod'>
            <Header />
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

         <div style={{ backgroundColor: '#081f34' }}>
            <div className="flex-column d-flex justify-content-center align-items-center">
               <p className='access d-flex justify-content-center align-items-center text-center' style={{ color: '#F7931A' }}>
                  <Link to={'/covering'} style={{ textDecoration: 'none', color: '#F7931A' }}>COVERINGS</Link> | 
                  <Link to={'/covering'} style={{ textDecoration: 'none', color: '#F7931A' }}>ACCESSORIES</Link> | 
                  <Link to={'/covering'} style={{ textDecoration: 'none', color: '#F7931A' }}>OBJECTS</Link>
               </p>

               <hr className='hr1' style={{
                  border: 'none',
                  height: '2px',
                  background: '#F7931A',
                  width: '50%',
                  margin: '20px 0',
               }} />

               <div className='silver d-flex justify-content-between'>
                  <h3 style={{ color: 'orange' }}>Silver</h3>
                  <p className='silverp'><FontAwesomeIcon icon={faAngleLeft} className='fa-3x ms-5' /></p>
                  <p className='mt-3 fs-6 ms-3'>Deal Start In</p>
                  <p className='mt-2 fs-5 '> 01:10:23</p>
                  <p className='silverp'><FontAwesomeIcon icon={faAngleRight} className='fa-3x ms-4' /></p>
               </div>

               {/* Product Rows */}
               <div className="row mt-5 w-100" style={{ marginLeft: '100px' }}>
                  {products.length > 0 ? (
                     products.map((product, index) => (
                        <div className="col-12 col-md-3 mb-4 mb-md-0 text-center" key={index}>
                           <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Link to={`/BodilyCovering/${product.id}`} style={{ textDecoration: 'none' }}>
                                 <img 
                                    src={product.gifUrl ? `${SERVER_URL}${product.gifUrl}` : "fallback-image.gif"} 
                                    alt={product.name} 
                                    className="img-fluid"
                                    onError={(e) => { e.target.src = "fallback-image.gif"; }} 
                                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                                 />
                              </Link>
                           </div>
                           <div className='mt-3' style={{ color: '#F7931A' }}>
                              <h6 style={{ color: '#F7931A', marginBottom: '0' }}>{product.name}</h6>
                              <p style={{ marginTop: '0', marginBottom: '0' }}><FontAwesomeIcon icon={faShop} /> {product.store}</p>
                              <p style={{ marginTop: '0', fontSize: '20px' }}>
                                 1Sat <span style={{ fontSize: '10px' }}>${product.price}</span>
                              </p>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div>No products available.</div>
                  )}
               </div>
            </div>
         </div>
         <div className='footback'><Footer /></div>
      </div>
   );
}

export default Covering;
