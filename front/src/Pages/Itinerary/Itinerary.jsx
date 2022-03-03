// import react
import React, {useEffect, useState} from 'react'
import {getAllList} from "../../request/itineraryRequest";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";
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
        <div>
            <InputFilterItinerary data={itinerary} />
        </div>
    )
}

export default React.memo(Itinerary);
