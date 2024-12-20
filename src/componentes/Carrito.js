import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

export default function Carrito() {
  const { carrito, quitarDelCarrito, agregarAlCarrito } = useContext(CarritoContext);

  let total = 0;
  carrito.forEach((producto) => {
    total += producto.price * producto.cantidad;
    
  });

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Carrito</h5>
              </div>
              <div className="card-body">
                {carrito.length === 0 ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  carrito.map((item) => (
                    <div key={item.id} className="row mb-4 p-3 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src={item.image} className="w-100" alt={item.title} />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{item.title}</strong></p>
                        <p>Color: {item.color}</p>
                        <p>Tamaño: {item.size}</p>
                        <div className="d-flex mb-2">
                          <button
                            className="btn btn-success btn-sm me-1"
                            onClick={() => agregarAlCarrito(item)}
                          >
                            <i className="fas fa-plus"></i>Añadir
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => quitarDelCarrito(item.id)}
                          >
                            <i className="fas fa-minus"></i>Quitar
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <p className="text-start text-md-center">
                          <strong>${(item.price * item.cantidad).toFixed(2)}</strong>
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Resumen</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Productos
                    <span>${total.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Envío
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total</strong>
                      <p className="mb-0">(incluyendo IVA)</p>
                    </div>
                    <span><strong>${total.toFixed(2)}</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Ir a pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
