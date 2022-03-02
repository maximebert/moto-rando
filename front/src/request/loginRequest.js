import axios from "axios";

export async function requestLogin(email, password){
    try{
        const response = await axios.post('http://localhost:3000/profil/connexion', {
            email, password
        });
        return response;
    }catch(err){
        return err.response
    }
}
