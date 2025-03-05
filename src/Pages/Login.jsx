import React, { useEffect, useState } from 'react';
import '../Pages/Login.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import img from '../assets/login.png'
import Footer from '../components/Footer';

function Login() {
    useEffect(() => {
        document.body.style.overflowX = 'hidden'; 
        return () => {
          document.body.style.overflowX = 'auto'; 
        };
      }, []);
    
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Log each typed letter to the console
    console.log(`Typed in ${name}:`, value);
  };

  return (
    <>
     <div className='bgfoot'>
          <div className="log-container">
            <div className='row'>
              <div className="col-md-6">
                <div className='deal d-flex align-items-center justify-content-center flex-column'>
                  <p className='dealhunder'>WELCOME DEAL HUNTER!</p>
                  <p className='subtitle'>Log In Or Sign Up To Begin Your Ultimate Deal Hunt!</p>
                  <button className='nostr'>Login with Nostr</button>
                  <p className='nossub'>Requires a Nostr Browser Extension: Alby, Nos2x, Nostr Connect, Flamingo, or Nsec.app</p>
                </div>
    
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  <ButtonGroup aria-label="Basic example" className='logbtn'>
                    <Button variant="" onClick={() => setIsLogin(true)}>Login</Button>
                    <Button variant="" onClick={() => setIsLogin(false)}>Register</Button>
                  </ButtonGroup>
    
                  {isLogin ? (
                    <>
                      <input 
                        type="text" 
                        name="username"
                        placeholder="Username" 
                        className='usernamep' 
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        className='usernamep' 
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </>
                  ) : (
                    <>
                      <input 
                        type="text" 
                        name="username"
                        placeholder="Username" 
                        className='usernamep' 
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className='usernamep' 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        className='usernamep' 
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <input 
                        type="password" 
                        name="confirmPassword"
                        placeholder="Confirm Password" 
                        className='usernamep' 
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </>
                  )}
    
                  <Link to={'/'}><button className="login-button">{isLogin ? 'Login' : 'Register'}</button></Link>
                </div>
              </div>
              <div className="col-md-6">
                <img src={img} alt="no image" style={{height:'70vh',width:'90%',marginTop:'4.5rem'}}/>
                
              </div>
              
              
            </div>
          </div>
          <div className='footback'><Footer/></div>
     </div>
      
    </>
  );
}

export default Login;