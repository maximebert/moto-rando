import React from 'react';
import PropTypes from 'prop-types';

//style
import {GiMountainRoad, GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';


const ItineraryID = ({title}) => {
    return (

        <div className='card'>
            {/* <img className='card__img' src={map} alt={title} /> */}
            <div className='card__title'>{title}</div>
            <div className='card__description'>
                <div className='card__description-icon'>
                    <p>Durée <AiOutlineFieldTime /></p>
                    <span>3h</span>
                </div>
                <div className='card__description-icon'>
                    <p>Distance <GiPathDistance /></p>
                    <span>450km</span>
                </div>
                <div className='card__description-icon'>
                    <p>Sinuosité <GiMountainRoad /></p>
                    <span>3/5</span>
                </div>
            </div>
            <p></p>
            <span className='card__user'>
                Mathilde
                <BiUserCircle />
            </span>
        </div>
    )
}

ItineraryID.prototype = {
    title: PropTypes.string.isRequired,
    // map: PropTypes.string,
    description: PropTypes.string.isRequired,
}

ItineraryID.defaultProps = {
    // map: 'https://fakeimg.pl/300'
}

export default React.memo(ItineraryID);
