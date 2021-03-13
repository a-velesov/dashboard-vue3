import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// Add a response interceptor
requestAxios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    router.push('/auth?message=auth');
  }
  return Promise.reject(error);
});

export default requestAxios;
