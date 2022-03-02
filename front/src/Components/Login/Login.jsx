import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from './input/Input'

import './login.scss';
import {AiFillCloseCircle} from "react-icons/ai";

const Login = ({email, password, changeField, handleLogin, isLogged}) => {
    const [buttonDisable, setButtonDisable] = useState(false)
    const onToggleBtn = () => {
        setButtonDisable((a) => !a)
    }
    const closeLoginForm = () => {
        setButtonDisable(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleLogin();
    }

    return (
        <div className='login'>
            {isLogged && (
                <div>
                    <p>Bonjour</p>
                    <button>Deconnexion</button>
                </div>
            )}
            <button className='form__btn' onClick={onToggleBtn}>Connexion</button>
            { buttonDisable && !isLogged && (
                    <form className='form' autoComplete='off' onSubmit={handleSubmit}>
                        <AiFillCloseCircle className='close-modal' onClick={closeLoginForm} />
                        <h2>Se connecter</h2>

                        <div className='form__modal'>
                            <Input
                                name='email'
                                placeholder='adresse email'
                                onChange={changeField}
                                value={email}
                            />
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
                )

            }

        </div>
    )
}

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    isLogged: PropTypes.bool,
}

Login.defaultProps = {
    isLogged: false,
}

export default React.memo(Login);
