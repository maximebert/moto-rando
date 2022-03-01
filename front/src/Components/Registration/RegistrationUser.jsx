import React, { useState } from "react";

const RegistrationUser = ({})=>{
    const [pseudo, setPseudo]=useState("");
    const [mail, setMail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");

    const handleOnSubmit = (event)=>{
        event.preventDefault();
    }


    return(

    <form >
        <label for="user">Nom d'utilisateur   </label>
        <input id="user" type="text" placeholder='pseudo' onChange={(e) => setPseudo(e.target.value)}/>

        <label for="mail">Email</label>
        <input id="mail" type="email" placeholder='mail' onChange={(e) => setMail(e.target.value)}/>

        <label for="password">Saisissez votre mot de passe</label>
        <input id="password" type="password" placeholder='mot de passe'  onChange={(e) => setPassword(e.target.value)}/>

        <label for="confirm" >Veuillez ressaisir votre mot de passe</label>
        <input id="confirm" type="password" placeholder='mot de passe' onChange={(e) => setConfirmPassword(e.target.value)}/>

        <button onClick={handleOnSubmit} disabled={pseudo === "" || mail === "" || password ==="" || password !== confirmPassword}>valider</button>
    </form>)
}

export default React.memo(RegistrationUser)
