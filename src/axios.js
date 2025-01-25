import axios from "axios";
import { BASE_URL } from "./constants";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/buy-and-go-efb48/us-central1/api' // The API (cloud function) URL
});

export default instance;
const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  
  export const callAPI = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
  };