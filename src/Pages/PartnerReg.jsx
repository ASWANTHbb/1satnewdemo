import React, { useState } from 'react';
import Header from '../components/Header';
import '../Pages/PartnerReg.css';
import Footer from '../components/Footer';

function PartnerReg() {
  // State to store the input values
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    alternativePhone: '',
    website: ''
  });

  // State to store validation errors
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    alternativePhone: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Validate the form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      phone: '',
      alternativePhone: ''
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required *';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid *';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone is required *';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits *';
      isValid = false;
    }

    // Alternative Phone validation
    if (!formData.alternativePhone) {
      newErrors.alternativePhone = 'Alternative phone is required *';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.alternativePhone)) {
      newErrors.alternativePhone = 'Alternative phone number must be 10 digits *';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle button click
  const handleJoinNowClick = () => {
    if (validateForm()) {
      // Log the form data to the console if the form is valid
      console.log('Form Data:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <>
      <div className='mainback'>
        <Header />
        <div className="partnerReg d-flex justify-content-center align-items-center flex-column mt-5">
          <h1 style={{ color: '#F7931A' }}>Partner Registration</h1>
          <p>Please fill out the form below to become a partner of our store.</p>
          
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input1"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="input1"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <input
            type="text"
            name="alternativePhone"
            placeholder="alternative phone"
            className="input1"
            value={formData.alternativePhone}
            onChange={handleInputChange}
          />
          {errors.alternativePhone && <p className="error-message">{errors.alternativePhone}</p>}

          <input
            type="text"
            name="website"
            placeholder="website(optional)"
            className="input1"
            value={formData.website}
            onChange={handleInputChange}
          />
          
          <button className="join-button" onClick={handleJoinNowClick}>
            Join now
          </button>
        </div>
        <div className='footback'><Footer/></div>
      </div>
    </>
  );
}

export default PartnerReg;
