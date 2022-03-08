// import react
import React, {useEffect, useState} from 'react'
import {getAllList} from "../../request/itineraryRequest";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";
import MapBox from '../../Components/MapBox/MapBox';
//style
import './profilItinary.scss';



const Itinerary = () => {
    const [itinerary, setItinerary] = useState([])

    useEffect( () => {
        async function fetchData(){
            const response = await getAllList();
            setItinerary(response.data)
        }
        fetchData();
    }, []);

    return (
        <div className='itinerary_list'>
            <div className='itinerary_list-left'>
                <InputFilterItinerary data={itinerary} />
            </div>
            <div className='itinerary_list-right'>
                <MapBox mapData={itinerary} />
            </div>

        </div>
    )
}

export default React.memo(Itinerary);
