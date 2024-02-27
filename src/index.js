import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home from './components/Home';
import  Products from './components/products/Products';
import  Featured from './components/products/Featured';
import  New from './components/products/New';
import Contact from './components/Contact';
import './index.module.css';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter>
  
    <div className='navbar'>
      <NavLink to="/home" >Home</NavLink>
      <NavLink to="/products" >Products</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
    </div>

    <Routes>
      <Route path="/home" element={ <Home /> }/>
      <Route path="/products" element={ <Products /> } >

          <Route path="featured" element={ <Featured /> }/>
          <Route path="new" element={ <New /> }/>

      </Route>
      <Route path="/contact" element={ <Contact /> }/>
    </Routes>

  </BrowserRouter>  
);

