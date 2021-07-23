import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://zemoga-e4ddc-default-rtdb.firebaseio.com',
});

export default instance;
