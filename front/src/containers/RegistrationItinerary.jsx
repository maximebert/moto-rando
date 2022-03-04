import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, } from 'react-redux';
import RegistrationItinerary from '../Components/Registration/Itinerary/RegistrationItinerary';

const RegistrationItineraryContainer = () => {
  const logged = useSelector((state) => state.user.logged);


  if (!logged) {
    return (<Navigate to="/" replace />);
  }

  return (
    <RegistrationItinerary  />
  );
};

export default React.memo(RegistrationItineraryContainer);