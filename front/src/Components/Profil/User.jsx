/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Profil/user.scss";
import avatar from "../../assets/images/racer.png";

import { BsPen } from "react-icons/bs";

const User = ({ id, alias, email, presentation }) => {
  return (
    <div className="user">
      <h5 className="user-infos">Mes informations personnelles</h5>
      <div className="user__detail">
        <img className="user__picture" src={avatar} alt="photo de profil" />
        <h2>{alias}</h2>
        <span>{email}</span>
        {presentation ? <p>{presentation}</p> : ""}
      </div>
      <Link to={`/profil/${id}/modifier`}>
        <button className="profil-update">
          Ajouter une description <BsPen className="icon" />{" "}
        </button>
      </Link>
    </div>
  );
};

User.propTypes = {
  alias: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  presentation: PropTypes.string,
};

User.defaultProps = {
  presentation: "",
};

export default React.memo(User);
