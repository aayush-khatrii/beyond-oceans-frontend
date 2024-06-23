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
export const phoneLogin = (data) => api.post('/user/auth/phone-signin', data);
export const emailLogin = (data) => api.post('/user/auth/email-signin', data);
export const intEmailLogin = (data) => api.post('/user/auth/intemail-signin', data);
export const autoLogin = (data) => api.post('/user/auth/auto-auth', data);
export const updateProfile = (data) => api.post('/user/auth/update-profile', data);

