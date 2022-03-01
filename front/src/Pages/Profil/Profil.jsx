import React from 'react';

//composants
import Bike from '../../Components/Profil/Bike';
import InputItinary from '../../Components/Profil/InputItinary';
import User from '../../Components/Profil/User';

//styles
import './profil.scss';


//Page du profil
const Profil = () => {

    return (
        <div>
        <h1>Page Profil</h1>
        <User/>
        <Bike/>
        <InputItinary/>
        </div>
    )
}

export default React.memo(Profil);
