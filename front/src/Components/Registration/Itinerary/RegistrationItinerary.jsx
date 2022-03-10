
import React, { useState } from 'react';
import axios from '../../../api/axios';
import './itineraryForm.scss';

const ADD_ITINERARY = '/itineraires';

const RegistrationItinerary = () => {
    const [title, setTitle] = useState("");
    const [curve, setCurve] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [kilometer, setKilometer] = useState();
    const [highway, setHighway] = useState(false);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [map, setMap] = useState(null);
    // const handleOnSubmit =(event)=>{
    //     event.preventDefault()
    // }


    const send = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('map', map);
        data.append('photo', file)

        try {
            const response = await axios.post(ADD_ITINERARY, data, {headers: { "Content-Type": "multipart/form-data" }} );
            console.log(response.data);

            // console.log(response.accessToken);

            console.log(JSON.stringify(response.data))

            // clear
            setTitle('');
            setCurve()
            setHours();
            setMinutes();
            setKilometer();
            setHighway(false);
            setDescription('');
            setFile(null);
            setMap(null);
        } catch (err) {
           console.log(err);
        }
    }

    return (
        <div className='form'>
            <h2>Créer un itineraire</h2>
            <form action="/itineraires/:id" encType="multipart/form-data" className='itinerary-form' onSubmit={send}>
                <label for="title">Titre de l'itinéraire</label>
                <input id="title" type="text" placeholder="Titre de l'itinéraire" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                {/* <label for="map">Votre itinéraire</label>
                <input type="file" id="map"  onChange={event => {
                    const file = event.target.files[0];
                    setMap(file)
                }}  /> */}

                <label for="root">Sinuosité de la route</label>
                <input id="root" type="number" min="1" max="5" placeholder='Type de route' value={curve} onChange={(e)=>setCurve(e.target.value)} />

                <label for="duration">Durée de l'itinéraire</label>
                <input id="hours" placeholder='Heures' type="number" value={hours} onChange={(e)=>setHours(e.target.value)} />
                <input id="minutes" placeholder='Minutes' type="number" value={minutes} onChange={(e)=>setMinutes(e.target.value)} />

                <label for="km">Nombre de kilomètres</label>
                <input id="km" type="number" min="1" value={kilometer} onChange={(e)=>setKilometer(e.target.value)}/>


                <label for="highway">Trajet avec autoroute</label>
                <input type="checkbox" id="highway" value={highway} onChange={(e)=>setHighway(e.target.value)}/>

                <label for="description">Description de votre itinéraire (point de vue, endroit friendly motard,...)</label>
                <textarea id="description" type="text" value={description} placeholder="Description de l'itinéraire "onChange={(e)=>setDescription(e.target.value)}/>

                <label for="photo">Vos plus belles photos</label>
                <input type="file" id="photo" accept='.jpg' name="file" onChange={event => {
                    const file = event.target.files[0];
                    setFile(file)
                }} />

                <button className='form__btn-submit'>Valider l'itinéraire</button>

            </form>
        </div>
    )
}

export default React.memo(RegistrationItinerary)
