import React from "react";
import { Link } from "react-router-dom";
import moto from "../../../assets/images/moto.webp"
import './bike.scss';

//Profil de la moto
const Bike = ({user_id, photoMoto, brand,model}) => {

    return(
        <div className="bike">
            <img src={moto} alt={model} className="bike-photo"/>
            <div className=" bike-container">
              <span className="bike-brand" >Marque : KTM {brand} </span>
              <span className="bike-model">Modèle : 790 duke {model}  </span>
            </div>
        </div>

    )

}

export default React.memo(Bike)
