import { Routes , Route } from "react-router-dom";

// pages
import Profil from "../../Pages/Profil/Profil";
import Team from "../../Pages/Team/Team";
import Contact from '../../Pages/Contact/Contact';

// styles
import '../../Styles/index.scss';
import './app.scss';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/profil" element={<Profil />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
