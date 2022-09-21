import axiosClient from 'src/api/axiosClient';
import apiConfig from 'src/configs/api.config';

const productAPI = {
  getProducts: (page?: number) => {
    const url = `${apiConfig.baseURL}/products`;
    return axiosClient.get(url, { params: { page: page } });
  },

  getProductsByCategory: (category: string) => {
    const url = `${apiConfig.baseURL}/products/${category}`;
    return axiosClient.get(url);
  },
};

export default productAPI;
