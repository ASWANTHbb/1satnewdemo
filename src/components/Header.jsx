import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.setItem("isLoggedIn", "false");  // ✅ Explicitly set to "false"

    console.log("After Logout - isLoggedIn:", localStorage.getItem("isLoggedIn")); 

    setIsLoggedIn(false);
    window.location.reload();  // ⬅️ Forces page reload
};




  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        {/* Show "Cart[0]" on the left in responsive mode */}
        {isCollapsed && (
          <Nav className="responsive-cart">
            <Nav.Link as={Link} to="/cart">CART</Nav.Link>
          </Nav>
        )}

        {/* Always show "1Sat" in the center */}
        <Navbar.Brand as={Link} to="/" className={isCollapsed ? 'center-brand' : ''}>
          1SAT
        </Navbar.Brand>

        {/* Toggle button on the right */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Nav links with conditional styling for responsive mode */}
          <Nav className={`nav-center mx-auto ${isCollapsed ? 'responsive-nav' : ''}`}>
            <Nav.Link as={Link} to="/spacecraft">VISIT SPACECRAFT</Nav.Link>
            <Nav.Link as={Link} to="/history">OUR HISTORY</Nav.Link>
            <Nav.Link as={Link} to="/covering">BODILY COVERINGS</Nav.Link>
            <Nav.Link as={Link} to="/partner">PARTNER</Nav.Link>
          </Nav>

          {/* Show "Cart[0]" on the right in non-responsive mode */}
          {!isCollapsed && (
            <Nav>
              {isLoggedIn ? (
                // Show logout button if logged in
                <Nav.Link as={Link} to="/">
                  <button className='logout-btn 'style={{borderRadius:'100px'}} onClick={handleLogout}>
                    Logout
                  </button>
                </Nav.Link>
              ) : (
                // Show login button if not logged in
                <Nav.Link as={Link} to="/Login">
                  <button className='login-btn'>
                    Login
                  </button>
                </Nav.Link>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;