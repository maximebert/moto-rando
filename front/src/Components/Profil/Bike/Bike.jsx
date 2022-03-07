import React from "react";

//Profil de la moto
const Bike=({photoMoto, brand, user,model,description})=>{

    return(
        <div className="bike">
            <img src={photoMoto} alt={user} className="bike-photo"/>
            <div className=" bike-container">
              <span className="bike-brand" >Marque {brand} </span>
              <span className="bike-model">Modèle {model}  </span>
              <span >{description}</span>
            </div>
            <button>Modifier ma moto</button>
        </div>

    )

}

export default React.memo(Bike)
