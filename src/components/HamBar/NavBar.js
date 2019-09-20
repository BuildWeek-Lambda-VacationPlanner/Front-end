import React from 'react';

import { StyledBurger } from './Burger';

const NavBar = () => {
  return(
    <div>
      <StyledBurger>
        <div>
          <button>Home Page</button>
          <button>Vacations</button>
          <button>Message</button>
        </div>
      </StyledBurger>
    </div>
  );
};

export default NavBar;
