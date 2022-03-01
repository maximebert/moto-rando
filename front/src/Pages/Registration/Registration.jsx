// import react
import React from 'react'
import RegistrationBike from '../../Components/Registration/RegistrationBike';

//component
import RegistrationUser from '../../Components/Registration/RegistrationUser';
// import style
import '../Registration/registration.scss'

// page d'un itinéraire

const Registration =()=>{
    return (
        <>
        <h2>Incription</h2>
        <div className='registration'>
            <RegistrationUser/>
            <RegistrationBike/>
        </div>
        </>
    )
}


export default React.memo (Registration);
