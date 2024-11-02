import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Today from './Today.js';
import Yesterday from './Yesterday.js';
import Previousweek from './Previousweek.js';
import Home from './Home.js';
function App(){
    return(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/today" element={<Today/>} />
                        <Route path="/yesterday" element={<Yesterday/>} />
                        <Route path="/previousweek" element={<Previousweek/>} />
                    </Routes>
                </BrowserRouter>
    )
}
export default App;