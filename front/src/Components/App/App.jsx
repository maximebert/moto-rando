import { Routes , Route } from "react-router-dom";
//components
import RegistrationItinerary from "../Registration/RegistrationItinerary";
// pages
import Home from "../../Pages/Home/Home";
import Registration from '../../Pages/Registration/Registration';
import Profil from "../../Pages/Profil/Profil";
import Team from "../../Pages/Team/Team";
import Contact from '../../Pages/Contact/Contact';
import Footer from "../Footer/Footer";
import Itinerary from "../../Pages/Itinerary/Itinerary";
import LoginContainer from "../../containers/Login";
import LegalNotice from "../Footer/LegalNotice/LegalNotice";
import HeaderContainer from "../../containers/Header";
// styles
import '../../Styles/index.scss';
import './app.scss';




function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraires" element={<Itinerary/>} />
            <Route path="/connexion" element={<LoginContainer />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/nouveau-itineraire" element={<RegistrationItinerary/>} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
