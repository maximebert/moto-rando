import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup, MenuItem, Rating, TextField, Typography} from "@mui/material";
import './inputFilterItinerary.scss';
import {FaRoad} from "react-icons/fa";

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

const InputFilterItinerary = () => {
    const [kilometer, setKilometer] = useState('50 - 150');
    const [valueSinuosite, setValueSinuosite] = useState(3);

    const handleChangeKilometer = (event) => {
        setKilometer(event.target.value);
    }
    return (
        <>
            <h2 className='itinerary__title'>Recherche D'itinéraires</h2>
            <form className='itinerary__form'>
                <div className='itinerary__form-input'>
                    <TextField className='input' id="place" label="Lieu" />

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

                <button className='itinerary__button-submit'>
                    Rechercher
                </button>
            </form>
        </>
    )
}

export default React.memo(InputFilterItinerary)
