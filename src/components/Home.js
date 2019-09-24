import React from 'react';
import styled from 'styled-components';

import Login from './Login/Login';
import Header from './Header';

import Sunset from '../Img/similar-color-scheme.jpg';

const Home = () => {
  return(
    <div>
      <Header />
      <StyledImg src={ Sunset } className="sunset" alt="sunset vacation" />
        <p>"When vacation planning sucks....</p>
        <p>Spend less time and effort planning that vacation you've been dreaming about!"</p>
        {/* TODO: Link on Login to vacation dashboard page */}
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