import React, {useState} from 'react';
import './login.scss';

const Login = ({mailValue, passwordValue}) => {
    const [buttonDisable, setButtonDisable] = useState(false)
    const onToggleBtn = () => {
        setButtonDisable((a) => !a)
    }

    return (
        <div className='login'>
            <button className='form__btn' onClick={onToggleBtn}>Connexion</button>
            { buttonDisable &&
                <form className='form'>
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
                    <button className='form__btn-submit'>Se connecter</button>
                </form>
            }
        </div>
    )
}

export default React.memo(Login);
