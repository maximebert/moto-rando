import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


//composants
import User from '../../Components/Profil/User';
import Bike from '../../Components/Profil/Bike/Bike';

//styles
import './profil.scss';


//Page du profil
const Profil = () => {
  const  [profilID, setProfilID]=useState([]);
  const [motorbikeID, setMotorbikeID]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  useEffect(() =>{
    async function fetchData() {
       const response = await axios.get(`http://localhost:3000/profil/${params.id}`)
       setProfilID(response.data);
       setMotorbikeID(response.data);
       setIsLoading(false);

    }
    fetchData()
  },[params.id]);
  console.log(profilID)
    return (
        <div className='profil'>
          <h1>Profil</h1>
          {!isLoading && (
            <div>
            <User  id={profilID.user_id} alias={profilID.user_alias} email={profilID.user_email} presentation={profilID.user_presentation}/>
            <Bike brand={motorbikeID.motorbike_brand} model={motorbikeID.motorbike_model} />
            </div>
          )}


        </div>
    )
}

export default React.memo(Profil);
