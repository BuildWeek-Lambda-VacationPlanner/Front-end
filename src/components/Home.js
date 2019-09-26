import React from 'react';
import Login from './Login/Login';

import styled from 'styled-components';

import Sunset from '../Img/similar-color-scheme.jpg';

const Home = () => {
  return(
    <div>
      <StyledImg src={ Sunset } className="sunset" alt="sunset vacation" />
        <p>"When vacation planning sucks....</p>
        <p>Spend less time and effort planning that vacation you've been dreaming about!"</p>
        <br />
        <Login />
    </div>
  );
};

export default Home;

const StyledImg = styled.img`
  width: 40%;
  height: 320px;
`;