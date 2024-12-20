import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ProductosProvider} from './context/ProductosContext';
import {CarritoProvider} from './context/CarritoContext';
import Header from './componentes/header';
import Index from './pages/Index';
import Productos from './pages/Productos';
import AgregarProducto from './pages/AgregarProducto';
import Footer from './componentes/Footer';

import './App.css';
import DetalleProductoPage from './pages/DetalleProducto';
import CarritoPage from './pages/Carrito';

function App() {
  return (
    <ProductosProvider>
    <CarritoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProductoPage />} />
          <Route path="/productos/add" element={<AgregarProducto />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
        <Footer/>
      </Router>
    </CarritoProvider>
  </ProductosProvider>
  );
}

export default App;
