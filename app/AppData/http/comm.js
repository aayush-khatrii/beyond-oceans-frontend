import axios from 'axios';
const local = "http://localhost:3300/devstag/v1/api";
// axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: local,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});


// List of all the endpoints
export const sendPhoneOTP = (data) => api.post('/comm/send/send-phone-otp', data);
export const sendEmailOTP = (data) => api.post('/comm/send/send-email-otp', data);
export const sendIntEmailOTP = (data) => api.post('/comm/send/int-email-otp', data);
