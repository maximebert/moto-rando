import React from "react";
import PropTypes from 'prop-types';

import "../Profil/user.scss"

//Profil de l'utilisateur
const User=({id,alias,email,presentation})=>{

    return(
        <div className="user">
            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123_960_720.jpg" alt={alias} className="user-photo"/>
            <div className="user-container">
                <span className="user-pseudo">{alias} </span>
                <span className="user-mail"> {email} </span>
                <span className="user-presentation"> {presentation ? '' : ''}</span>
            </div>

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
