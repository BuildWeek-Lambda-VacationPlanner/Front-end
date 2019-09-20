import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import NavBar from './components/HamBar/NavBar';
import Home from './components/Home';

import './App.css';
// import NewUser from './components/NewUser';

function App(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = props.history;

  useEffect(() => {
    return props.history.listen(() => {
      setIsMenuOpen(false);
    });
  });

  return (
    <div className="App">
      <div className='navbar-ham'>
        <NavBar 
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => 
            setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <div className='home-section'>
        <Home />
      </div>
      {/* TODO: Add routes that will work to each page */}
      {/* <Route exact path='/' render={() => <Home />} />
      <Route path='/newuser/' render={() => <NewUser />} /> */}
    </div>
  );
}

export default withRouter(App);
