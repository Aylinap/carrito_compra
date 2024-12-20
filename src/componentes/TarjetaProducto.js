import React from 'react';
import { Link } from 'react-router-dom';

const TarjetaProducto = ({ producto }) => {
  //const { agregarAlCarrito, quitarDelCarrito } = useContext(CarritoContext);

  return (
    <div>
      <div className="card m-3 d-flex flex-column" style={{ width: '18rem', height: 'auto' }}>
        <img src={producto.image} className="card-img-top" alt={producto.title} style={{height: '16rem'}}/>
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">${producto.price}</p>
          <Link to={`/productos/${producto.id}`} className="btn btn-primary">Ver más</Link>
        </div>
      </div>

    </div>
  );
};

export default TarjetaProducto;
