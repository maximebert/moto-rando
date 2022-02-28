import React from "react"

const RegistrationBike=()=>{

    return(

    <form>
        <input type="text" placeholder='marque de la moto'>Marque</input>
        <input type="text" placeholder='modèle'>modèle</input>
        <input type="text" placeholder='description'>description</input>
        <button>valider</button>
    </form>)
}

export default React.memo(RegistrationBike)
