import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useNavigate} from 'react-router-dom';

// Default icon settings to handle Leaflet default icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Previousweek() {
  // Set initial vehicle position and route
  const route = [
    [12.922915, 80.127457],
    [12.82428, 79.70116],
    [12.506997, 79.60343],
    [12.23526, 79.07481]
  ];

  const carIcon = L.icon({
    iconUrl: 'https://svgsilh.com/svg/2386838.svg',
    iconSize: [60, 95],
    iconAnchor: [12.5, 41]
  });
  
  const locationIcon = L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-location-icon-download-in-svg-png-gif-file-formats--marker-pointer-map-pin-navigation-finance-and-economy-pack-business-icons-2561454.png?f=webp&w=256',
    iconSize: [35, 35]
  });

  const [position, setPosition] = useState(route[0]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= route.length) {
          clearInterval(interval); // Stop at the end of the path
          return prevIndex;
        }
        setPosition(route[newIndex]);
        return newIndex;
      });
    }, 1000); // Update every second (1000ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

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
    <MapContainer center={route[0]} zoom={8} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={route} color="black" />
      <Marker position={route[0]}  icon={locationIcon}/>
      <Marker position={route[1]}  icon={locationIcon}/>
      <Marker position={route[2]}  icon={locationIcon}/>
      <Marker position={route[3]}  icon={locationIcon}/>
      <Marker position={position}  icon={carIcon}/>
      <div class="card text-center">
         <h5 class="card-title">Configure</h5>
         <div class="dropdown">
             <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Previous Week</button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               <a><button type="button" className="btn" onClick={today}>Today</button></a>
               <a><button type="button" className="btn" onClick={yesterday}>Yesterday</button></a>
               <a><button type="button" className="btn" onClick={previousweek}>Previous Week</button></a>
             </div>
         </div>
      </div>
    </MapContainer>
  );
};

export default Previousweek;
