import axios from 'axios';
const local = "http://localhost:3300/devstag/v1/api";
const aws = "https://rrucc6gtnvp7ldakroqqedhcae0hguqh.lambda-url.ap-south-1.on.aws/devstag/v1/api";


const api = axios.create({
    baseURL: aws,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        referer: 'https://www.beyondoceans.in/'
    },
});


// List of all the endpoints
export const getAllPackages = () => api.post('/service/package/get-all');
export const getFilterPackages = (data) => api.get(`/service/package/get-filter/${data.category}`);
export const getSinglePackage = (data) => api.post('/service/package/get-single', data);
export const getHotelsData = (data) => api.post('/service/package/get-hotels', data);


