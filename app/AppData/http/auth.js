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
export const phoneLogin = (data) => api.post('/user/auth/phone-signin', data);
export const emailLogin = (data) => api.post('/user/auth/email-signin', data);
export const intEmailLogin = (data) => api.post('/user/auth/intemail-signin', data);
export const autoLogin = () => api.post('/user/auth/auto-auth');
export const routeProtector = () => api.post('/user/auth/route-protector');
export const updateProfile = (data) => api.post('/user/auth/update-profile', data);

