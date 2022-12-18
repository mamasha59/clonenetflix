import axios from 'axios';

const URL = "https://api.themoviedb.org/3"; // movied database api

export const reqApiUrl = "http://localhost:3001"; // api backend

const instance = axios.create({
    baseURL: URL,
});

export default instance;