import axios from 'axios';

export const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search?api_key=4h8KYSwikr661pJqNxy3nPq5iRAeHQ4d&q=";

const api = axios.create({
  baseURL: GIPHY_API_URL,
});

export default api;
