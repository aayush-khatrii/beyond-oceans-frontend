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
export const storePackageCheckout = (data) => api.post('/user/session/store-package', data);
export const storeActivityCheckout = (data) => api.post('/user/session/store-activity', data);
export const getPackageCheckout = () => api.post('/user/session/get-package-checkout');
export const getActivityCheckout = () => api.post('/user/session/get-activity-checkout');
export const storeMakFerryCheckout = (data) => api.post('/user/session/store-mak-checkout', data);
export const getFerryCheckout = () => api.post('/user/session/get-ferry-checkout');
export const testApi = (data) => api.post('/test/test', data);
