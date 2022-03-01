import React from "react"

const RegistrationBike=()=>{

    return(

    <form>
        <label for="brand" >Quelle est la marque de votre moto</label>
            <input id="brand" type="text" placeholder='marque de la moto'/>

        <label for="model" >Quel est le modèle de votre moto</label>
            <input id="model" type="text" placeholder='modèle'/>

        <label for="description" >Description de votre moto </label>
            <input id="description" type="text" placeholder='description'/>

        <button>valider</button>
    </form>)
}

export default React.memo(RegistrationBike)
