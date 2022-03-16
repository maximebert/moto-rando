
import apiAxios from ".";

export async function requestLogin(email, password) {
    try {
        const response = await apiAxios.post('/profil/connexion', {
            email, password
        })
        return response;
    } catch (err) {
        return err.response
    }
}
