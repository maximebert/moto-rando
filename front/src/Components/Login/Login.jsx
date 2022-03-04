import React from 'react';
import PropTypes from 'prop-types';
import Input from './input/Input'
import './login.scss';
// import { useNavigate } from "react-router-dom";


const Login = ({email, password, changeField, handleLogin}) => {
  // Redirect to pageHome
  // const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
        // navigate('/')

    }

    return (
        <div className='login'>
          <h2>Se connecter</h2>
                <form className='form' autoComplete='off' onSubmit={handleSubmit}>
                  <div className='form__modal'>
                    <label>Veuillez saisir votre email</label>
                    <Input
                      name='email'
                      placeholder='adresse email'
                      onChange={changeField}
                      value={email}
                    />
                    <label>Veuillez saisir votre mot de passe</label>
                    <Input
                      placeholder='mot de passe'
                      name='password'
                      type='password'
                      onChange={changeField}
                      value={password}
                    />
                  </div>
                  <button type="submit" className='form__btn-submit'>Valider</button>
                </form>
        </div>
    )
}

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}
Login.defaultProps = {
  isLogged: false
}
export default React.memo(Login);
