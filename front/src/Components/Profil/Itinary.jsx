import React from "react";

//Profil de la moto
const Itinary=({title, card, duration, highway, km, sinuosity, description, pseudo})=>{

    return(
        <div className="itinary">
            <h2 className="itinary-title">{title} </h2>
            <span> Sinuosité : {sinuosity} </span>
            <img src={card} alt={title} className="itinary-card"/>
            <span className="itinary-duration" > {duration} </span>
            <span className="itinary-model"> {km}  </span>
            <span> {highway}</span>
            <span>Itinéraire proposé par {pseudo}</span>
            <span className="itinary-description" >{description}</span>

        </div>

    )

}

export default React.memo(Itinary)
