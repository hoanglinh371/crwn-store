import axios from 'axios';
import queryString from 'query-string';
import apiConfig from '../configs/api.config';

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

export default axiosClient;
