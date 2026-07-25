import axios from "axios";

const api = axios.create({
    baseURL: 'https://69f2ff5eb15130b973536e99.mockapi.io/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});


export default api;