import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar">
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/dashboard'>
        <button>My Vacations</button>
      </Link>
    </div>
  );
};

export default NavBar;


