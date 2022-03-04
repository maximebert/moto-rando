import React from 'react';
import PropTypes from 'prop-types';
import Itinerary from "../Itinerary/Itinerary";

const ContentItinerary = ({itineraryList}) => {
    return (
        <div className='container__card'>
            {
              //ici on va boucler pour récupérer une liste d'itinéraire
                itineraryList.map((itinerary) => (
                  //c'est les infos que l'on a besoin pour afficher un itinéraire
                    <Itinerary key={itinerary.itinerary_id}
                               map={itinerary.pictures[0].pic_link}
                               title={itinerary.itinerary_title}
                               description={itinerary.itinerary_description}
                               id={itinerary.itinerary_id}
                               user={itinerary.user_alias}
                               kilometer={itinerary.itinerary_kilometer}
                               highway={itinerary.is_highway}
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
            picture: PropTypes.string.isRequired,
            itinerary_title: PropTypes.string.isRequired,
            itinerary_description: PropTypes.string.isRequired
        })
    )
}


export default React.memo(ContentItinerary);
