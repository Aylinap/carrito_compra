import React, { useContext } from 'react';
import { ProductosContext } from '../context/ProductosContext';
import ListaProductos from '../componentes/ListaProductos';

export default function Productos(){
    const { productos, error } = useContext(ProductosContext);
    if(error) return <p className='text-center'>{error}</p>
    return (
        <div className="container mt-4">
      <h2>Lista de Productos</h2>
      <ListaProductos productos={productos} />
    </div>
    );
  };
  