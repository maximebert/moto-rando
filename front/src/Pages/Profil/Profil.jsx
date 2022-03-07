import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


//composants
import Bike from '../../Components/Profil/Bike/Bike';
import User from '../../Components/Profil/User';

//styles
import './profil.scss';


//Page du profil
const Profil = () => {
  const  [profilID, setProfilID]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  useEffect(() =>{
    async function fetchData() {
       const response = await axios.get(`http://localhost:3000/profil/${params.id}`)
       setProfilID(response.data);
       setIsLoading(false);

    }
    fetchData()
  },[]);

    return (
        <div className='profil'>
          <h1>Page Profil</h1>
          {!isLoading && (
          <User pseudo={profilID.pseudo} year={profilID.year} description={profilID.description}/>)}
          {/* <Bike/> */}

        </div>
    )
}

export default React.memo(Profil);
