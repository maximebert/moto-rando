import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import './map.json';
import './mapBox.scss';

const latt = 47;
const long = 2;
const zoom = 6.2;

const position1 = [46.157293856489495, -1.1543294622502314]
const position2 = [43.33599403684779, -0.41495834393993586]
const position3 = [43.183805764877675, 3.01350315492017]
const position4 = [45.90164179061724, 6.120415909532463]

const MapBox = ({ mapData }) => {

   useEffect(() => {
      const L = require("leaflet");

      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
      });
    }, []);

   console.log(mapData);
   return (
      <>
         <MapContainer className='map' style={{ height: "80vh" }} zoom={zoom} center={[latt, long]}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                 <Marker position={position1}/>
                 <Marker position={position2}/>
                 <Marker position={position3}/>
                 <Marker position={position4}/>

         </MapContainer>
      </>

   )
}

export default MapBox;
