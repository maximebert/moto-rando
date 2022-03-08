import React, { useState, useRef, useEffect } from "react";
import axios from '../../../api/axios';
import { Link } from 'react-router-dom';
import './registrationUser.scss';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/profil/inscription';

const RegistrationUser = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [alias, setAlias] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    // }, [user])

    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(pwd));
    //     setValidMatch(pwd === matchPwd);
    // }, [pwd, matchPwd])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // // if button enabled with JS hack
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }

        try {
            const response = await axios.post(REGISTER_URL, { alias, password, confirmPassword, email }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear
            setAlias('');
            setEmail('')
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            if (err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 401) { 
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <>
                    <h2 className="success">Inscription reussie</h2>
                    <p className="redirect">
                        <Link to='/connexion'>Se connecter</Link>
                    </p>
                </>
            ) : (
                <>
                    <h2 className='registration-title'>S'inscrire</h2>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form className='form' onSubmit={handleSubmit}>
                        <label>Nom d'utilisateur</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setAlias(e.target.value)}
                            value={alias}
                            required
                        />
                        {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            4 à 24 caractères.<br />
                            Doit commencer par une lettre.<br />
                            Lettres, chiffres, traits de soulignement, traits d'union autorisés.
                        </p> */}

                        <label>Email</label>

                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label>Saisissez votre mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        {/* 
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 à 24 caractères.<br />
                            Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.<br />
                            Caractères spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}

                        <label>Veuillez ressaisir votre mot de passe</label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                        />
                        {/* 
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            Doit correspondre au premier champ de saisie du mot de passe.
                        </p> */}

                        <button className='form__btn-submit'>valider</button>
                    </form>
                </>
            )}

        </>

    )
}

export default React.memo(RegistrationUser)
