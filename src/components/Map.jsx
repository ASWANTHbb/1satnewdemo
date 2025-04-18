import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import osm from "../api/osmProviders";
import axios from 'axios';
import { SERVER_URL } from '../api/serverUrl';

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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/products`)
      .then((response) => {
        const products = response.data.products;

        // Updated: Extract shop info from the single `shop` field per product
        const shopLocations = products
          .filter((product) => product.shop && product.shop.latitude && product.shop.longitude)
          .map((product) => ({
            ...product.shop,
            productName: product.name,
            productId: product._id,
          }));

        setShops(shopLocations);

        if (shopLocations.length > 0) {
          setCenter({
            lat: shopLocations[0].latitude,
            lng: shopLocations[0].longitude,
          });
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

          {shops.map((shop, index) => (
            <Marker key={index} position={[shop.latitude, shop.longitude]} icon={getRandomIcon()}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                <b>{shop.productName}</b>
              </Tooltip>
              <Popup>
                <b>{shop.productName}</b> <br />
                {shop.shopName} <br />
                {shop.address} <br />
                <button
                  onClick={() => navigate(`/bodily-covering/${shop.productId}`)}
                  style={{
                    background: "blue",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
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
