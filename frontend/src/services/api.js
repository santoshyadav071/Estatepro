// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://estatepro-1.onrender.com/api' });

export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);
