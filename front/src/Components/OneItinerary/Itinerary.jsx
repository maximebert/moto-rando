import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { FaRoad } from 'react-icons/fa';

import {Carousel} from 'react-responsive-carousel';
import './itinerary.scss';
import './carousel.scss';


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
                {/* <iframe id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="400"
                    height="300"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                </iframe> */}
                  <iframe
                  id="inlineFrameExample"
                  title="test"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d373069.1129414744!2d-0.12173404745543218!3d43.07082825009687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x12a9d38abcf194c3%3A0x47bfee34eecc4749!2sTarbes!3m2!1d43.232951!2d0.078082!4m5!1s0x12a8235749919997%3A0x136b76e1ff9b200!2sPic%20du%20Midi%20de%20Bigorre%2C%2065120%20Sers!3m2!1d42.9368725!2d0.1410922!5e0!3m2!1sfr!2sfr!4v1646405759022!5m2!1sfr!2sfr"
                  width="600"
                  height="450">

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
