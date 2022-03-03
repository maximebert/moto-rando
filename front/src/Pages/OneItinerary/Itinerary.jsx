// import react
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Itinerary from '../../Components/Itinerary/Itinerary'


const OneItinerary = () => {
    const [itineraryID, setItineraryID] = useState([]);
    const params = useParams()
    console.log(params);

    useEffect( () => {
        async function fetchData(){
            try{
                const response = await axios.get(`http://localhost:3000/itineraires/${params.id}`);
                setItineraryID(response.data)
            }catch(err){
                return err.response
            }
        }
        fetchData()
    }, []);

    console.log(itineraryID);
    return (
        <div> 
            <Itinerary 
                title={itineraryID.itinerary_title} 
                description={itineraryID.itinerary_description}
            />
        </div>
    )
}

export default React.memo(OneItinerary);
