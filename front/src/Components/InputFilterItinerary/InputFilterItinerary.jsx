import React, {useState} from 'react';
import {MenuItem, Rating, TextField, Typography} from "@mui/material";
import './inputFilterItinerary.scss';
import Itinerary from "../Itinerary/Itinerary";

const kilometers = [
    {
        value: '50 - 150',
        label: '50 - 150'
    },
    {
        value: '150 - 300',
        label: '150 - 300'
    },
    {
        value: '300 +',
        label: '300 +'
    },
];

const InputFilterItinerary = ({data}) => {
    const [kilometer, setKilometer] = useState('50 - 150');
    const [valueSinuosite, setValueSinuosite] = useState(3);

    const [inputPlace, setInputPlace] = useState('');
    const [filterPlace, setFilterPlace] = useState([]);

    // change value kilometers
    const handleChangeKilometer = (event) => {
        setKilometer(event.target.value);
    }

    const filter = (searchValue) => {
        setInputPlace(searchValue)

        if(inputPlace !== '') {
            const results = data.filter((item) => {
                return item.itinerary_title.toLowerCase().includes(inputPlace);
            });
            setFilterPlace(results);
        } else {
            setFilterPlace(data)
        }
    }

    return (
        <>
            <h2 className='itinerary__title'>Recherche D'itinéraires</h2>
            <form className='itinerary__form'>
                <div className='itinerary__form-input'>
                    <TextField className='input'  label="Lieu"  value={inputPlace} onChange={(e) => filter(e.target.value)}  />

                    <TextField
                        className='input'
                        select
                        label="Kilomètres"
                        value={kilometer}
                        onChange={handleChangeKilometer}
                    >
                        {kilometers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label} </MenuItem>
                        ))}
                    </TextField>
                    <div className='input-note'>
                        <Typography className='input' component='legend'>Sinuosité de la route</Typography>
                        <Rating
                            className='input'
                            name="simple-controlled"
                            value={valueSinuosite}
                            onChange={(event, newValue) => {
                                setValueSinuosite(newValue);
                            }}
                        />
                    </div>
                </div>

                <button className='itinerary__button-submit'>Rechercher</button>
            </form>

            <div className='container__card'>
                {filterPlace.length > 0 ? (
                    filterPlace.map((option) => (
                        <Itinerary key={option.itinerary_id}
                                   map={option.pictures[0].pic_link}
                                   title={option.itinerary_title}
                                   description={option.itinerary_description}
                                   id={option.itinerary_id}
                        />
                    ))
                ) : (
                    data.map((item) => (
                        <Itinerary key={item.itinerary_id}
                                   map={item.pictures[0].pic_link}
                                   title={item.itinerary_title}
                                   description={item.itinerary_description}
                                   id={item.itinerary_id}
                        />
                    ))
                )};
            </div>
        </>
    )
}

export default React.memo(InputFilterItinerary)
