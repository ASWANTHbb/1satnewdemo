import React from 'react';
import '../Pages/Home.css';
import Header from '../components/Header';
import alien from '../assets/alien.png';

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
            <div className='starbg'></div>
        </>
        
    );
}

export default Home;