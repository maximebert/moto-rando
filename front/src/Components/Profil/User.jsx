import React from "react";

import "../Profil/user.scss"

//Profil de l'utilisateur
const User=({photoUser, pseudo,year,description})=>{

    return(
        <div className="user">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123_960_720.jpg" alt={pseudo} className="user-photo"/>
            <div user-container>
                <span className="user-pseudo" >Nom de profil {pseudo} </span>
                <span className="user-since">Membre depuis {year}  </span>
                <span >{description}</span>
            </div>
            <button>Modifier mon profil</button>
        </div>

    )

}

export default React.memo(User)
