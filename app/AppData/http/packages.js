import axios from 'axios';
const local = "http://localhost:3300/devstag/v1/api";
const aws = "https://gyc8effc56.execute-api.ap-south-1.amazonaws.com/devstag/v1/api";


const api = axios.create({
    baseURL: aws,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});


// List of all the endpoints
export const getAllPackages = () => api.post('/service/package/get-all');
export const getSinglePackage = (data) => api.post('/service/package/get-single', data);


