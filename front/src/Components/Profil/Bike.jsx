import React from "react";

//Profil de la moto
const Bike=({photoMoto, brand, user,model,description})=>{

    return(
        <div className="motor">
            <img src={photoMoto} alt={user} className="user-photo"/>
            <span className="user-brand" >Marque {brand} </span>
            <span className="user-model">Modèle {model}  </span>
            <span >{description}</span>
            <button>Modifier ma moto</button>
        </div>

    )

}

export default React.memo(Bike)
