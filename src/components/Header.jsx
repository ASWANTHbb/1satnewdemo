import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) { // Adjust the breakpoint as needed
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
            <Nav.Link as={Link} to="/cart">CART[0]</Nav.Link>
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
          </Nav>

          {/* Show "Cart[0]" on the right in non-responsive mode */}
          {!isCollapsed && (
            <Nav>
              <Nav.Link as={Link} to="/cart">CART[0]</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;