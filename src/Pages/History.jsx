import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../Pages/History.css';
import hy from '../assets/hy.gif';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

function History() {
  const [activeKey, setActiveKey] = useState(null); // State to track the active accordion item

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  // Function to handle accordion item selection
  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey); // Toggle the active key
  };

  return (
    <div>
      <div className='his'>
        <Header />
        <div className='container' id='space'>
          <div className="row">
            {/* Left Column: Spacecraft Heading */}
            <div className="col-12 col-md-6 col-lg-5">
              <h1 className='study' style={{ color: "#F7931A" }}>
                STUDY OUR <br /> HISTORY
              </h1>
            </div>

            {/* Spacer Column (Hidden on Small Screens) */}
            <div className="col-md-1 col-lg-2 d-none d-md-block"></div>

            {/* Right Column: Description */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className='sentence2'>
                While you are just learning about our civilization’s existence, we have been aware of yours for millennia and have spent the last hundred years attempting to contact you. You haven’t made it easy! We hope this online course will highlight our efforts and debunk any misunderstandings you may have.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Part */}
      <div style={{backgroundColor:'#041e35'}}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img src={hy} alt="no image" className="img-fluid" style={{ height: '500px', width: '500px', objectFit: 'cover',marginTop:'70px' }} />
          </div>
          <div className="col-md-4">
            <div>
              <p className='mt-5 mm' style={{ fontSize: '70px' }}> WHAT’S COVERED</p>
             
  
              {/* Accordion Container */}
             
                <div className="accordion-container">
                  <Accordion activeKey={activeKey} onSelect={handleSelect} flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ 01 ] CANIS MINOR: OUR LITTLE CORNER OF THE GALAXY
                      </Accordion.Header>
                      <Accordion.Body>
                        Our planet might be light-years away, but we’re not that different. Learn a little about where we come from.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ 02 ] THE SEARCH FOR INTERGALACTIC FRIENDSHIP
                      </Accordion.Header>
                      <Accordion.Body>
                        We’ve traveled to every corner of the galaxy and you’re the first planet we can see ourselves sustaining a relationship with. Learn about some of our attempts to make contact.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [ 03 ] A WEBSITE MAKES IT REAL
                      </Accordion.Header>
                      <Accordion.Body>
                        We did it! Learn about the technology we used to successfully make contact after all these millennia.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ 04 ] VISITING EARTH: PRIMITIVE PLANET, GOOD VIBES
                      </Accordion.Header>
                      <Accordion.Body>
                        It’s not time travel, but it almost feels like it with how simple life is on Earth. Learn what we like about it so much.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [ 05 ] HOPES FOR THE FUTURE
                      </Accordion.Header>
                      <Accordion.Body>
                        This is what we’ve been working towards! Now that we’ve successfully made contact, learn all about what we hope to achieve through friendship.
                      </Accordion.Body>
                    </Accordion.Item>
                  
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        [ 06 ] 7,946 THINGS TO KNOW BEFORE WE HANG OUT
                      </Accordion.Header>
                      <Accordion.Body>
                        Our differences only make this friendship more exciting! We’re not saying you’ll love everything about us, but understanding where another species is coming from is always the first step.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className='mt-5'>
            <p className='d-flex justify-content-center align-items-center fs-4' >SELECT YOUR JOURNEY</p>
            <div className="row mt-5 d-flex justify-content-between">
              <div className="col-md-1"></div>
              <div className="col-md-3 ">
              <Card style={{ width: '22rem', height: '22rem', margin: 'auto', textAlign: 'center', padding: '20px',background:'none',border:'1px solid #F7931A' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.1rem', marginBottom: '60px',color:'#F7931A' }}>[PACKAGE 1]</Card.Title>
        <Card.Subtitle className="mb-2" style={{ fontSize: '5rem', marginBottom: '15px',color:'#F7931A'}}>FREE</Card.Subtitle>
        <Card.Text style={{ fontSize: '0.5', marginBottom: '20px' }}>
          Topline information about our existence.
        </Card.Text>
        <Button className='mt-4'  style={{ fontSize: '1.2rem', padding: '1px 20px',width:'100%' ,background:'none',border:'1px solid #F7931A' , color:'#F7931A'}}>WATCH NOW</Button>
      </Card.Body>
    </Card>
              </div>
              <div className="col-md-3 ms-auto">
              <Card style={{ width: '22rem', height: '22rem', margin: 'auto', textAlign: 'center', padding: '20px',background:'none',border:'1px solid #F7931A' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.1rem', marginBottom: '60px',color:'#F7931A' }}>[PACKAGE 2]</Card.Title>
        <Card.Subtitle className="mb-2" style={{ fontSize: '5rem', marginBottom: '15px',color:'#F7931A'}}>$150K</Card.Subtitle>
        <Card.Text style={{ fontSize: '0.5', marginBottom: '20px' }}>
        A complete overview of our time on and off Earth.
        </Card.Text>
        <p className='mt-5'  style={{ fontSize: '1.2rem', padding: '1px 20px',width:'100%' ,color:'#F7931A'}}>[ COMING SOON ]</p>
      </Card.Body>
    </Card>
              </div>
              <div className="col-md-3 ms-auto">
                 <Card style={{ width: '22rem', height: '22rem', margin: 'auto', textAlign: 'center', padding: '20px',background:'none',border:'1px solid #F7931A' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.1rem', marginBottom: '60px',color:'#F7931A' }}>[PACKAGE 3]</Card.Title>
        <Card.Subtitle className="mb-2" style={{ fontSize: '5rem', marginBottom: '15px',color:'#F7931A'}}>$200K</Card.Subtitle>
        <Card.Text style={{ fontSize: '0.5', marginBottom: '20px' }}>
        A fully comprehensive history and the secret of the universe.
        </Card.Text>
        <p  style={{ fontSize: '1.2rem', padding: '1px 20px',width:'100%' ,color:'#F7931A'}}>[ COMING SOON ]</p>
      </Card.Body>
    </Card>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
          <div className='footback'><Footer/></div>
             </div>
          
      </div>
  
  );
}

export default History;