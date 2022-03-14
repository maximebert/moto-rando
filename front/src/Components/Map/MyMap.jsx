import React, {useEffect} from "react";

import { MapContainer, GeoJSON, TileLayer, Marker } from "react-leaflet";
import itinerary from "../MapBox/map.json";
import "leaflet/dist/leaflet.css";

const MyMap = ({zoom, latitude, longitude}) => {

    useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);
  console.log(zoom, latitude, longitude)
   return (
        <div>
            <MapContainer className='map' style={{ height: "40vh", margin:0}} zoom={zoom} center={[latitude,  longitude]} >
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
