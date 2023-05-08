import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../componentes/Login';
import Home from '../componentes/Home';
//import Menu from '../pages/Menu';

function Rutas() {
  return (  
  <BrowserRouter>
     <Routes>
        <Route path='/' element={<Login />}/>  
        <Route path='/Home' element={<Home />}/>  
    </Routes>
  </BrowserRouter> 
   
  );
}

export default Rutas;