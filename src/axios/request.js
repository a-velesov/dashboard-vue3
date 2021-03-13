import axios from 'axios';
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
