import axios from 'axios';

const api = axios.create({
  baseURL: 'https://salam-back.onrender.com',
});

// Interceptor para incluir el token en cada solicitud
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtenemos el token del localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agregamos el token al encabezado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response, // Devolver la respuesta si no hay errores
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token inválido o expirado
      console.error('Token inválido o expirado. Por favor, inicia sesión nuevamente.');
      // Opcional: puedes redirigir al usuario a la página de inicio de sesión
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const fetchProducts = (skip, limit) => api.get(`/products/?skip=${skip}&limit=${limit}`);
export const fetchCategories = () => api.get('/categories/');
export const fetchBrands = () => api.get('/marcas/');
export const createProduct = (formData) => api.post('/products/', formData);
export const createCategory = (name) => api.post('/categories/', { name: name });
export const createBrand = (name) => api.post('/marcas/', { name: name });
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const editProduct = (id,formData) => api.put(`/products/${id}`, formData);
