// import react
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import requetes
import { getAllList } from "../../request/itineraryRequest";

// import composants
import Content from "../../Components/ContentHome/Content";
import ContentItinerary from "../../Components/ContentItinerary/ContentItinerary";

// import style
import "../Home/home.scss";

const Home = () => {
  // on déclare un état de base, ici itinerary est un tableau vide
  const [itinerary, setItinerary] = useState([]);
  //
  const isLogged = useSelector((state) => state.user.logged);
  const userId = useSelector((state) => state.user.id);
  // dès que la page Home est appellée le useEffect lance la requete Axios pour afficher les itinéraires.
  useEffect(() => {
    async function fetchData() {
      const response = await getAllList();
      setItinerary(response.data);
    }
    fetchData();
  }, []);
  console.log(itinerary);
  return (
    <>
      <Content />
      {/* On appelle notre composant ContentItinerary et on lui passe des props (proprietés)  */}
      <ContentItinerary itineraryList={itinerary} />
      {/* Si on est connecté on affiche créer un itinéraire et on fait une redirection vers créer un itinéraire */}
      {isLogged ? (
        <Link
          to={`profil/${userId}/nouveau-itineraire`}
          className="btn-createItinerary"
        >
          Créer votre itineraire
        </Link>
      ) : (
        <Link to="/inscription" className="btn-createItinerary">
          Inscrivez-vous pour créer votre itineraire
        </Link>
      )}

      <div className="home__content">
        <div className="home__content-text">
          <h3>DÉCOUVREZ DE NOUVELLES ROUTES</h3>
          <p>
            Où que vous soyez, trouvez de nouvelles balades moto à faire seul ou
            à plusieurs. Celles-ci comportent des photos pour vous donner un
            aperçu mais également des points d'intérêt.
          </p>
        </div>
        <div className="home__content-text">
          <h3>PARTAGEZ VOS BALADES À MOTO</h3>
          <p>
            En quelques instants, depuis le site internet ou en important depuis
            votre GPS, partagez votre balade moto. Vous en gardez la trace et en
            faite profiter les membres.
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
