import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';



//composants
import User from '../../Components/Profil/User';
import Bike from '../../Components/Profil/Bike/Bike';

//styles
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsPen } from 'react-icons/bs';
import './profil.scss';
import ItineraryProfil from '../../Components/Profil/ItineraryProfil/ItineraryProfil';
import apiAxios from '../../request';


//Page du profil
const Profil = () => {

  const [profilID, setProfilID] = useState([]);
  const [motorbikeID, setMotorbikeID] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await apiAxios.get(`/profil/${params.id}`)
      setProfilID(response.data);
      setMotorbikeID(response.data);
      setIsLoading(false);
    }
    fetchData()

  }, [params.id]);
  console.log(profilID)

  return (
    <div className='profil'>
      <h3 className='profil-title'>Mon Profil</h3>
      {!isLoading && (
        <div className='profil__detail'>
          <User id={profilID.user_id} alias={profilID.user_alias} email={profilID.user_email} presentation={profilID.user_presentation} />
          <Bike brand={motorbikeID.motorbike_brand} model={motorbikeID.motorbike_model} />
        </div>
      )}
      <Link to={`/profil/${profilID.user_id}/modifier`} >
        <button className='profil-update' >Modifier mon profil <BsPen className='icon'/> </button>
      </Link>
      <h3 className='profil-title'>Dernières balades partagées</h3>
      <ItineraryProfil itineraryProfil={profilID} />
      <Link to={`/profil/${profilID.user_id}/nouveau-itineraire`} className='profil-create'>Créer une nouvelle balade <AiOutlinePlusCircle className='icon' /></Link>
    </div>
  )
}

export default React.memo(Profil);
