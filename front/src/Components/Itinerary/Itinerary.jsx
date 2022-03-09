import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//style
import './itinerary.scss';
import {GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import { FaRoad, FaRegWindowClose } from 'react-icons/fa';



const Itinerary = ({id, map, title, description, user, kilometer, highway, hours, minutes}) => {

    return (

        <div className="card">
          <div className="card-header">
            <img className='card__img' src={map === null ? 'https://fakeimg.pl/300' : ''} alt={title} />
          </div>
        <div className="card-body">
          <h4>
            <Link to={`/itineraire/${id}`}><div className='card__title'>{title}</div></Link>
          </h4>
          <div className='card-body-tag'>
            <span className="tag tag-teal">Distance: {kilometer} km</span>
            <span className="tag tag-purple">Durée: {hours} heures {minutes} min</span>
            <span className="tag tag-pink">Autoroute: {highway === true ? 'Non'  : 'Oui'}</span>
          </div>
          <p>
            {description}
          </p>
          <Link className='link-itinerary' to={`/itineraire/${id}`}>Voir l'itineraire</Link>
          <div className="user">
            <span className='card__user'>
              <BiUserCircle className='icon' />
              {user}

              </span>
          </div>
        </div>
        </div>



        // <div className='card'>
        //   <Link to={`/itineraire/${id}`}><div className='card__title'>{title}</div></Link>
        //    <img className='card__img' src={map} alt={title} />
        //     <div className='card__description'>
        //         <div className='card__description-icon'>
        //             <p>Durée <AiOutlineFieldTime className='icon' /></p>
        //             <span>3h</span>
        //         </div>
        //         <div className='card__description-icon'>
        //             <p>Distance <GiPathDistance className='icon' /></p>
        //             <span>{kilometer} km</span>
        //         </div>
        //         <div className='card__description-icon'>
        //             <p>Autoroute</p>
        //             <span className='icon'>{highway === true ? <FaRoad /> : <FaRegWindowClose />}</span>
        //         </div>
        //     </div>
        //     <p className='description'>{description}</p>
        //
        //     <span className='card__user'>
        //         <BiUserCircle className='icon' />
        //         {user}
        //     </span>

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
