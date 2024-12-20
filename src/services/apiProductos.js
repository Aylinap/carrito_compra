import axios from 'axios';

const api_url = 'https://fakestoreapi.com/products';

export const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(api_url);
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
};

export const obtenerProductoPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${api_url}/${id}`);
    return respuesta.data;
  } catch (error) {
    console.error(`Error al obtener el producto ${id}:`, error);
    return null;
  }
};

export const agregarProductoAPI = async (producto) => {
  try {
    const respuesta = await axios.post(api_url, producto);
    return respuesta.data;
  } catch (error) {
    console.error('Error al añadir producto:', error);
    return null;
  }

};

export const obtenerCategorias = async () =>{
  try{
    const respuesta = await axios.get(api_url + '/categories');
    return respuesta.data;
  }catch(error){
    console.error('error al obtener las categorias', error);
    return null;
  }
}
