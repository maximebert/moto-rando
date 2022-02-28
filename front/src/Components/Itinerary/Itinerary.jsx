import React from 'react';
import imgItinerary from '../../assets/images/itineraire.jpg';
import './itinerary.scss';
import {GiMountainRoad, GiPathDistance} from "react-icons/gi";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';

const Itinerary = () => {
    return (
        <>
            <div className='container__card'>
                <div className='card'>
                    <img className='card__img' src={imgItinerary} />
                    <div className='card__title'>BRETAGNE NORD J3</div>
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
                    <span className='card__user'>
                        Mathilde
                        <BiUserCircle />
                    </span>
                </div>

                <div className='card'>
                    <img className='card__img' src={imgItinerary} />
                    <div className='card__title'>BRETAGNE NORD J3</div>
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
                    <span className='card__user'>
                        Mathilde
                        <BiUserCircle />
                    </span>
                </div>

                <div className='card'>
                    <img className='card__img' src={imgItinerary} />
                    <div className='card__title'>BRETAGNE NORD J3</div>
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
                    <span className='card__user'>
                        Mathilde
                        <BiUserCircle />
                    </span>
                </div>
            </div>
        </>
)
}

export default React.memo(Itinerary);
