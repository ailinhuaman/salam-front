import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const fetchProducts = (skip, limit) => api.get(`/products/?skip=${skip}&limit=${limit}`);
export const fetchCategories = () => api.get('/categories/');
export const fetchBrands = () => api.get('/marcas/');
export const createProduct = (formData) => api.post('/products/', formData);
export const createCategory = (name) => api.post('/categories/', { name:name });
export const createBrand = (name) => api.post('/marcas/', { name:name });

export const deleteProduct = (id) => api.delete(`/products/${id}`);
