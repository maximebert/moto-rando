
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Itinerary from '../../Components/OneItinerary/Itinerary'
import apiAxios from '../../request';


const OneItinerary = () => {
    const [itineraryID, setItineraryID] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()
    // console.log(params);
    useEffect( () => {
            // const response = await axios.get(`http://localhost:3000/itineraires/${params.id}`);
            // setItineraryID(response.data);
            // setIsLoading(false);
             apiAxios.get(`/itineraires/${params.id}`)
            .then(({data}) => {
              setItineraryID(data)
              setIsLoading(false);
            })
    }, [params.id]);
    console.log(itineraryID)
  
    // console.log(itineraryID.districts[0].district_latitude);
    return (
        <div>
           {!isLoading && itineraryID && (
             <>
               {
                 console.log(itineraryID)
               }
            <Itinerary
                // map={itineraryID.pictures[0].pic_link}// tracé
                title={itineraryID.itinerary_title}
                description={itineraryID.itinerary_description}
                hour={itineraryID.itinerary_hour}
                minute={itineraryID.itinerary_minute}
                curve={itineraryID.itinerary_curve}
                // photo
                highway={itineraryID.is_highway}
                kilometer={itineraryID.itinerary_kilometer}
                user={itineraryID.user_alias}
                longitude={itineraryID.districts[0].district_longitude}
                latitude={itineraryID.districts[0].district_latitude}
                zoom={itineraryID.districts[0].district_zoom}
            />
             </>
             )}
        </div>
    )
}

export default React.memo(OneItinerary);
