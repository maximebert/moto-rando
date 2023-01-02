import { Routes, Route } from "react-router-dom";
// styles
import "../../Styles/index.scss";
import "./app.scss";
// route
import Home from "../../Pages/Home/Home";
import Registration from "../../Pages/Registration/Registration";
import Team from "../../Pages/Team/Team";
import Contact from "../../Pages/Contact/Contact";
import Itinerary from "../../Pages/Itinerary/Itinerary";
import OneItinerary from "../../Pages/OneItinerary/Itinerary";
import Profil from "../../containers/Profil";
import LoginContainer from "../../containers/Login";
import HeaderContainer from "../../containers/Header";
import RegistrationItinerary from "../../containers/RegistrationItinerary";
import UpdateProfil from "../../containers/UpdateProfil";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import LegalNotice from "../Footer/LegalNotice/LegalNotice";


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Routes>
        {/* route public */}
        <Route path="/" element={<Home />} />
        <Route path="/itineraires" element={<Itinerary />} />
        <Route path="/itineraire/:id" element={<OneItinerary />} />
        <Route path="/connexion" element={<LoginContainer />} />
        <Route path="/inscription" element={<Registration />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="*" element={<Error />} />

        {/* route privee */}
        <Route
          path="/profil/:id/nouveau-itineraire"
          element={<RegistrationItinerary />}
        />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/profil/:id/modifier" element={<UpdateProfil />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
