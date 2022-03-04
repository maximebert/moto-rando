import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//style
import './itinerary.scss';
import {GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import { FaRoad, FaRegWindowClose } from 'react-icons/fa';


const Itinerary = ({id, map, title, description, user, kilometer, highway}) => {

    return (

        <div className='card'>
            <Link to={`/itineraire/${id}`}><img className='card__img' src={map} alt={title} /></Link>
            <div className='card__title'>{title}</div>
            <div className='card__description'>
                <div className='card__description-icon'>
                    <p>Durée <AiOutlineFieldTime className='icon' /></p>
                    <span>3h</span>
                </div>
                <div className='card__description-icon'>
                    <p>Distance <GiPathDistance className='icon' /></p>
                    <span>{kilometer} km</span>
                </div>
                <div className='card__description-icon'>
                    <p>Autoroute</p>
                    <span className='icon'>{highway === true ? <FaRoad /> : <FaRegWindowClose />}</span>
                </div>
            </div>
            <p className='description'>{description}</p>
            <span className='card__user'>
                {user}
                <BiUserCircle className='icon' />
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
