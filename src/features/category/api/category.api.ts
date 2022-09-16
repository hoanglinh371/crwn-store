import apiConfig from 'src/configs/api.config';
import axiosClient from 'src/api/axiosClient';

const categoryAPI = {
  getCategories: () => {
    const url = `${apiConfig.baseURL}/categories`;
    return axiosClient.get(url);
  },

  getCategory: (category: string) => {
    const url = `${apiConfig.baseURL}/categories/${category}`;
    return axiosClient.get(url);
  },
};

export default categoryAPI;
