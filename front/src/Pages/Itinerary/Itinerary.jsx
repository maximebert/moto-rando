// import react
import React from 'react'

//style
import './/profilItinary.scss';
import ContentItinerary from "../../Components/ContentItinerary/ContentItinerary";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";

// page d'un itinéraire

const Itinerary = () => {
    return (
        <div>
            <InputFilterItinerary />
            <ContentItinerary />
        </div>
    )
}

export default React.memo(Itinerary);
