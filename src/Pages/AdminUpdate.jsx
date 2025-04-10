import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER_URL } from "../api/serverUrl";

const regexPatterns = {
  name: /^[A-Za-z0-9\s]+$/,
  description: /^.+$/,
  price: /^\d+(\.\d{1,2})?$/,
  count: /^\d+$/,
  availableTimeStart: /^.+$/,
  availableTimeEnd: /^.+$/,
  duration: /^\d+$/,
  shopName: /^[A-Za-z0-9\s]+$/,
  address: /^[A-Za-z0-9\s,.-]+$/,
  latitude: /^-?\d{1,2}\.\d+$/,
  longitude: /^-?\d{1,3}\.\d+$/,
  country: /^[A-Za-z\s]+$/,
  city: /^[A-Za-z\s]+$/
};

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [gifFile, setGifFile] = useState(null);

  useEffect(() => {
    fetch(`${SERVER_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const prod = data.product;
        const shop = prod.shop || {};

        setProduct({
          ...prod,
          availableTimeStart: prod.availableTime?.start || "",
          availableTimeEnd: prod.availableTime?.end || "",
          duration: prod.availableTime?.duration || "",
          shopName: shop.shopName || "",
          address: shop.address || "",
          latitude: shop.latitude || "",
          longitude: shop.longitude || "",
          country: prod.location?.country || "",
          city: prod.location?.city || ""
        });
      })
      .catch(() => toast.error("Failed to load product"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setGifFile(e.target.files[0]);
  };

  const validateForm = () => {
    for (const key in regexPatterns) {
      if (regexPatterns[key] && !regexPatterns[key].test(product[key])) {
        toast.error(`Invalid value for ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();

    const updatedProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      count: product.count,
      availableTime: {
        start: product.availableTimeStart,
        end: product.availableTimeEnd,
        duration: product.duration,
      },
      shop: {
        shopName: product.shopName,
        address: product.address,
        latitude: product.latitude,
        longitude: product.longitude
      },
      location: {
        country: product.country,
        city: product.city
      }
    };

    Object.entries(updatedProduct).forEach(([key, value]) => {
      formData.append(key, typeof value === "object" ? JSON.stringify(value) : value);
    });

    if (gifFile) {
      formData.append("gif", gifFile);
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized: No token found");
        return;
      }

      const res = await fetch(`${SERVER_URL}/products/edit/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update product");

      toast.success("Product updated successfully");
      setTimeout(() => navigate("/view"), 2000);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  if (!product) return <div>Loading product...</div>;

  return (
    <FormContainer>
      <h2 className="mt-5 text-center">Edit Product</h2>
      <Form onSubmit={handleUpdate}>
        {[
          "name", "description", "price", "count",
          "availableTimeStart", "availableTimeEnd", "duration",
          "country", "city",
          "shopName", "address", "latitude", "longitude"
        ].map((key) => (
          <Form.Group key={key} className="mb-3">
            <Form.Label>{key}</Form.Label>
            <Form.Control
              type={key.includes("availableTime") ? "datetime-local" : "text"}
              name={key}
              value={product[key] || ""}
              onChange={handleChange}
            />
          </Form.Group>
        ))}

        <Form.Group className="mb-3">
          <Form.Label>Upload GIF</Form.Label>
          <Form.Control type="file" accept="image/gif" onChange={handleFileChange} />
        </Form.Group>

        <div className="text-end">
          <Button type="submit" variant="success">Update Product</Button>
        </div>
      </Form>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </FormContainer>
  );
}

export default EditProduct;
