import { Routes , Route } from "react-router-dom";
//components
import Header from '../Header/Header';
// pages
import Home from "../../Pages/Home/Home";
import Registration from '../../Pages/Registration/Registration';
import Profil from "../../Pages/Profil/Profil";
import Team from "../../Pages/Team/Team";
import Contact from '../../Pages/Contact/Contact';
import Footer from "../Footer/Footer";
import ProfilItinerary from "../../Pages/ProfilItinerary/ProfilItinerary";
import LegalNotice from "../Footer/LegalNotice/LegalNotice";

// styles
import '../../Styles/index.scss';
import './app.scss';



function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraires" element={<ProfilItinerary/>} />
            <Route path="/inscription" element={<Registration />} />
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
