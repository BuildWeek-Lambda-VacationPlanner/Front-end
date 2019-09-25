import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import TravelForm from './components/TravelForm'
import VacationCard from './components/VacationCard'
import { Route } from 'react-router-dom';
import axios from 'axios'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header';
import Login from './components/Login/Login';
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
      'https://vacation-planner-bw.herokuapp.com/api/vacations', {headers: {'Authorization' : token }}
    ) .then(res=> {
      setVacations(res.data)
  })
  },[])
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6ImphY29iIiwiaWF0IjoxNTY5MzQ4MjY0LCJleHAiOjE1NjkzNzcwNjR9.OvQIBjLk2XPqGPTDhXNL7dpNhULnrjwcR6YWvQNZt5c'
  // const token = localStorage.getItem('token')
  const userName = "jane"
  // const userName = localStorage.getItem('username')
  const userVacations = vacations.filter(vacation => userName === vacation.username )
  return (
    <div className="App">
      <div>
        <NavBar />
        <Header />
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' render={props => <Dashboard {...props} userName={userName} vacations={userVacations} />}/>
      <Route path='/newtrip' render={props => <TravelForm {...props} setVacations={setVacations} vacations={vacations} />}/>
      <Route path='/edittrip/:id' render={props => <TravelForm {...props} setVacations={setVacations} vacations={vacations} />}/>
      <Route path='/card/:id' render={props => <VacationCard {...props} vacations={userVacations} />}/>
    </div>
  );
}

export default withRouter(App);
 