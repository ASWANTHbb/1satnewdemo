import React from 'react';
import '../Pages/Home.css';
import Header from '../components/Header';
import alien from '../assets/alien.png';
import earth from '../assets/earth.png';
import footbg from '../assets/bgimg1.png';

function Home() {
    return (
        <>
            <div className='homebg'>
                <Header />
                <div className='d-flex justify-content-center'>
                    <p className='hello-text'>HELLO</p>
                </div>
                <div className='alien-container'>
                    <img src={alien} alt="Alien" className='alien1' />
                </div>
                <div className='d-flex justify-content-center align-items-center'><div className='down-text'>DOWN&nbsp;&nbsp; THERE</div></div>
            </div>
            <div className='starbg'>
            <div className='earth-container'>
                <img src={earth} alt="Alien" className='earth' />
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
                
            </div>
           
        </>
        
    );
}

export default Home;