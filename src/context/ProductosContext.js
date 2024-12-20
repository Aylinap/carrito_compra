import React, { createContext, useState, useEffect } from 'react';
import { obtenerProductos } from '../services/apiProductos';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try{
      const datos = await obtenerProductos();
      setProductos(datos);
    } catch(error){
      setError('Error al cargar los productos');
    }finally{
      setLoading(false);
    }
  }; 
    cargarProductos();
    
  }, []);

  return (
    <ProductosContext.Provider value={{ productos, setProductos, loading, error }}>
      {children}
    </ProductosContext.Provider>
  );
};
