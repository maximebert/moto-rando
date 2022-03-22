import apiAxios from ".";

/***
 * query with axios to retrieve the lists of itinerary
 * @returns {Promise<AxiosResponse<any>|*>}
 */
export async function getAllList() {
  try {
    const response = await apiAxios.get("/itineraires");
    return response;
  } catch (err) {
    return err.response;
  }
}
