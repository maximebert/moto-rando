import React ,{ useEffect } from "react";
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet"
import itinerary from "../MapBox/map.json"
import "leaflet/dist/leaflet.css"


const latt = 47;
const long = 2;
const zoom = 6


const MyMap = ({}) => {
    useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);

   return (
        <div>
            <MapContainer style={{ height: "80vh"}} zoom={zoom} center={[latt, long]}>
                <Marker position={itinerary.features[1].geometry.coordinates}>
                </Marker>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <GeoJSON data={itinerary.features} />
            </MapContainer>
        </div>
   )
};

export default MyMap;