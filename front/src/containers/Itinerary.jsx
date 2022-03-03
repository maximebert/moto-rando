import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItineraryID from '../Components/ItinerayID/ItineraryID';


const ItineraryContainer = () => {
  const  [itineraryID, setItineraryID]=useState([]);

  useEffect(() =>{
    async function fetchDataOneItinerary() {
       await axios.get(`http://localhost:3000/itineraires/1}`)
          .then((response) => setItineraryID(response)
      )
    }
    fetchDataOneItinerary()
  },[]);

  return (
    <ItineraryID title={itineraryID}/>
  )
}

export default React.memo(ItineraryContainer );
