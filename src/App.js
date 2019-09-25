import React from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js'
import TravelForm from './components/TravelForm'
import vacationCard from './components/vacationCard'
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Register from './components/Login/Register';

import './App.css';

function App() {  
  return (
    <div className="App">
      <div>
        <NavBar />
        <Header />
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/newtrip' component={TravelForm}/>
      <Route path='/card' component={vacationCard}/>
    </div>
  );
}

export default withRouter(App);
