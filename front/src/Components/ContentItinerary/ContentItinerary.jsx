import React from 'react';
import PropTypes from 'prop-types';
import Itinerary from "../Itinerary/Itinerary";

const ContentItinerary = ({itineraryList}) => {
    return (
        <div className='container__card'>
            {
                itineraryList.map((itinerary) => (
                    <Itinerary key={itinerary.itinerary_id}
                               map={itinerary.pictures[0].pic_link}
                               title={itinerary.itinerary_title}
                               description={itinerary.itinerary_description}
                    />
                ))
            }
        </div>
    )
};

ContentItinerary.propTypes = {
    ItineraryList: PropTypes.arrayOf(
        PropTypes.shape({
            itinerary_id: PropTypes.number.isRequired,
            pictures: PropTypes.arrayOf(
                PropTypes.shape({
                    pic_link: PropTypes.string.isRequired
                }).isRequired
            ),
            itinerary_title: PropTypes.string.isRequired,
            itinerary_description: PropTypes.string.isRequired
        })
    )
}


export default React.memo(ContentItinerary);
