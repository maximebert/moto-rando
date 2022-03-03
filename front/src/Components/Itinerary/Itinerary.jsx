import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//style
import './itinerary.scss';
import {GiMountainRoad, GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';


const Itinerary = ({id, map, title, description,duration, kilometer,curve, highway}) => {
    return (

        <div className='card'>
            <Link to={`/${id}`}><img className='card__img' src={map} alt={title} /></Link>
            <div className='card__title'>{title}</div>
            <div className='card__description'>
                <div className='card__description-icon'>
                    <p>Durée <AiOutlineFieldTime /></p>
                    <span>{duration}</span>
                </div>
                <div className='card__description-icon'>
                    <p>Distance <GiPathDistance /></p>
                    <span>{kilometer}</span>
                </div>
                <div className='card__description-icon'>
                    <p>Sinuosité <GiMountainRoad /></p>
                    <span>{curve}</span>
                    <span>{highway}</span>
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

Itinerary.prototype = {
    title: PropTypes.string.isRequired,
    map: PropTypes.string,
    description: PropTypes.string.isRequired,


}

Itinerary.defaultProps = {
    map: 'https://fakeimg.pl/300'
}

export default React.memo(Itinerary);
