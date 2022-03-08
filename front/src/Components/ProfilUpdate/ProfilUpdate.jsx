import React, { useState } from 'react';
import '../ProfilUpdate/profilUpdate.scss';

const ProfilUpdate = ()=>{
    const [alias, setAlias]=useState("");
    const [presentation, setPresentation]= useState();


    const handleOnSubmit =(event)=>{
        event.preventDefault()
    }


    return (
        <div className='form'>
            <h2>Modifier votre profil</h2>
            <form className='profilUpdate-form'>
                <label for="alias">Nom de Profil</label>
                <input id="alias" type="text" placeholder={alias} onChange={(e)=>setAlias(e.target.value)}/>

                <label for="presentation">Présentation</label>
                <input id="presentation" type="text"  placeholder={presentation} onChange={(e)=>setPresentation(e.target.value)} />


                <label for="photo">Votre plus belle photo</label>
                <input type="file" id="photo" />


                <button className='form__btn-submit' onClick={handleOnSubmit} >Valider votre profil</button>

            </form>
        </div>
    )
}

export default React.memo(ProfilUpdate)
