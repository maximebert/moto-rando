import React, { useState } from 'react';
import '../ProfilUpdate/profilUpdate.scss';

const ProfilUpdate = ()=>{
    const [alias, setAlias] = useState("");
    const [presentation, setPresentation] = useState("");
    const [brand,setBrand] = useState("");
    const [model, setModel] = useState("");


    const handleOnSubmit =(event)=>{
        event.preventDefault()
    }


    return (
        <div className='form'>
            <h2>Modifier votre profil</h2>
            <form className='profilUpdate-form'>
                <label htmlFor="photo-user">Votre plus belle photo</label>
                <input type="file" id="photo-user" />

                <label htmlFor="alias">Nom de Profil</label>
                <input id="alias" type="text" placeholder={alias} onChange={(e)=>setAlias(e.target.value)}/>

                <label htmlFor="presentation">Présentation</label>
                <input id="presentation" type="text"  placeholder={presentation} onChange={(e)=>setPresentation(e.target.value)} />

                <label htmlFor="photo-bike">Photo de votre moto</label>
                <input type="file" id="photo-bike" />

                <label htmlFor="brand">Marque de votre moto</label>
                <input id="brand" type="text" placeholder={alias} onChange={(e)=>setBrand(e.target.value)}/>

                <label htmlFor="model">Modèle de votre moto</label>
                <input id="model" type="text" placeholder={alias} onChange={(e)=>setModel(e.target.value)}/>

                <button className='form__btn-submit' onClick={handleOnSubmit} >Valider votre profil</button>

            </form>
        </div>
    )
}

export default React.memo(ProfilUpdate)
