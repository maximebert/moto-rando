/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from 'prop-types';

import "../Profil/user.scss"
import avatar from '../../assets/images/racer.png';


const User = ({ id, alias, email, presentation }) => {

  return (
    <div className="user">
      <h5 className="user-infos">Mes informations personnel</h5>
      <div className='user__detail'>
        <img className='user__picture' src={avatar} alt='photo de profil' />
        <h2>{alias}</h2>
        <span>{email}</span>
        <p>{presentation === undefined ? presentation : ''}</p>
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
  presentation: "",
};

export default React.memo(User)
