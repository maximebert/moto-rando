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

  const [valueDistrict, setValueDistrict] = useState('')
  const [rangeValue, setRangeValue] = useState(1);
  const [rangeValueDistance, setRangeValueDistance] = useState(50);
  const [isCrescent, setIsCrescent] = useState(false);
  const [isHighway, setIsHighway] = useState(true);

  // select pour la region
  const handleChangeDistrict = (event) => {
    setValueDistrict(event.target.value);
  }

  // range sinuosite
  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChangeTri = (e) => {
    e.preventDefault();
    setIsCrescent((a) => !a)
  }

  const handleChangeHighway = (e) => {
    e.preventDefault();
    setIsHighway((a) => !a)
  }

    return (
        <>
            <h2 className='itinerary__title'>RECHERCHE DE BALADE MOTO</h2>
            <form className='itinerary__form'>
                <div className='itinerary__form-district'>

                  <label>Où souhaitez-vous vous balader ?</label>
                    <select value={valueDistrict} onChange={handleChangeDistrict}>
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

                  <label>Sinuosite de la route</label>
                  <ul className="range-container">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      defaultValue={rangeValue}
                      onChange={(e) => setRangeValue(e.target.value)}
                    />
                    <p>
                      {numberFormat(rangeValue)}
                    </p>
                  </ul>

                  <div className='filter-btn'>
                    <div>
                      {isCrescent ? (
                        <button onClick={handleChangeTri}>Plus longue distance</button>
                      ) : (
                        <button onClick={handleChangeTri}>Plus petite distance</button>
                      )}
                    </div>
                    <div>
                      {
                        isHighway ? (
                          <button onClick={handleChangeHighway}>Balade sans autoroutes </button>
                        ) : (
                          <button onClick={handleChangeHighway}>Balade avec autoroutes </button>
                        )
                      }
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
                      .filter((curve) => curve.itinerary_curve > rangeValue)
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
