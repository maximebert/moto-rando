import React, { useState } from 'react';
import './itineraryForm.scss';

const RegistrationItinerary = ()=>{
    const [title, setTitle]=useState("");
    const [root, setRoot]= useState();
    const [duration, setDuration]= useState();
    const [km, setKm]=useState();
    const [highway, setHighway]=useState(false);
    const [description, setDescription]=useState("");

    const handleOnSubmit =(event)=>{
        event.preventDefault()
    }


    return (
        <div className='form'>
            <h2>Créer un itineraire</h2>
            <form className='itinerary-form'>
                <label for="title">Titre de l'itinéraire</label>
                <input id="title" type="text" placeholder="Titre de l'itinéraire" onChange={(e)=>setTitle(e.target.value)}/>

                <label for="map">Votre itinéraire</label>
                <input type="file" id="map" />

                <label for="root">Sinuosité de la route</label>
                <input id="root" type="number" min="1" max="5" placeholder='Type de route'onChange={(e)=>setRoot(e.target.value)} />

                <label for="duration">Durée de l'itinéraire</label>
                <input id="duration" type="number" onChange={(e)=>setDuration(e.target.value)} />

                <label for="km">Nombre de kilomètres</label>
                <input id="km" type="number" min="1" onChange={(e)=>setKm(e.target.value)}/>


                <label for="highway">Trajet avec autoroute</label>
                <input type="checkbox" id="highway" value="autoroute" onChange={(e)=>setHighway(e.target.value)}/>

                <label for="description">Description de votre itinéraire (point de vue, endroit friendly motard,...)</label>
                <textarea id="description" type="text" placeholder="Description de l'itinéraire "onChange={(e)=>setDescription(e.target.value)}/>

                <label for="photo">Vos plus belles photos</label>
                <input type="file" id="photo" />
                <input type="file" id="photo" />
                <input type="file" id="photo" />

                <button className='form__btn-submit' onClick={handleOnSubmit} disabled={title === ""} >Valider l'itinéraire</button>

            </form>
        </div>
    )
}

export default React.memo(RegistrationItinerary)
