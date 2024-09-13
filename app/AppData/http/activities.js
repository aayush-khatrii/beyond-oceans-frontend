import axios from 'axios';
import { API_ENV } from './provider.js'
const local = "http://localhost:3300/devstag/v1/api";
const aws = "https://rrucc6gtnvp7ldakroqqedhcae0hguqh.lambda-url.ap-south-1.on.aws/devstag/v1/api";


const api = axios.create({
    baseURL: API_ENV === "PROD" ? aws : local,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        referer: 'https://www.beyondoceans.in/'
    },
});


// List of all the endpoints
export const getAllActivities = () => api.post('/service/activities/get-all');
export const getFilterActivities = (data) => api.get(`/service/activities/get-filter/${data.category}`);
export const getSingleActivity = (data) => api.post('/service/activities/get-single', data);


