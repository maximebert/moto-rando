// import react
import React from 'react'
import Itinerary from '../../Components/Itinerary/Itinerary';
//composant

//style
import './profilItinerary.scss';

// page d'un itinéraire

const ProfilItinerary = () => {
    return (
        <div>
        <h1>page itineraires</h1>
        <Itinerary/>
        </div>
    )
}

export default React.memo(ProfilItinerary);
