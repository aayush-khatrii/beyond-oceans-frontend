import axios from 'axios';
const local = "http://localhost:3300/devstag/v1/api";

const api = axios.create({
    baseURL: local,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});


// List of all the endpoints
export const fetchAllFerry = (data) => api.post('/service/ferry/search-all', data);
export const fetchSingleFerryMak = (data) => api.post('/service/ferry/search-single-mak', data);

