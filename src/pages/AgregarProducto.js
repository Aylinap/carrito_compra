import React from 'react';
import FormularioProducto from '../componentes/FormularioProducto';
import { agregarProductoAPI } from '../services/apiProductos';

export default function AgregarProducto() {
  const manejarEnvio = async (producto) => {
    const nuevoProducto = await agregarProductoAPI(producto);
    if (nuevoProducto) {
      alert('Producto añadido correctamente');
    } else {
      alert('Producto no añadido, intenta de nuevo');
    }
  };
  
  return (
    <div>
      <FormularioProducto onSubmit={manejarEnvio} />
    </div>
  );
};


