import React, { useContext } from "react";
import {ProductosContext} from '../context/ProductosContext';
import TarjetaProducto from '../componentes/TarjetaProducto';


export default function Index(){
    const { productos } = useContext(ProductosContext);

    return (
      <div className="container">
        <h2 className="text-center my-4">Productos Mejor Valorados</h2>
        <div className="row">
        {productos
                    .sort((a, b) => b.rating.rate - a.rating.rate) 
                    .slice(0, 9) 
                    .map((producto) => (
                      <div className="col-md-4 mb-4"  key={producto.id}>
                        <TarjetaProducto producto={producto} />
                        </div>
                    ))}
        </div>
      </div>
    );
};
