import React from 'react';
import logo from './logo.ico';



const Navbar = (props) =>{
  return (
    <nav className="navbar navbar-light">
      <img src={logo} width='30px' height='30px' alt='logo'/>
      <span className="font-weight-bold navbar-brand mx-auto">Weather It Rains Today</span>
    </nav>
  )
}
export default Navbar;


