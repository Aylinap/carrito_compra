import React, { useState } from 'react';

export const CarritoContext = React.createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const carritoNuevo = [...carritoActual];
      const existe = carritoNuevo.find((item) => item.id === producto.id);

      if (existe) {
        const carritoActualizado = carritoNuevo.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        return carritoActualizado;
      } else {
        return [...carritoNuevo, { ...producto, cantidad: 1 }];
      }
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito((carritoActual) => {
      const carritoNuevo = carritoActual
        .map((item) => {
          if (item.id === id) {
            item.cantidad--;
          }
          return item;
        })
        .filter((item) => item.cantidad > 0); 

      return carritoNuevo;
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
