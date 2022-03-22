import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Input from "./input/Input";

import "./login.scss";

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  loggedMsgError,
}) => {
  const [status, setStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    setStatus(true);
  };

  return (
    <>
      {status && <p className="errmsg">{loggedMsgError}</p>}

      <div className="card-login">
        <div className="card-image">
          <h2 className="card-heading">
            CONNEXION
            <small>Votre compte</small>
          </h2>
        </div>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input">
            <Input
              type="text"
              name="email"
              value={email}
              onChange={changeField}
              required
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <Input
              type="password"
              name="password"
              value={password}
              onChange={changeField}
              required
            />
            <label className="input-label">Mot de passe</label>
          </div>
          <div className="action">
            <button className="action-button">Se connecter</button>
          </div>
        </form>
        <div className="card-info">
          <p>
            Pas encore de compte ? <Link to="/inscription">inscrivez-vous</Link>
          </p>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
Login.defaultProps = {
  // isLogged: false
};
export default React.memo(Login);
