import React from 'react';
// import Map from './Map.js';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useNavigate} from 'react-router-dom';

function Home() {
  const carIcon = L.icon({
    iconUrl: 'https://svgsilh.com/svg/2386838.svg',
    iconSize: [60, 95],
    iconAnchor: [12.5, 41]
  });
  const lIcon = L.icon({
    iconUrl: 'https://beaconconverters.com/wp-content/uploads/2019/10/icon-bullet-point.png',
    iconSize: [30, 30]
  });
  
  const navigate = useNavigate();
   const today = async (e) => {
      navigate('/today');
   };
   const yesterday = async (e) => {
    navigate('/yesterday');
   };
    const previousweek = async (e) => {
    navigate('/previousweek');
    };

return (
  <div className="App">
    <h1>Vehicle Movement on Map</h1>
    <MapContainer center={[12.922915, 80.127457]} zoom={8} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[12.922915, 80.127457]}  icon={carIcon}>
        <Popup>
        <p>Driver Name: john</p>
        <p>Age: 35</p>
        <p>Speed: 40kmph</p>
        <p>Address:39, Nehruji St, Anandapuram, East Tambaram, Tambaram, Chennai, Tamil Nadu 600059<br /></p>
        <p>Date: 30/10/2024 07:30:22 AM</p>
        </Popup>
      </Marker>
      <Marker position={[12.922915, 80.127457]}  icon={lIcon}/>
      <div class="card text-center">
         <h5 class="card-title">Configure</h5>
         <div class="dropdown">
             <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Today</button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a><button type="button" className="btn" onClick={today}>Today</button></a>
               <a><button type="button" className="btn" onClick={yesterday}>Yesterday</button></a>
               <a><button type="button" className="btn" onClick={previousweek}>Previous Week</button></a>
             </div>
         </div>
      </div>
    </MapContainer>
  </div>
  );
}

export default Home;