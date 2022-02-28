import React from "react";

//Profil de l'utilisateur
const User=({photoUser, pseudo,year,description})=>{

    return(
        <div className="user">
            <img src={photoUser} alt={pseudo} className="user-photo"/>
            <span className="user-pseudo" >Nom de profil {pseudo} </span>
            <span className="user-since">Membre depuis {year}  </span>
            <span >{description}</span>
            <button>Modifier mon profil</button>
        </div>

    )

}

export default React.memo(User)
