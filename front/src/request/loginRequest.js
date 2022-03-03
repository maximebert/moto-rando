import axios from "axios";

export async function requestLogin(){
    try{
        const response = await axios.post('http://localhost:3000/profil/connexion')
        return response;
    }catch(err){
        return err.response
    }
}
