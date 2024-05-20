import axios from "axios";

const instance = axios.create({
    baseURL: 'https://valorant-api.com/v1'
});

export default instance;