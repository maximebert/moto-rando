import React, {useState} from 'react';
import './inputFilterItinerary.scss';
import Itinerary from "../Itinerary/Itinerary";

const InputFilterItinerary = ({data}) => {
  const regions = ['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Bretagne', 'Centre-Val de Loire' , 'Corse',
                    'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandie', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur']
  const [valueDistrict, setValueDistrict] = useState('')
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValueDistance, setRangeValueDistance] = useState(200);
  const [isCrescent, setIsCrescent] = useState(false);
  const distance = ["De 0 a 150 km ", "De 151 a 300 km ", "De 301 a 700 km ", "Plus de 700km"];
  const [isHighway, setIsHighway] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("");
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
                        regions.map((region, index) => (
                          <option
                            key={index}
                            id={region}
                            value={region}>
                            {region}
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
                      min="0"
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
                {
                    data
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
                                       map={item.pictures}
                                       title={item.itinerary_title}
                                       description={item.itinerary_description}
                                       id={item.itinerary_id}
                                       user={item.user_alias}
                                       kilometer={item.itinerary_kilometer}
                                       highway={item.is_highway}
                            />
                          )
                    )
                }
            </div>
        </>
    )
}

export default React.memo(InputFilterItinerary)
