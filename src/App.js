import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.js'
import TravelForm from './components/TravelForm'
import vacationCard from './components/vacationCard'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/newtrip' component={TravelForm}/>
      <Route path='/dashboard/card' component={vacationCard}/>
    </div>
  );
}

export default App;
