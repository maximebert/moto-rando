import React from 'react';
import PropTypes from 'prop-types';
import MyMap from '../Map/MyMap';
import { AiOutlineUser } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { FaRoad } from 'react-icons/fa';

import {Carousel} from 'react-responsive-carousel';
import './itinerary.scss';
import './carousel.scss';


import img1 from '../../assets/images/photoInitineraire1.jpg';
import img2 from '../../assets/images/photoInitineraire2.jpg';
import img3 from '../../assets/images/photoInitineraire3.jpg';

const OneItinerary = ({title, description, highway, kilometer, user}) => {
    return (

        <div className='itinerary'>
           <div className='itinerary__left'>
                <h2>{title}</h2>
                <span>Sinuosité: 4/5</span>
                    <MyMap />
                <div className='itinerary__left-details'>
                    <p>Durée: 3 heures</p>
                    <p>Kilomètres: {kilometer} km</p>
                    <p className='details-higway'>Autoroute: <span>{highway === true ? <FaRoad /> : <ImCross />}</span></p>
                </div>
           </div>

           <div className='itinerary__right'>
                <h3>Description</h3>
                <p>{description}</p>
                <Carousel showArrows={true} >
                <div >
                  <img  src={img1} alt="lac"/>
                </div>
                <div >
                    <img src={img2} alt="arbre"/>
                </div>
                <div >
                  <img src={img3} alt="route"/>
                </div>
                </Carousel>
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
