import React, {useState} from 'react';
import './login.scss';
import {AiFillCloseCircle} from "react-icons/ai";

const Login = ({mailValue, passwordValue}) => {
    const [buttonDisable, setButtonDisable] = useState(false)
    const onToggleBtn = () => {
        setButtonDisable((a) => !a)
    }
    const closeLoginForm = () => {
        setButtonDisable(false)
    }

    return (
        <div className='login'>
            <button className='form__btn' onClick={onToggleBtn}>Connexion</button>
            { buttonDisable &&
                <form className='form'>
                    <AiFillCloseCircle className='close-modal' onClick={closeLoginForm} />
                    <h2>Se connecter</h2>
                    <div className='form__modal'>
                        <input
                            className='form__input'
                            placeholder='email'
                            type='email'
                        />
                        <input
                            className='form__input'
                            placeholder='mot de passe'
                            type='password'
                        />
                    </div>
                    <button className='form__btn-submit'>Valider</button>
                </form>
            }

        </div>
    )
}

export default React.memo(Login);
