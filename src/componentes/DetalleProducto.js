import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';


const DetalleProducto = ({ producto }) => {
  const { agregarAlCarrito, quitarDelCarrito, carrito} = useContext(CarritoContext);

  if (!producto) return <p className='text-center my-5'>Cargando producto...</p>;

  const productoEnCarrito = carrito.some(item => item.id === producto.id);

  return (
    <div className='d-flex justify-content-center align-items-center my-5'>
      <div className="card" style={{ width: '40rem' }}>
        <img src={producto.image} alt={producto.title} style={{ width: '300px' }} className='card-img-top mx-auto mt-3' />
        <div className='card-body text-center' >
          <h2 className='card-title mb-3'>{producto.title}</h2>
          <p className='card-text'>{producto.description}</p>
          <p><strong>Precio:</strong> ${producto.price}</p>
          <p><strong>Categoría:</strong> {producto.category}</p>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button 
            onClick={() => agregarAlCarrito(producto)} 
            className="btn btn-success">
            Añadir al carrito
          </button>
          <button 
            onClick={() => quitarDelCarrito(producto.id)} 
            className="btn btn-danger" disabled={!productoEnCarrito}>
            Eliminar del carrito
          </button>
          <Link to={`/productos`} className="btn btn-secondary">
            Volver a Productos
          </Link>
        </div>


      </div>
    </div>
  );
};

export default DetalleProducto;
