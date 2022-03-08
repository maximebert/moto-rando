import React from "react";
import { Link } from "react-router-dom";


//Profil de la moto
const Bike=({user_id, photoMoto, brand,model})=>{

    return(
        <div className="bike">
            <img src={photoMoto} alt={model} className="bike-photo"/>
            <div className=" bike-container">
              <span className="bike-brand" >Marque {brand} </span>
              <span className="bike-model">Modèle {model}  </span>
            </div>
            {/* <Link to={`/profil/${user_id}/modifier`} >
              <button >Modifier ma moto</button>
            </Link> */}
        </div>

    )

}

export default React.memo(Bike)
