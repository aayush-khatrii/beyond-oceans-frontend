import axios from 'axios';

const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: false,
    mode: 'no-cors'
});


// List of all the endpoints
export const getMdx = (url) => api.get(url);


