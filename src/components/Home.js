import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Sunset from '../Img/similar-color-scheme.jpg';

const Home = () => {
  return(
    <div>
      <StyledImg src={ Sunset } className="sunset" alt="sunset vacation" />
      <h1>Vacation Planner</h1>
        <p>"When vacation planning sucks...."</p>
        <p>"Spend less time and effort to plan that vacation you've been dreaming about!"</p>
        <button>Log In</button>
        <Link>Create User</Link>
    </div>
  );
};

export default Home;

const StyledImg = styled.img`
  width: 40%;
  height: 320px;
`;