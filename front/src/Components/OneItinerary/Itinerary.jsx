import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { FaRoad } from 'react-icons/fa';

import './itinerary.scss'


import img1 from '../../assets/images/photoInitineraire1.jpg';
import img2 from '../../assets/images/photoInitineraire2.jpg';
import img3 from '../../assets/images/photoInitineraire3.jpg';
/**
 * Affichage d'un itinéraire quand on a cliqué dessus
 * @param {*} param0
 * @returns
 */
const OneItinerary = ({title, description, highway, kilometer, user}) => {
    return (

        <div className='itinerary'>
           <div className='itinerary__left'>
                <h2>{title}</h2>
                <span>Sinuosité: 4/5</span>
                <iframe id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="300"
                    height="200"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                </iframe>

                <div className='itinerary__left-details'>
                    <p>Durée: 3 heures</p>
                    <p>Kilomètres: {kilometer} km</p>
                    <p className='details-higway'>Autoroute: <span>{highway === true ? <FaRoad /> : <ImCross />}</span></p>
                </div>
           </div>

           <div className='itinerary__right'>
                <h3>Description</h3>
                <p>{description}</p>
                <div className='card__photo'>
                  <img className='card__photo__img' src={img1} alt="lac"/>
                  <img className='card__photo__img' src={img2} alt="arbre"/>
                  <img className='card__photo__img' src={img3} alt="route"/>
                </div>
                <p className='itinerary__right-user'>Itinéraire proposé par <span><AiOutlineUser className='icon-user' /> {user} </span></p>
           </div>
        </div>
    )
}

OneItinerary.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default React.memo(OneItinerary);
