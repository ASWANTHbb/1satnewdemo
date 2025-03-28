import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import osm from "../api/osmProviders"
import axios from 'axios';

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import Footer from './Footer';
import Header from "../components/Header";

// Store icons in an array
const iconsArray = [icon1, icon2, icon3];

// Function to generate a random marker icon
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconsArray.length);
  return new L.Icon({
    iconUrl: iconsArray[randomIndex],
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35],
  });
};

function Map() {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const [shops, setShops] = useState([]);
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios
      .get("https://onesatui.onrender.com/products")
      .then((response) => {
        const products = response.data.products;

        // Extract shop locations and attach productName and productId to each shop
        const shopLocations = products.flatMap((product) =>
          product.availableShops.map((shop) => ({
            ...shop,
            productName: product.name, // Attach product name
            productId: product._id, // Attach product ID
          }))
        );

        setShops(shopLocations);

        // Center map on the first shop location (if available)
        if (shopLocations.length > 0) {
          setCenter({ lat: shopLocations[0].latitude, lng: shopLocations[0].longitude });
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className='mainbg' style={{ backgroundColor: '#081f34' }}>
      <Header />
      <div className='p-5'>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ height: "450px", width: "100%" }}>
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />

          {/* Random Icons for Shop Markers */}
          {shops.map((shop, index) => (
            <Marker key={index} position={[shop.latitude, shop.longitude]} icon={getRandomIcon()}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                <b>{shop.productName}</b> {/* Product name on hover */}
              </Tooltip>
              <Popup>
                <b>{shop.productName}</b> <br />
                {shop.shopName} <br />
                {shop.address} <br />
                {/* Clickable Button */}
                <button 
                  onClick={() => navigate(`/bodily-covering/${shop.productId}`)} 
                  style={{ background: "blue", color: "white", padding: "5px 10px", border: "none", cursor: "pointer", marginTop: "5px" }}
                >
                  View Details
                </button>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
      <div className='footback'><Footer /></div>
    </div>
  );
}

export default Map;
