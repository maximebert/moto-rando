import React from 'react';
import PropTypes from 'prop-types';
import Itinerary from "../Itinerary/Itinerary";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import './contentItinerary.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1300: { items: 4},
};

const ContentItinerary = ({itineraryList}) => {

    return (
      <>
        <h2 className='title-home'>Balades moto en Provence-Alpes-Côte d'Azur</h2>
        <div className='container__card'>
          <AliceCarousel
            disableDotsControls
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate">
            {
              //ici on va boucler pour récupérer une liste d'itinéraire
              itineraryList
                .filter((district) => district.districts[0].district_name === 'Provence-Alpes-CÃ´te dAzur' || 'Provence-Alpes-Côte dAzur')
                .map((itinerary) => (
                  //c'est les infos que l'on a besoin pour afficher un itinéraire
                  <Itinerary
                            className='item'
                            data-value={itinerary.itinerary_id}
                            key={itinerary.itinerary_id}
                             map={itinerary.pictures[0].pic_link}
                             title={itinerary.itinerary_title}
                             description={itinerary.itinerary_description}
                             id={itinerary.itinerary_id}
                             user={itinerary.user_alias}
                             kilometer={itinerary.itinerary_kilometer}
                             highway={itinerary.is_highway}
                            hours={itinerary.itinerary_hour}
                            minutes={itinerary.itineray_minute}
                  />
                ))
            }
          </AliceCarousel>

        </div>

        <h2 className='title-home'>Balades moto en Auvergne-Rhône-Alpes</h2>
        <div className='container__card'>
          <AliceCarousel
            disableDotsControls
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate">
          {
            //ici on va boucler pour récupérer une liste d'itinéraire
            itineraryList
              .filter((district) => district.districts[0].district_name === 'Bretagne')
              .map((itinerary) => (
                //c'est les infos que l'on a besoin pour afficher un itinéraire
                <Itinerary key={itinerary.itinerary_id}
                           map={itinerary.pictures[0].pic_link}
                           title={itinerary.itinerary_title}
                           description={itinerary.itinerary_description}
                           id={itinerary.itinerary_id}
                           user={itinerary.user_alias}
                           kilometer={itinerary.itinerary_kilometer}
                           highway={itinerary.is_highway}
                />
              ))
          }
          </AliceCarousel>
        </div>

        <h2 className='title-home'>Balades moto en Nouvelle-Aquitaine</h2>
        <div className='container__card'>
          <AliceCarousel
            disableDotsControls
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate">
            {

            //ici on va boucler pour récupérer une liste d'itinéraire
            itineraryList
              .filter((district) => district.districts[0].district_name === 'Nouvelle-Aquitaine')
              .map((itinerary) => (
                //c'est les infos que l'on a besoin pour afficher un itinéraire
                <Itinerary key={itinerary.itinerary_id}
                           map={itinerary.pictures[0].pic_link}
                           title={itinerary.itinerary_title}
                           description={itinerary.itinerary_description}
                           id={itinerary.itinerary_id}
                           user={itinerary.user_alias}
                           kilometer={itinerary.itinerary_kilometer}
                           highway={itinerary.is_highway}
                />
              ))
          }
            </AliceCarousel>
        </div>
      </>

    )
};

ContentItinerary.propTypes = {
    ItineraryList: PropTypes.arrayOf(
        PropTypes.shape({
            itinerary_id: PropTypes.number.isRequired,
            picture: PropTypes.string.isRequired,
            itinerary_title: PropTypes.string.isRequired,
            itinerary_description: PropTypes.string.isRequired
        })
    )
}


export default React.memo(ContentItinerary);
