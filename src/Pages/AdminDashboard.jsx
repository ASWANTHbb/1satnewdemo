import React, { useEffect, useState } from 'react';
import '../Pages/Home.css';

import earth from '../assets/earth.gif';
import footbg from '../assets/bgimg1.png';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader'

function Home() {
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

  const handleEarthClick = () => {
    const earthImg = document.querySelector('.earth');
    const flash = document.querySelector('.white-flash');
  
    if (earthImg && flash) {
      earthImg.classList.add('animate'); // Zoom effect
      flash.classList.add('show'); // White flash effect
  
      setTimeout(() => {
        window.location.href = "/Map"; // Redirect after animation
      }, 900); // Adjust timing to match animation
    }
  };
  
    return (
        <>
            <div className='homebg'>
             <AdminHeader/>
                <div className='d-flex justify-content-center'>
                    <p className='hello-text'>HELLO</p>
                </div>
                <div className='alien-container'>
                    
                </div>
                <div className='d-flex justify-content-center align-items-center'><div className='down-text'>DOWN&nbsp;&nbsp; THERE</div></div>
            </div>
            <div className='starbg'>
            <div className='earth-container'>
            <div className="white-flash"></div> {/* White flash overlay */}
                <img src={earth} alt="Alien" className='earth' onClick={handleEarthClick} />
                </div>
                <div className='greet'>GREETINGS, EARTHLINGS!</div>
                <div className='greet1'>What does a highly advanced civilization have to do to get noticed around here?<br /><br />

We hail from the constellation Canis Minor and we’re here to harvest your organs and drain your oceans for rocket fuel. Kidding! That’s more of a Canis Major <br /> vibe. <br /><br />

Given that your human civilization has not yet achieved interstellar travel, you are likely unaware of how lonely space is. But we are aware! So we hooked up some br garvanplows <br /> to a couple of flargenbows (and a minoflor, just for giggles) <br /> and set out to find some friends in the cosmos. <br /><br />

For the last hundred years, we’ve been trying to make contact with you, to no avail. But then our Lead Human Researcher made a huge breakthrough: nothing is real to humans until <br /> it is on the internet. So with the help of your Squarespace technology, <br /> we sincerely hope the 55,419th time is the charm!</div>

<div className='footbg-container'>
                    <img src={footbg} alt="Alien" className='footbg' />
                    <div className='faq'>FAQS</div>
                    <div className='faq1'>We understand enough about your fragile human brains to know that you probably have questions about the sudden appearance of a race of technologically superior space beings on your intergalactic doorstep. Our Human Affairs Officer has prepared some answers below.</div>

                </div>
                <div className="row d-flex justify-content-between" id='acco'>
                    <div className="col-md-4"> <div className="accordion-container">
                  <Accordion activeKey={activeKey} onSelect={handleSelect} flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        CANIS MINOR: OUR LITTLE CORNER OF THE GALAXY
                      </Accordion.Header>
                      <Accordion.Body>
                        Our planet might be light-years away, but we’re not that different. Learn a little about where we come from.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                         THE SEARCH FOR INTERGALACTIC FRIENDSHIP
                      </Accordion.Header>
                      <Accordion.Body>
                        We’ve traveled to every corner of the galaxy and you’re the first planet we can see ourselves sustaining a relationship with. Learn about some of our attempts to make contact.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        A WEBSITE MAKES IT REAL
                      </Accordion.Header>
                      <Accordion.Body>
                        We did it! Learn about the technology we used to successfully make contact after all these millennia.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                         VISITING EARTH: PRIMITIVE PLANET, GOOD VIBES
                      </Accordion.Header>
                      <Accordion.Body>
                        It’s not time travel, but it almost feels like it with how simple life is on Earth. Learn what we like about it so much.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        HOPES FOR THE FUTURE
                      </Accordion.Header>
                      <Accordion.Body>
                        This is what we’ve been working towards! Now that we’ve successfully made contact, learn all about what we hope to achieve through friendship.
                      </Accordion.Body>
                    </Accordion.Item>
                  
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        7,946 THINGS TO KNOW BEFORE WE HANG OUT
                      </Accordion.Header>
                      <Accordion.Body>
                        Our differences only make this friendship more exciting! We’re not saying you’ll love everything about us, but understanding where another species is coming from is always the first step.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div></div>
                    <div className="col-md-4">
                    <div className="accordion-container">
                  <Accordion activeKey={activeKey} onSelect={handleSelect} flush>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                         CANIS MINOR: OUR LITTLE CORNER OF THE GALAXY
                      </Accordion.Header>
                      <Accordion.Body>
                        Our planet might be light-years away, but we’re not that different. Learn a little about where we come from.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                       THE SEARCH FOR INTERGALACTIC FRIENDSHIP
                      </Accordion.Header>
                      <Accordion.Body>
                        We’ve traveled to every corner of the galaxy and you’re the first planet we can see ourselves sustaining a relationship with. Learn about some of our attempts to make contact.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                         A WEBSITE MAKES IT REAL
                      </Accordion.Header>
                      <Accordion.Body>
                        We did it! Learn about the technology we used to successfully make contact after all these millennia.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        VISITING EARTH: PRIMITIVE PLANET, GOOD VIBES
                      </Accordion.Header>
                      <Accordion.Body>
                        It’s not time travel, but it almost feels like it with how simple life is on Earth. Learn what we like about it so much.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>
                        HOPES FOR THE FUTURE
                      </Accordion.Header>
                      <Accordion.Body>
                        This is what we’ve been working towards! Now that we’ve successfully made contact, learn all about what we hope to achieve through friendship.
                      </Accordion.Body>
                    </Accordion.Item>
                  
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>
                        7,946 THINGS TO KNOW BEFORE WE HANG OUT
                      </Accordion.Header>
                      <Accordion.Body>
                        Our differences only make this friendship more exciting! We’re not saying you’ll love everything about us, but understanding where another species is coming from is always the first step.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div className="accordion-container">
                  <Accordion activeKey={activeKey} onSelect={handleSelect} flush>
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                        CANIS MINOR: OUR LITTLE CORNER OF THE GALAXY
                      </Accordion.Header>
                      <Accordion.Body>
                        Our planet might be light-years away, but we’re not that different. Learn a little about where we come from.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="13">
                      <Accordion.Header>
                        THE SEARCH FOR INTERGALACTIC FRIENDSHIP
                      </Accordion.Header>
                      <Accordion.Body>
                        We’ve traveled to every corner of the galaxy and you’re the first planet we can see ourselves sustaining a relationship with. Learn about some of our attempts to make contact.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="14">
                      <Accordion.Header>
                         A WEBSITE MAKES IT REAL
                      </Accordion.Header>
                      <Accordion.Body>
                        We did it! Learn about the technology we used to successfully make contact after all these millennia.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="15">
                      <Accordion.Header>
                        VISITING EARTH: PRIMITIVE PLANET, GOOD VIBES
                      </Accordion.Header>
                      <Accordion.Body>
                        It’s not time travel, but it almost feels like it with how simple life is on Earth. Learn what we like about it so much.
                      </Accordion.Body>
                    </Accordion.Item>
                   
                    <Accordion.Item eventKey="16">
                      <Accordion.Header>
                         HOPES FOR THE FUTURE
                      </Accordion.Header>
                      <Accordion.Body>
                        This is what we’ve been working towards! Now that we’ve successfully made contact, learn all about what we hope to achieve through friendship.
                      </Accordion.Body>
                    </Accordion.Item>
                  
                    <Accordion.Item eventKey="17">
                      <Accordion.Header>
                        7,946 THINGS TO KNOW BEFORE WE HANG OUT
                      </Accordion.Header>
                      <Accordion.Body>
                        Our differences only make this friendship more exciting! We’re not saying you’ll love everything about us, but understanding where another species is coming from is always the first step.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                    </div>
                </div>
                <Footer/>
            </div>
           
        </>
        
    );
}

export default Home;