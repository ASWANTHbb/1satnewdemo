import React from 'react';
import Header from '../components/Header';
import '../Pages/Cart.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className='cartbg'>
      <div className="App">
        <main>
          <Header />
          <section className="shopping-cart">
            <h1>SHOPPING CART</h1>
            <p>You have nothing in your shopping cart.</p>
            <Link to={'/Covering'}><button className='button'>Continue Shopping</button></Link>
          </section>
        </main>
        <footer>
          <div className="footer-content">
            {/* Footer content goes here */}
          </div>
        </footer>
      </div>
      <div className='footback'><Footer /></div>
    </div>
  );
}

export default Cart;