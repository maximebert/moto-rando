import React from 'react';
import PropTypes from 'prop-types';
import MyMap from '../Map/MyMap';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {Link} from "react-router-dom";

import { Carousel } from 'react-responsive-carousel';
import './itinerary.scss';
import './carousel.scss';

import avatar from '../../assets/images/racer.png';
// import img1 from '../../assets/images/photoInitineraire1.jpg';
// import img2 from '../../assets/images/photoInitineraire2.jpg';
// import img3 from '../../assets/images/photoInitineraire3.jpg';


const OneItinerary = ({title,
                        description,
                        highway,
                        curve,
                        kilometer,
                        hour,
                        minute,
                        user,
                        longitude,
                        zoom,
                        latitude,
                        pictures,

}) => {

    return (
      <>
      <MyMap zoom={zoom} latitude={latitude} longitude={longitude} />
        <div className='itinerary'>

          <div className='itinerary__left'>
            <Link className='itinerary__left-link' to='/itineraires'><AiOutlineArrowLeft /> Toutes les balades moto</Link>

            <div className='detail'>

              <h1 className='detail-title'>{title}</h1>
              <div className='detail__itinerary'>
                <div className='detail__itinerary-span tag-teal'>
                  <h5>Distance :</h5>
                  <span>{kilometer} km</span>
                </div>

                <div className='detail__itinerary-span tag-purple'>
                  <h5>Durée :</h5>
                  <span>{hour} h {minute}</span>
                </div>

                <div className='detail__itinerary-span tag-pink'>
                  <h5>Autoroute :</h5>
                  <span>{highway === true ? 'Non'  : 'Oui'}</span>
                </div>

                <div className='detail__itinerary-span tag-green'>
                  <h5>Virages :</h5>
                  <span className='curve'>{curve} sur 5</span>
                </div>
                <h5 className='title-description'>Description</h5>
                <p>{description}</p>
              </div>

              <div className='itinerary__user'>
                <img src={avatar} alt='casque moto' width='100px' height='100px'/>
                <h5>{user}</h5>
              </div>
            </div>
          </div>
          <div className='itinerary__right'>
            <h5 className='title-description'>Photos</h5>
            <Carousel showArrows={true} >
                {pictures.map((picture) => (

                    <img
                    src={picture.pic_link}
                    alt={picture.pic_title}>
                    </img>

                ))}
            </Carousel>
              {/* <div >
                <img  src={img1} alt="lac"/>
              </div>
              <div >
                <img src={img2} alt="arbre"/>
              </div>
              <div >
                <img src={img3} alt="route"/>
              </div> */}

            </div>
          </div>
        </>
    )
}

OneItinerary.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default React.memo(OneItinerary);
