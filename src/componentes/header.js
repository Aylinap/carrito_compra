import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const cantidadProductos = carrito.reduce((totalitem, producto) => totalitem + producto.cantidad, 0);

  return (
    <header>
      <div className="d-flex align-items-center justify-content-center my-0" style={{background: '#ffa500', padding: '20px'}}>
        <img
          src="/file.png"
          alt="Logo"
          style={{ width: '80px', marginRight: '10px' }}
        />
        <h1 className="text-center my-4">Tienda Inglesa</h1>
      </div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ef6c00'}}>
        <div className="container-fluid">
        <img
          src="/file.png"
          alt="Logo"
          style={{ width: '60px' }}
        />
          <Link className="navbar-brand" to="/">Tiendita Inglesa</Link>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos/add">Añadir Producto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  Carrito ({cantidadProductos})
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>
    </header>
  );

}; export default Header;