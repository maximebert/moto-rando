// import react
import React from 'react'
//composant
import Itinary from '../../Components/Profil/Itinary';

//style
import '../ProfilItinary/profilItinary.scss';

// page d'un itinéraire

const ProfilItinary = () => {
    return (
        <div>
        <h1>page itineraires</h1>
        <Itinary/>
        </div>
    )
}

export default React.memo (ProfilItinary);
