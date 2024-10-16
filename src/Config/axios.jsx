import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // Base URL for your API
    headers: {
      'Content-Type': 'application/json',
    },
});

export default instance;