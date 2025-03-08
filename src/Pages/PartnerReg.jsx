import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SERVER_URL } from '../api/serverUrl'; // Import SERVER_URL
import { toast } from 'react-toastify';
import '../Pages/PartnerReg.css';

function PartnerReg() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    alternativePhone: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if ((name === 'phone' || name === 'alternativePhone') && !/^\d*$/.test(value)) {
      return; // Allow only numeric values
    }

    if ((name === 'phone' || name === 'alternativePhone') && value.length > 10) {
      return; // Limit input to 10 digits
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.email) {
      toast.error('Email is required *');
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      toast.error('Invalid email format *');
      return false;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error('Phone number must be exactly 10 digits *');
      return false;
    }
    if (!formData.alternativePhone || formData.alternativePhone.length !== 10) {
      toast.error('Alternative phone number must be exactly 10 digits *');
      return false;
    }
    return true;
  };

  const handleJoinNowClick = async () => {
    if (!validateForm()) return;

    const clientData = {
      email: formData.email,
      phone: formData.phone,
      alternatePhone: formData.alternativePhone,
      website: formData.website
    };

    try {
      const response = await fetch(`${SERVER_URL}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Registration successful!');
        setFormData({ email: '', phone: '', alternativePhone: '', website: '' });
      } else {
        toast.error(result.message || 'Failed to register.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
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
            placeholder="Email"
            className="input1"
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="input1"
            value={formData.phone}
            onChange={handleInputChange}
            maxLength={10} // Ensures only 10 digits are allowed
          />

          <input
            type="text"
            name="alternativePhone"
            placeholder="Alternative Phone"
            className="input1"
            value={formData.alternativePhone}
            onChange={handleInputChange}
            maxLength={10} // Ensures only 10 digits are allowed
          />

          <input
            type="text"
            name="website"
            placeholder="Website (optional)"
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
