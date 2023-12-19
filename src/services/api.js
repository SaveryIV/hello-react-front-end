import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/random_greeting',
});

export default api;
