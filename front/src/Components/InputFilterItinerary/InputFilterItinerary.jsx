import React, {useEffect, useState} from 'react';
import './inputFilterItinerary.scss';
import Itinerary from "../Itinerary/Itinerary";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import {getAllList} from "../../request/itineraryRequest";
import axios from "axios";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
};

const InputFilterItinerary = ({data}) => {
  const [district, setDistrict] = useState([])

  useEffect( () => {
    async function fetchData(){
      const response = await axios.get('http://localhost:3000/regions')
      setDistrict(response.data)
    }
    fetchData();
  }, []);
  console.log(district)

  const [valueDistrict, setValueDistrict] = useState('Choisissez une region')
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValueDistance, setRangeValueDistance] = useState(50);
  const [isCrescent, setIsCrescent] = useState();
  const [isHighway, setIsHighway] = useState(true);

  // select pour la region
  const handleChangeDistrict = (event) => {
    setValueDistrict(event.target.value);
  }

  // range sinuosite
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChangeUp = (e) => {
    e.preventDefault();
    setIsCrescent(false)
  }
  const handleChangeDown = (e) => {
    e.preventDefault();
    setIsCrescent(true)
  }

  const handleChangeHighwayYes = (e) => {
    e.preventDefault();
    setIsHighway(true)
  }
  const handleChangeHighwayNo = (e) => {
    e.preventDefault();
    setIsHighway(false)
  }
    return (
        <>
            <h2 className='itinerary__title'>RECHERCHE DE BALADE MOTO</h2>
            <form className='itinerary__form'>
                <div className='itinerary__form-district'>

                  <label>Où souhaitez-vous vous balader ? <span>*</span></label>
                    <select value={valueDistrict} onChange={handleChangeDistrict}>
                      <option value='Choisissez une region'>Choisissez une region</option>
                      {
                        district.map((region, index) => (
                          <option
                            key={index}
                            id={region.name}
                            value={region.name}>
                            {region.name}
                          </option>
                        ))
                      }
                    </select>

                  <label>Distance</label>
                  <ul className="range-container">
                    <input
                      className='range-input'
                      type="range"
                      min="0"
                      max="2000"
                      defaultValue={rangeValueDistance}
                      onChange={(e) => setRangeValueDistance(e.target.value)}
                    />
                    <p>
                      Balade supérieur à {numberFormat(rangeValueDistance)} kilomètres
                    </p>
                  </ul>

                  <div className='filter-btn'>
                    <div className='filter-btn-changeFilter'>
                      <div>
                        <p>Trier par</p>
                        <button onClick={handleChangeUp}>Longue distance</button>
                        <button onClick={handleChangeDown}>Petite distance</button>
                      </div>

                      <div>
                        <p>Trier par <span>*</span></p>
                        <button onClick={handleChangeHighwayYes}>Éviter l'autoroute</button>
                        <button onClick={handleChangeHighwayNo}>Avec autoroute </button>
                      </div>
                    </div>
                  </div>
                </div>
            </form>

            <div className='container__card'>
              <AliceCarousel
                disableDotsControls
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate">
                {
                  data
                    .filter((district) => district.districts[0].district_name.includes(valueDistrict))
                    .filter((distance) => distance.itinerary_kilometer > rangeValueDistance)
                    .filter((highway) => {
                      if(isHighway === false){
                        return highway.is_highway === false
                      } else {
                        return highway.is_highway === true
                      }
                    })
                    .sort((a, b) => {
                      if(isCrescent) {
                        return a.itinerary_kilometer - b.itinerary_kilometer;
                      } else {
                        return b.itinerary_kilometer - a.itinerary_kilometer
                      }
                    })
                    .map((item) => (
                        <Itinerary key={item.itinerary_id}
                                   map={item.pictures[0].pic_link}
                                   title={item.itinerary_title}
                                   description={item.itinerary_description}
                                   id={item.itinerary_id}
                                   user={item.user_alias}
                                   kilometer={item.itinerary_kilometer}
                                   highway={item.is_highway}
                                   hours={item.itinerary_hour}
                                   minutes={item.itineray_minute}
                        />
                      )
                  )
                }
              </AliceCarousel>
            </div>
        </>
    )
}

export default React.memo(InputFilterItinerary)
