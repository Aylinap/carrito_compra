import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  {obtenerProductoPorId} from '../services/apiProductos';
import DetalleProducto from '../componentes/DetalleProducto';

export default function DetalleProductoPage() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
  
    useEffect(() => {
      const cargarProducto = async () => {
        const datos = await obtenerProductoPorId(id);
        setProducto(datos);
      };
      cargarProducto();
    }, [id]);
  
    if (!producto) return <p className='text-center my-5'>Cargando productos...</p>;
  
    return (
          <DetalleProducto producto={producto} />
    )
  };
  
  