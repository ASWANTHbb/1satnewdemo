import React from 'react';
import Header from '../components/Header';
import '../Pages/Partner.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUser, faEye, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Partner() {
  return (
    <>
      <div className='mainback'>
          <div className='container'>
            <Header />
            <div className='d-flex justify-content-center align-items-center flex-column text-center'>
              <div>
                <p className='display-4 mt-5 fw-bold'>BECOME A PARTNER</p>
              </div>
              <div>
                <p className='lead'>
                  Hope on the 1st Satashi network and zap your way to new customers with Lightning-Powered Flash Deals!
                </p>
              </div>
            </div>
    
            <div className='row justify-content-center mt-5'>
              <div className='col-md-5 col-12 mb-4'>
                <Card className='custom-card' style={{backgroundColor:'transparent',border:'solid orange'}}>
                  <Card.Body className='text-center'>
                    <Card.Title>
                      <FontAwesomeIcon icon={faBolt} className='icon' />
                    </Card.Title>
                    <Card.Subtitle className='fw-bold mb-3'>
                      LIGHTNING <br /> FAST PAYMENTS
                    </Card.Subtitle>
                    <Card.Text>
                      Zap! Accept instant Bitcoin payments via the Lightning Network with ultra-low fees!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
    
              <div className='col-md-5 col-12 mb-4'>
                <Card className='custom-card' style={{backgroundColor:'transparent',border:'solid orange'}}>
                  <Card.Body className='text-center'>
                    <Card.Title>
                      <FontAwesomeIcon icon={faUser} className='icon' />
                    </Card.Title>
                    <Card.Subtitle className='fw-bold mb-3'>
                      NEW <br /> CUSTOMER BASE
                    </Card.Subtitle>
                    <Card.Text>
                      Join the wave! Connect with a thriving community of Bitcoin enthusiasts and early adopters.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
    
              <div className='col-md-5 col-12 mb-4'>
                <Card className='custom-card' style={{backgroundColor:'transparent',border:'solid orange'}}>
                  <Card.Body className='text-center'>
                    <Card.Title>
                      <FontAwesomeIcon icon={faEye} className='icon' />
                    </Card.Title>
                    <Card.Subtitle className='fw-bold mb-3'>
                      FLASH <br /> MARKETING
                    </Card.Subtitle>
                    <Card.Text>
                      Tick-Tock! Create thrilling time-limited offers that spark urgency and drive instant action!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
    
              <div className='col-md-5 col-12 mb-4'>
                <Card className='custom-card' style={{backgroundColor:'transparent',border:'solid orange'}}>
                  <Card.Body className='text-center'>
                    <Card.Title>
                      <FontAwesomeIcon icon={faArrowUpRightDots} className='icon' />
                    </Card.Title>
                    <Card.Subtitle className='fw-bold mb-3'>
                      GROWTH <br /> POTENTIAL
                    </Card.Subtitle>
                    <Card.Text>
                      Ride the Bitcoin Wave! Scale your business as adoption grows and our platform takes you further!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
    
            <div className='row justify-content-center mt-5'>
              <div className='col-12 col-lg-8'>
                <Card className='custom-card how-it-works' style={{backgroundColor:'transparent',border:'solid orange'}}>
                  <Card.Body className='text-center'>
                    <Card.Title className='mb-4' style={{color:' #F7931A'}}>HOW IT WORKS</Card.Title>
                    <div className='row'>
                      <div className='col-md-4 mb-4'>
                        <div className='d-flex flex-column align-items-center'>
                          <h2 className='step-number'>1</h2>
                          <h6 className='step-title'>REGISTER</h6>
                          <p className='step-description'>
                            Sign up as a partner and set up your Lightning Network payment integration.
                          </p>
                        </div>
                      </div>
                      <div className='col-md-4 mb-4'>
                        <div className='d-flex flex-column align-items-center'>
                          <h2 className='step-number'>2</h2>
                          <h6 className='step-title'>CREATE DEALS</h6>
                          <p className='step-description'>
                            List your products or services as exciting flash deals.
                          </p>
                        </div>
                      </div>
                      <div className='col-md-4 mb-4'>
                        <div className='d-flex flex-column align-items-center'>
                          <h2 className='step-number'>3</h2>
                          <h6 className='step-title'>GROW</h6>
                          <p className='step-description'>
                            Watch as customers claim your deals and your business grows.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
    
            <div className='d-flex justify-content-center align-items-center flex-column text-center mt-5'>
              <h2 className='mb-3' style={{color:' #F7931A'}}>READY TO JOIN?</h2>
              <p className='mb-4'>
                Start today and step into the future of digital commerce! We will help you set up your Lightning Network
                integration and launch your first flash deal in no time.
              </p>
              <Link to={'/PartnerRegister'}><button className='bitcoin-btn'>Apply Now</button></Link>
            </div>
          
          </div>
          <div className='footback'>  <Footer/></div>
      </div>
    </>
  );
}

export default Partner;