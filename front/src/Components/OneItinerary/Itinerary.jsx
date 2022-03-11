import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MyMap from '../Map/MyMap';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {Link} from "react-router-dom";
import Itinerary from "../Itinerary/Itinerary";
import {getAllList} from "../../request/itineraryRequest";
import { Carousel } from 'react-responsive-carousel';
import './itinerary.scss';
import './carousel.scss';

import avatar from '../../assets/images/racer.png';
import img1 from '../../assets/images/photoInitineraire1.jpg';
import img2 from '../../assets/images/photoInitineraire2.jpg';
import img3 from '../../assets/images/photoInitineraire3.jpg';
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4 },
  1600: { items: 5},
  1700: { items: 6 },
};

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


}) => {

  const [itineraryRandom, setItineraryRandom] = useState([])
  useEffect( () => {

    async function fetchData() {
      const response = await getAllList();
      setItineraryRandom(response.data)
    }
    fetchData();
  }, []);
  console.log('user', user);
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
            </div>
          <div className='card-suggestion'>
            <div className='container-card'>
              <h5 className='title-description'>Suggestion de balades</h5>
              <AliceCarousel
                disableDotsControls
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate">
                {
                  itineraryRandom
                    .slice(0, 10)
                    .map((itinerary) => (
                      <Itinerary
                        className='item'
                        data-value={itinerary.itinerary_id}
                        key={itinerary.itinerary_id}
                        map={itinerary.pictures[0].pic_link}
                        title={itinerary.itinerary_title}
                        description={itinerary.itinerary_description}
                        id={itinerary.itinerary_id}
                        user={itinerary.user_alias}
                        district={itinerary.districts[0].district_name}
                        kilometer={itinerary.itinerary_kilometer}
                        highway={itinerary.is_highway}
                        hours={itinerary.itinerary_hour}
                        minutes={itinerary.itineray_minute}
                      />
                    ))
                }
              </AliceCarousel>
            </div>
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
