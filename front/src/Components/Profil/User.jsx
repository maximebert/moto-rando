import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "../Profil/user.scss"

//Profil de l'utilisateur
const User=({id,alias,email,presentation})=>{

    return(
        <div className="user">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123_960_720.jpg" alt={alias} className="user-photo"/>
            <div className="user-container">
                <span className="user-pseudo"> Nom de profil : {alias} </span>
                <span className="user-mail"> adresse mail : {email} </span>
                <span className="user-presentation">Présentation : {presentation ? '' : ''}</span>
            </div>
            <Link to={`/profil/${id}/modifier`} >
              <button >Modifier mon profil</button>
            </Link>
        </div>

    )

}

User.propTypes = {
  alias: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  presentation: PropTypes.string,
};

User.defaultProps = {
  presentation:"",
};

export default React.memo(User)
