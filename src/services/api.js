import axios from 'axios';

const api = axios.create({
    baseURL: "https://trendsapi.herokuapp.com/",
});

export default api;