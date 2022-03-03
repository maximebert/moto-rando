import React from 'react';
import PropTypes from 'prop-types';
//style
import './itinerary.scss';
import {GiMountainRoad, GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';


const OneItinerary = ({title, description, map}) => {
    return (

        <div className='card'>
            <img className='card__img' src={map} alt={title} />
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
            <p>{description}</p>
            <span className='card__user'>
                Mathilde
                <BiUserCircle />
            </span>
        </div>
    )
}

OneItinerary.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
OneItinerary.defaultProps = {
}

export default React.memo(OneItinerary);
