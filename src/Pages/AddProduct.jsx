import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import { SERVER_URL } from "../api/serverUrl";

const regexPatterns = {
  name: /^[A-Za-z0-9\s]+$/,
  description: /^.+$/, 
  price: /^\d+(\.\d{1,2})?$/, 
  count: /^\d+$/, 
  gifUrl: /^(https?:\/\/[^\s]+)?$/, 
  availableTimeStart: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, 
  availableTimeEnd: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, 
  duration: /^\d+$/, 
  shopName: /^[A-Za-z0-9\s]+$/, 
  location: /^[A-Za-z0-9\s]+$/, 
  address: /^[A-Za-z0-9\s,.-]+$/, 
  latitude: /^-?\d{1,2}\.\d+$/, 
  longitude: /^-?\d{1,3}\.\d+$/, 
  country: /^[A-Za-z\s]+$/, 
  city: /^[A-Za-z\s]+$/
};

function AddProduct() {
  const [product, setProduct] = useState({
    name: "", description: "", price: "", count: "", 
    availableTimeStart: "", availableTimeEnd: "", duration: "", 
    shopName: "", location: "", address: "", latitude: "", longitude: "", 
    country: "", city: ""
  });
  const [gifFile, setGifFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setGifFile(e.target.files[0]);
  };

  const validateForm = () => {
    for (const key in product) {
      if (regexPatterns[key] && !regexPatterns[key].test(product[key])) {
        toast.error(`Invalid value for ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Unauthorized: No token found");
      return;
    }

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    if (gifFile) {
      formData.append("gif", gifFile);
    }

    try {
      const response = await fetch(`${SERVER_URL}/products/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add product");
      }

      const result = await response.json();
      toast.success("Product added successfully!");
      console.log("Product Data:", result);

      setProduct({
        name: "", description: "", price: "", count: "", 
        availableTimeStart: "", availableTimeEnd: "", duration: "", 
        shopName: "", location: "", address: "", latitude: "", longitude: "", 
        country: "", city: ""
      });
      setGifFile(null);
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#081f34' }}>
        <AdminHeader />
        <h1 className="text-center" style={{ color: '#F7931A' }}>ADD NEW PRODUCT</h1>
        <div className="row d-flex mt-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 border p-3 rounded shadow" style={{ border: '1px solid #F7931A', background: 'transparent' }}>
            <Form>
              {Object.keys(product).map((key) => (
                <Form.Group key={key} className="mb-3">
                  <Form.Label className='text-orange'>{key} :</Form.Label>
                  <Form.Control 
                    className='border rounded p-3 text-orange' 
                    type="text" 
                    placeholder={`Enter ${key}`}
                    value={product[key]} 
                    name={key} 
                    onChange={handleChange} 
                  />
                </Form.Group>
              ))}
              <Form.Group className="mb-3">
                <Form.Label className='text-orange'>Upload GIF:</Form.Label>
                <Form.Control 
                  className='border rounded p-3 text-orange' 
                  type="file" 
                  accept="image/gif" 
                  onChange={handleFileChange} 
                />
              </Form.Group>
              <div className="d-flex justify-content-evenly">
                <button className="btn btn-warning px-4 py-2 me-2" type="button" onClick={handleSubmit}>Add Product</button>
                <button className="btn btn-warning px-4 py-2" type="button" onClick={() => setProduct({
                  name: "", description: "", price: "", count: "", 
                  availableTimeStart: "", availableTimeEnd: "", duration: "", 
                  shopName: "", location: "", address: "", latitude: "", longitude: "", 
                  country: "", city: ""
                })}>Cancel</button>
              </div>
            </Form>
          </div>
        </div>
        <div className='footback'><Footer /></div>
      </div>

      <ToastContainer />
    </>
  );
}

export default AddProduct;
