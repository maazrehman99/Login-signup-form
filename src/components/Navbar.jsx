import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
      <ul className="nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        
        
      </ul>
    </>
  );
}

export default Navbar