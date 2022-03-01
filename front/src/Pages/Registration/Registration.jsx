// import react
import React from 'react'

//component
import RegistrationUser from '../../Components/Registration/RegistrationUser';
// import style
import '../Registration/registration.scss'

// page d'un itinéraire

const Registration =()=>{
    return (
        <>
        <h2>Inscription</h2>
        <div className='registration'>
            <RegistrationUser/>

        </div>
        </>
    )
}


export default React.memo (Registration);
