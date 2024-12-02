import axios from 'axios';

/**
 * Función reutilizable para realizar peticiones a una API usando axios.
 * 
 * @param {string} url - La URL de la API.
 * @param {string} method - El método HTTP (GET, POST, PUT, DELETE).
 * @param {Object} [params={}] - Parámetros de consulta (query params).
 * @param {Object} [data={}] - Datos del cuerpo de la solicitud.
 * @param {Object} [headers={}] - Encabezados personalizados para la solicitud.
 * @returns {Promise<Object>} - Promesa que resuelve los datos de la respuesta o lanza un error.
 */
const apiRequest = async (url, method, params = {}, data = {}, headers = {}) => {
  try {
    const response = await axios({
      url,
      method,
      params,
      data,
      headers,
    });
    return response.data; // Retorna los datos de la respuesta
  } catch (error) {
    console.error('Error en la petición:', error.message);
    // Manejo de errores según el caso
    throw error.response ? error.response.data : error;
  }
};

export default apiRequest;
