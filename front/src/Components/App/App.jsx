import { Routes , Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import Registration from '../../Pages/Registration/Registration';
import Profil from "../../containers/Profil";
import Team from "../../Pages/Team/Team";
import Contact from '../../Pages/Contact/Contact';
import Footer from "../Footer/Footer";
import Itinerary from "../../Pages/Itinerary/Itinerary";
import LoginContainer from "../../containers/Login";
import LegalNotice from "../Footer/LegalNotice/LegalNotice";
import HeaderContainer from "../../containers/Header";
import OneItinerary from "../../Pages/OneItinerary/Itinerary";
import RegistrationItinerary from "../../containers/RegistrationItinerary";
import ProfilUpdate from "../ProfilUpdate/ProfilUpdate";

import Error from "../Error/Error";

// styles
import '../../Styles/index.scss';
import './app.scss';
import UpdateProfil from "../../containers/UpdateProfil";


function App() {

  return (
    <div className="App">
        <HeaderContainer />
        <Routes>

            {/* route public */}
            <Route path="/" element={<Home />} />
            <Route path="/itineraires" element={<Itinerary/>} />
            <Route path="/itineraire/:id" element={<OneItinerary/>} />
            <Route path="/connexion" element={<LoginContainer />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="*" element={<Error />} />
            {/* route privee */}

            <Route path="/profil/:id/nouveau-itineraire" element={<RegistrationItinerary/>} />
            <Route path="/profil/:id" element={<Profil />} />
            <Route path="/profil/:id/modifier" element={<UpdateProfil/>} />

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
