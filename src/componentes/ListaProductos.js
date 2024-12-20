import React, { useState } from 'react';
import TarjetaProducto from './TarjetaProducto';

const ListaProductos = ({ productos }) => {
  const[buscar, setBuscar]=useState('');

  const productosFiltrados = productos.filter(producto=> producto.title.toLowerCase().includes(buscar.toLowerCase())
  );
  if (!productos.length) return <p>No hay productos</p>;
  console.log(productos);
  
  return (
    <div className='row mt-4'>
      <form class="form-inline my-4 my-lg-0 justify-content-center mb-4" onSubmit={(e)=>e.preventDefault()}>
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar productos..." aria-label="Buscar" value={buscar} onChange={(e)=> setBuscar(e.target.value)} style={{width: '300px'}}/>
      </form>
      <div className="row mt-4">
        {productosFiltrados.length>0?
        (productosFiltrados.map((producto) => (
          <div key={producto.id} className="col-md-4">
            {/* la lista de productos llama a TarjetaProducto para printear */}
            <TarjetaProducto producto={producto} />
          </div>
        ))
      ) : (
        <p className='text-center w-100'>No se encontraron productos</p>
      )
    }
      </div>
    </div>
  );
};

export default ListaProductos;
