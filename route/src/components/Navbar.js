import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div className="navbar" >
         <Link  to="/">Landing</Link>
        <Link to="/one">One</Link>
        <Link to="/two">Two</Link>
    </div>
  );
}

export default Navbar;
