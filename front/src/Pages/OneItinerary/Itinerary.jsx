// import react
import axios from 'axios';
import PropTypes from 'prop-types';

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Itinerary from '../../Components/OneItinerary/Itinerary'


const OneItinerary = () => {
    const [itineraryID, setItineraryID] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()
    console.log(params);

    useEffect( () => {
        async function fetchData(){

            const response = await axios.get(`http://localhost:3000/itineraires/${params.id}`);
            setItineraryID(response.data);
            setIsLoading(false);

        }
        fetchData()
    }, []);

    console.log(itineraryID);
    return (


        <div>
           {!isLoading && (
            <Itinerary
                map={itineraryID.pictures[0].pic_link}// tracé
                title={itineraryID.itinerary_title}
                description={itineraryID.itinerary_description}
                // photo
                // duration={itineraryID.itinerary_duration}
                highway={itineraryID.is_highway}
                kilometer={itineraryID.itinerary_kilometer}
                curve={itineraryID.itinerary_curve}
                user={itineraryID.user_alias}



            />)}
        </div>
    )
}

export default React.memo(OneItinerary);
