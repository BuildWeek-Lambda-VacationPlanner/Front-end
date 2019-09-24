import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js'
import TravelForm from './components/TravelForm'
import vacationCard from './components/vacationCard'
import { Route } from 'react-router-dom';
import axios from 'axios'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Register from './components/Login/Register';

import './App.css';

// TODO: HamNav working/functioning
function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const history = props.history;

  // useEffect(() => {
  //   return props.history.listen(() => {
  //     setIsMenuOpen(false);
  //   });
  // });

  const [vacations, setVacations] = useState([])

  useEffect(()=>{
    axios.get(
      'https://vacation-planner-bw.herokuapp.com/api/vacations', {headers: {'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6ImphY29iIiwiaWF0IjoxNTY5MzQ4MjY0LCJleHAiOjE1NjkzNzcwNjR9.OvQIBjLk2XPqGPTDhXNL7dpNhULnrjwcR6YWvQNZt5c' }}
    ) .then(res=> {
      setVacations(res.data)
  })
  },[])
  return (
    <div className="App">
      <div className='header'>
        <NavBar 
          // isMenuOpen={isMenuOpen}
          // onToggleMenu={() => 
          //   setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' render={props => <Dashboard {...props} vacations={vacations} />}/>
      <Route path='/newtrip' component={TravelForm}/>
      <Route path='/card/:id' render={vacationCard}/>
    </div>
  );
}

export default withRouter(App);
