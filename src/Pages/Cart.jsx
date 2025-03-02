import React from 'react'
import Header from '../components/Header'
import '../Pages/Cart.css'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div className="App">
      <main>
      <Header/>
        <section className="shopping-cart">
          <h1>SHOPPING CART</h1>
          <p>You have nothing in your shopping cart.</p>
          <button className='button'>Continue Shopping</button>
        </section>
        </main>
      <footer>
        <div className="footer-content">
          
        </div>
        <Footer/>
      </footer>
    </div>
  )
}

export default Cart
