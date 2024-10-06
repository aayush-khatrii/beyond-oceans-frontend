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
    },
});


// List of all the endpoints
export const initiatPackagePayment = (data) => api.post('/checkout/initate-package-payment', data);
export const initiatActivityPayment = (data) => api.post('/checkout/initate-activity-payment', data);
export const initiatFerryPayment = (data) => api.post('/checkout/initate-ferry-payment', data);