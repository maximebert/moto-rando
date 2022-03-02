// import react
import React, {useEffect, useState} from 'react'
import {getAllList} from "../../request/ListItinerary";
import ContentItinerary from "../../Components/ContentItinerary/ContentItinerary";
import InputFilterItinerary from "../../Components/InputFilterItinerary/InputFilterItinerary";
//style
import './/profilItinary.scss';

// page d'un itinéraire

const Itinerary = () => {
    const [itinerary, setItinerary] = useState([])

    useEffect(async () => {
        const response = await getAllList();
        setItinerary(response.data)
    }, []);
    return (
        <div>
            <InputFilterItinerary data={itinerary} />
        </div>
    )
}

export default React.memo(Itinerary);
