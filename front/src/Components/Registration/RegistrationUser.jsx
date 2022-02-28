import React from "react"

const RegistrationUser=()=>{

    return(

    <form>
        <input type="text" placeholder='pseudo'>Nom d'utilisateur</input>
        <input type="email" placeholder='mail'>adresse mail</input>
        <input type="password" placeholder='mot de passe'>mot de passe</input>
        <input type="password" placeholder='mot de passe'>mot de passe</input>
        <button>valider</button>
    </form>)
}

export default React.memo(RegistrationUser)
