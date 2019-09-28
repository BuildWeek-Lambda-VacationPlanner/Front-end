import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './nav.css';

const NavBar = () => {
  return(
    <div className="navbar">
      <Link to='/'>
        <StyledButton>Home</StyledButton>
      </Link>
      <Link to='/dashboard'>
        <StyledButton>My Vacations</StyledButton>
      </Link>
    </div>
  );
};

export default NavBar;

const StyledButton = styled.button`
  text-decoration: none;
  font-size: 1rem;
  border-radius: .5rem;
  background: #e77727;
  color: whitesmoke;
`;


