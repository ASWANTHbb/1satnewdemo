import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import FormContainer from '../components/FormContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const regexPatterns = {
  name: /^[A-Za-z0-9\s]+$/, 
  description: /^.+$/, 
  price: /^\d+(\.\d{1,2})?$/, 
  count: /^\d+$/, 
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

const AdminUpdate = ({ product, onUpdate = () => {} }) => {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState({});
  const [gifFile, setGifFile] = useState(null);

  useEffect(() => {
    if (product) {
      setUpdate({ ...product });
    }
  }, [product]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleFileChange = (e) => {
    setGifFile(e.target.files[0]);
  };

  const validateForm = () => {
    for (const key in update) {
      if (regexPatterns[key] && !regexPatterns[key].test(update[key])) {
        toast.error(`Invalid value for ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Updated Product Data:", update);
      toast.success("Product updated successfully");
      setShow(false);
      onUpdate(update);
    }
  };

  return (
    <>
      <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} className="text-info mx-3" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer>
            <h2 className='mt-5 text-center'>Update Product</h2>
            <Form onSubmit={handleUpdate}>
              {Object.keys(regexPatterns).map((key) => (
                key !== "gifUrl" && (
                  <Form.Group key={key} className="mb-3">
                    <Form.Label>{key}:</Form.Label>
                    <Form.Control
                      type="text"
                      value={update[key] || ""}
                      name={key}
                      onChange={handleChange}
                    />
                  </Form.Group>
                )
              ))}
              <Form.Group className="mb-3">
                <Form.Label>Upload GIF:</Form.Label>
                <Form.Control type="file" accept="image/gif" onChange={handleFileChange} />
              </Form.Group>
            </Form>
          </FormContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>Cancel</Button>
          <Button variant="success" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
};

export default AdminUpdate;
