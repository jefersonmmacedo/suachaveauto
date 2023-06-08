import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.placafipe.xyz/getplacafipe'
});

export default api;