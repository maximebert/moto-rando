
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Itinerary from '../../Components/OneItinerary/Itinerary'
import apiAxios from '../../request';

import './style.scss';


const OneItinerary = () => {
  const [itineraryID, setItineraryID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userLogged = useSelector((state) => state.user.id)

  const params = useParams()
  // console.log(params);
  useEffect(() => {
    // const response = await axios.get(`http://localhost:3000/itineraires/${params.id}`);
    // setItineraryID(response.data);
    // setIsLoading(false);
    apiAxios.get(`/itineraires/${params.id}`)
      .then(({ data }) => {
        setItineraryID(data)
        setIsLoading(false);
      })
  }, [params.id]);
  console.log(itineraryID)

  // console.log(itineraryID.districts[0].district_latitude);
  return (
    <div>
      {!isLoading && itineraryID && userLogged ? (
        <>
          {
            console.log(itineraryID)
          }
          <Itinerary
            // map={itineraryID.pictures[0].pic_link}// tracé
            id={itineraryID.itinerary_id}
            title={itineraryID.itinerary_title}
            description={itineraryID.itinerary_description}
            hour={itineraryID.itinerary_hour}
            minute={itineraryID.itinerary_minute}
            curve={itineraryID.itinerary_curve}
            pictures={itineraryID.pictures}
            highway={itineraryID.is_highway}
            kilometer={itineraryID.itinerary_kilometer}
            user={itineraryID.user_alias}
            longitude={itineraryID.districts[0].district_longitude}
            latitude={itineraryID.districts[0].district_latitude}
            zoom={itineraryID.districts[0].district_zoom}
            trace={itineraryID.itinerary_trace}
          />
        </>
      ) : (
        <div className='noLogged'>
          <div class="lock"></div>
          <div class="message">
            <h1 className='message-title'>INSCRIVEZ-VOUS OU CONNECTEZ-VOUS POUR VOIR LE TRACÉ DE CETTE BALADE</h1>
            <Link to='/connexion'>
              <button className='btn-log'>Se connecter</button>
            </Link>
            <Link to='/inscription'>
              <button className='btn-log'>S'inscrire</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(OneItinerary);
