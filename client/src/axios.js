import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://desolate-shelf-39948.herokuapp.com/api/v1',
  // baseURL: 'http://127.0.0.1:4000/api/v1',
  withCredentials: true,
});

export default instance;
