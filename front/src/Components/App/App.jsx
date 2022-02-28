import { Routes , Route } from "react-router-dom";
//components
import Header from '../Header/Header';
// pages
import Home from "../../Pages/Home/Home";
import Itinary from "../../Pages/Itinary/Itinary";
import Registration from '../../Pages/Registration/Registration';
import Profil from "../../Pages/Profil/Profil";
import Team from "../../Pages/Team/Team";
import Contact from '../../Pages/Contact/Contact';

// styles
import '../../Styles/index.scss';
import './app.scss';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraires" element={<Itinary />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
