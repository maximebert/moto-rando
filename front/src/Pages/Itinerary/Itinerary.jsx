// import react
import React, { useEffect, useState } from "react";
import { getAllList } from "../../request/itineraryRequest";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";
import MapBox from "../../Components/MapBox/MapBox";
//style
import "./profilItinary.scss";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllList().then(({ data }) => {
      setItinerary(data);
      setIsLoading(false);
    });
  }, []);
  console.log(itinerary);

  return (
    <div className="itinerary_list">
      <div className="itinerary_list-left">
        <InputFilterItinerary data={itinerary} />
      </div>
      <div className="itinerary_list-right">
        {/* Si le isLoadding est est false et que tu trouves 1 itinéraires alors tu envoie les données dans Mapbox */}
        {!isLoading && itinerary && <MapBox mapData={itinerary} />}
      </div>
    </div>
  );
};

export default React.memo(Itinerary);
