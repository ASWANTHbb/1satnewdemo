import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirecting after login
import { SERVER_URL } from '../api/serverUrl'; // Import SERVER_URL
import '../Pages/Login.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import img from '../assets/login.png';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate(); // For navigation
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Login API Call
                const response = await axios.post(`${SERVER_URL}/login`, {
                    email: formData.email,
                    password: formData.password
                });
                
                console.log("Login Successful:", response.data);
                toast.success("Login Successful!");
                
                // Store token (if needed) & redirect
                localStorage.setItem("token", response.data.token);
                navigate("/"); // Redirect to home page after login
            } else {
                // Registration API Call
                if (formData.password !== formData.confirmPassword) {
                    toast.error("Passwords do not match!");
                    return;
                }

                const response = await axios.post(`${SERVER_URL}/register`, {
                    email: formData.email,
                    password: formData.password
                });

                console.log("Registration Successful:", response.data);
              toast.success("Registration Successful!");
                
                setIsLogin(true); // Switch to login view after successful registration
            }
        } catch (error) {
            console.error("Error:", error.response?.data?.error || error.message);
            toast.error(error.response?.data?.error || error.message);
        }
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

                                <form onSubmit={handleSubmit}>
                                    {isLogin ? (
                                        <>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className='usernamep'
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className='usernamep'
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className='usernamep'
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className='usernamep'
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                className='usernamep'
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </>
                                    )}

                                    <button type="submit" className="login-button">
                                        {isLogin ? 'Login' : 'Register'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={img} alt="no image" style={{ height: '70vh', width: '90%', marginTop: '4.5rem' }} />
                        </div>
                    </div>
                </div>
                <div className='footback'><Footer /></div>
            </div>
        </>
    );
}

export default Login;
