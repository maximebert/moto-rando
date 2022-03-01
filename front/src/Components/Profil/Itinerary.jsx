import React from "react";

//Profil de la moto
const Itinerary=({title, card, duration, highway, km, sinuosity, description, pseudo})=>{

    return(
        <div className="itinerary">
            <h2 className="itinerary-title">{title} </h2>
            <span> Sinuosité : {sinuosity} </span>
            <img src={card} alt={title} className="itinerary-card"/>
            <span className="itinerary-duration" > {duration} </span>
            <span className="itinerary-model"> {km}  </span>
            <span> {highway}</span>
            <span>Itinéraire proposé par {pseudo}</span>
            <span className="itinerary-description" >{description}</span>

        </div>

    )

}

export default React.memo(Itinerary)
