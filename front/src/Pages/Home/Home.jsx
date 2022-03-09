// import react
import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import Content from "../../Components/ContentHome/Content";
import ContentItinerary from "../../Components/ContentItinerary/ContentItinerary";
import {Link} from "react-router-dom";
// import style
import '../Home/home.scss'
import {getAllList} from "../../request/itineraryRequest";

const Home = () => {
    const [itinerary, setItinerary] = useState([])
    const isLogged = useSelector((state) => state.user.logged)

    useEffect( () => {
        async function fetchData() {
            const response = await getAllList();
            setItinerary(response.data)
        }
        fetchData();
    }, []);

    return (
        <>
            <Content />

            <ContentItinerary itineraryList={itinerary} />

            {isLogged ?  <Link to="/nouveau-itineraire" className='btn-createItinerary'>Créer votre itineraire</Link> :  (
               <Link to="/inscription" className='btn-createItinerary'>Inscrivez-vous pour créer votre itineraire</Link>
            )}

            <div className='home__content'>
                <div className='home__content-text'>
                    <h3>DÉCOUVREZ DE NOUVELLES ROUTES</h3>
                    <p>Où que vous soyez, trouvez de nouvelles balades moto à faire seul ou à plusieurs.
                        Celles-ci comportent des photos pour vous donner un aperçu mais également des points d'intérêt.
                    </p>
                </div>
                <div className='home__content-text'>
                    <h3>PARTAGEZ VOS BALADES À MOTO</h3>
                    <p>En quelques instants, depuis le site internet ou en important depuis votre GPS, partagez votre balade moto.
                        Vous en gardez la trace et en faite profiter les membres.
                    </p>
                </div>
            </div>

        </>
    )
}



export default React.memo(Home)
