import React, { useEffect, useState } from 'react';
import '../Pages/ViewProduct.css';
import { Link } from 'react-router-dom';
import tshirt from '../assets/tshirt.gif';
import hoodie from '../assets/hoodie.gif';
import cap from '../assets/headcap.gif';
import AdminUpdate from './AdminUpdate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from '../components/AdminHeader'

function ViewProduct() {
  const [products, setProducts] = useState([
    { id: 1, image: tshirt, title: "TORSO COVERING", name: "Espancho", price: "1Sat", usd: "12$" },
    { id: 2, image: cap, title: "HEAD COVERING", name: "Espancho", price: "1Sat", usd: "12$" },
    { id: 3, image: hoodie, title: "HOODIE", name: "Espancho", price: "1Sat", usd: "12$" }
  ]);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  const handleDelete = (productId) => {
    const product = products.find(product => product.id === productId);
    if (product) {
      toast.success(`${product.title} deleted successfully!`);
      console.log(`Deleted product: ${product.title} (${product.id})`);
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100vw' }}>
      <ToastContainer />
      
      <div className='bod'>
      <AdminHeader />

        <div className='container-fluid' id='cov'>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='ring' style={{ color: "#F7931A" }}>
                VIEW<br /> PRODUCTS
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
        <p className='access text-center' style={{ color: '#F7931A' }}>
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>COVERINGS</Link>  |
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>ACCESSORIES </Link>  |
          <Link to={'/viewproduct'} style={{ textDecoration: 'none', color: '#F7931A' }}>OBJECTS</Link>
        </p>
        
        <div className="row mt-5 w-100 m-0">
          <div className="col-12 col-md-1"></div>
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-3 mb-4 mb-md-0 text-center">
              <div style={{ height: '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={product.image} alt="no image" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div className='mt-3 d-flex justify-content-center align-items-center flex-column' style={{ color: '#F7931A' }}>
                <h6>{product.title}</h6>
                <p>{product.name}</p>
                <p className='fs-5'>{product.price} <span style={{ fontSize: '20px' }}>{product.usd}</span></p>
                <div className="d-flex gap-3">
                  <button className="btn btn-success">
                    <AdminUpdate />
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
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
