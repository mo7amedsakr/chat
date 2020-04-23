import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://still-peak-06691.herokuapp.com',
  baseURL: 'http://127.0.0.1:4000/api/v1',
  withCredentials: true,
});

export default instance;
