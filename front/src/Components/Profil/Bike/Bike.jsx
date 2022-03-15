import React from "react";
import moto from "../../../assets/images/moto.webp"
import './bike.scss';

//Profil de la moto
const Bike = ({ user_id, photoMoto, brand, model }) => {

    return (
        <>
            <div className="bike">
                <div>
                    <h5 className="user-infos">Ma moto</h5>
                </div>

                <div className=" bike-container">
                    <img src={moto} alt={model} className="bike-photo" />
                    <div className="bike-infos">
                        <span className="bike-brand" >Marque : KTM {brand} </span>
                        <span className="bike-model">Modèle : 790 duke {model}  </span>
                    </div>
                </div>
            </div>
        </>


    )

}

export default React.memo(Bike)
