import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Styles
// import "leaflet/dist/leaflet.css";
import * as styles from "./about_us_map.module.scss";

const AboutUsMap = () => {
  return (
    <MapContainer
      center={[54.41381247670869, 18.579697]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "75%", height: "300px", margin: "0 auto 80px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[54.41381247670869, 18.579697]}>
        <Popup>
          ul. Poznańska 4b <br /> 80-359 Gdańsk
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AboutUsMap;
