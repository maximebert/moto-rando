import axios from "axios";

/***
 * query with axios to retrieve the lists of itinerary
 * @returns {Promise<AxiosResponse<any>|*>}
 */
export async function getAllList() {
    try{
        const response = await axios.get('http://localhost:3000/itineraires')
        return response
    }catch(err){
        return err.response
    }
}
