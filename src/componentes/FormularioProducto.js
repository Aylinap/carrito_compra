import React, { useEffect, useState } from 'react';
import { obtenerCategorias } from '../services/apiProductos';

const FormularioProducto = ({ onSubmit }) => {
  const [nuevoProducto, setNuevoProducto] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });


  const [errores, setErrores]=useState({
    title: '',
    price: '',
    description:'',
    image: '',
    category:''
  });
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
    setErrores({...errores, [name]: ''});
  };

  const validarFormulario=()=>{
    const erroresFormulario ={};
    if(!nuevoProducto.title.trim()){
      erroresFormulario.title = 'El titulo es obligatorio, no puede estar vacío'; 
    }
    if(!nuevoProducto.price || nuevoProducto.price<=0){
      erroresFormulario.price ='El precio tiene que ser mayor a 0'
    }if(!nuevoProducto.description.trim()){
      erroresFormulario.description='La descripción es obligatoria, no puede estar vacía';
    }if(!nuevoProducto.image.trim()){
      erroresFormulario.image='La imagen es obligatorio, no puede estar vacía';
    }if(!nuevoProducto.category.trim()){
      erroresFormulario.category='Selecciona una categoría'
    }return erroresFormulario;
  }



  const manejarEnvio = (e) => {
    e.preventDefault();
    const erroresFormulario = validarFormulario();
    if(Object.keys(erroresFormulario).length>0){
      setErrores(erroresFormulario);
    }else{
      onSubmit(nuevoProducto);
      setNuevoProducto({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
      });
    setErrores({});
    }
  };

  const [categorias, setCategorias]=useState([]);
   
  useEffect(()=>{
    const fetchCategorias=async()=>{
      const info = await obtenerCategorias();
      setCategorias(info);
      
    };
    fetchCategorias();

  });

  const diccionarioCategoria={
    electronics: 'Electrónica',
    jewelery: 'Joyería',
    'men\'s clothing': 'Ropa de Hombre',
    'women\'s clothing': 'Ropa de Mujer',
  };

  const traducirCategoria = (categoria) => {
    return diccionarioCategoria[categoria] || categoria; 
  };


  return (
    <div className='container mt-4'>
    <form onSubmit={manejarEnvio} className="mx-auto" style={{maxWidth: '60%'}}>
      <h3>Añadir Nuevo Producto</h3>
      <div className="mb-3">
        <label>Título</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={nuevoProducto.title}
          onChange={manejarCambio}
        />
        {errores.title&& <div className='text-danger'>{errores.title}</div>}
      </div>
      <div className="mb-3">
        <label>Precio</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={nuevoProducto.price}
          onChange={manejarCambio}
        />
        {errores.price&& <div className='text-danger'>{errores.price}</div>}
      </div>
      <div className="mb-3">
        <label>Descripción</label>
        <textarea
          name="description"
          className="form-control"
          value={nuevoProducto.description}
          onChange={manejarCambio}
        />
        {errores.description&& <div className='text-danger'>{errores.description}</div>}
      </div>
      <div className="mb-3">
        <label>Imagen (URL)</label>
        <input
          type="text"
          name="image"
          className="form-control"
          value={nuevoProducto.image}
          onChange={manejarCambio}
        />
        {errores.image&& <div className='text-danger'>{errores.image}</div>}
      </div>
      <div className="mb-3">
        <label>Categoría</label>
        <select
          type="text"
          name="category"
          className="form-control"
          value={nuevoProducto.category}
          onChange={manejarCambio}
        >
           <option value="">Selecciona una categoría</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {traducirCategoria(categoria)}
              </option>
            ))}
          </select>
          {errores.category && <div className='text-danger'>{errores.category}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Añadir Producto</button>
    </form>
    </div>
  );
};

export default FormularioProducto;
