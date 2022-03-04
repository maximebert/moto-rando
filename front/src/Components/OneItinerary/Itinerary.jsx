import React from 'react';
import PropTypes from 'prop-types';

import './itinerary.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { FaRoad } from 'react-icons/fa';

const OneItinerary = ({title, description, map, highway, kilometer, user}) => {
    return (

        <div className='itinerary'>
           <div className='itinerary__left'>
                <h2>{title}</h2>
                <span>Sinuosité: 4/5</span>
                <img src={map} alt={title}/>

                <div className='itinerary__left-details'>
                    <p>Durée: 3 heures</p>
                    <p>Kilomètres: {kilometer} km</p>
                    <p className='details-higway'>Autoroute: <span>{highway === true ? <FaRoad /> : <ImCross />}</span></p>
                </div>
           </div>

           <div className='itinerary__right'>
                <h3>Description</h3>
                <p>{description}</p>
                <p className='itinerary__right-user'>Itinéraire proposé par <span><AiOutlineUser className='icon-user' /> {user} </span></p>
           </div>
        </div>
    )
}

OneItinerary.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
OneItinerary.defaultProps = {
}

export default React.memo(OneItinerary);
