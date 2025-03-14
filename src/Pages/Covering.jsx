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
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    setLoading(true);
    axios.get(`${SERVER_URL}/products`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          setError('Unexpected API response');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        setLoading(false);
      });

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className='silver d-flex justify-content-between'>
            <h3 style={{ color: 'orange' }}>Silver</h3>
            <p className='silverp'><FontAwesomeIcon icon={faAngleLeft} className='fa-3x ms-5' /></p>
            <p className='mt-3 fs-6 ms-3'>Deal Start In</p>
            <p className='mt-2 ms-3 fs-5 '> 01:10:23</p>
            <p className='silverp'><FontAwesomeIcon icon={faAngleRight} className='fa-3x ms-4' /></p>
          </div>

          {/* Product Rows */}
          <div className="row mt-1 w-100">
          <div className='mt-4 text-center'>
            <input
              type='text'
              placeholder='Search by product name...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='form-control w-50 mx-auto'
              style={{backgroundColor:'transparent',  border: "1px solid #F7931A",placeholderColor: "#F7931A",   color: "#F7931A" }}
            />
          </div>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-12 col-md-3 mb-4 mb-md-0 text-center" key={product._id}>
                  <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to={`/bodily-covering/${product._id}`} style={{ textDecoration: 'none' }}>
                      <img 
                        src={product.gifUrl?.startsWith('http') ? product.gifUrl : `${SERVER_URL}/${product.gifUrl}`} 
                        onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image.gif"; }}
                        alt={product.name}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                      />
                    </Link>
                  </div>
                  <div className='mt-3' style={{ color: '#F7931A' }}>
                    <h6 style={{ color: '#F7931A', marginBottom: '0' }}>{product.name}</h6>
                    {product.store && <p><FontAwesomeIcon icon={faShop} /> {product.store}</p>}
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
        <div className='footback'><Footer /></div>
      </div>
    </div>
  );
}

export default Covering;
