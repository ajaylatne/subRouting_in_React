import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
      <div style={{marginTop: "20px"}}>
        <h3>Products Page</h3>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
        
      </div>
      <Outlet />
    </>
    
  )
}

export default Products

