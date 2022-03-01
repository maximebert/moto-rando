// import react
import React from 'react'
//composant
import Itinerary from '../../Components/Profil/Itinerary';

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
