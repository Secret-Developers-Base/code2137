import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Styles
import "leaflet/dist/leaflet.css";

const AboutUsMap = () => {
  return (
    <MapContainer
      center={[54.41381247670869, 18.579697]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "400px", height: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[54.41381247670869, 18.579697]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default AboutUsMap;
