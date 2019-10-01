import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js'
import TravelForm from './components/TravelForm'
import VacationCard from './components/VacationCard'
import { Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import Header from './components/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Register from './components/Login/Register';

import './App.css';

function App() {
  const App = styled.div`
    text-align: center;
    background: transparent;
    width: 850px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 2px;
    padding: 18px;
    margin: 0 auto;
    box-shadow: 0 3px 6px #ececff, 0 3px 6px #944875;
  `
  const [vacations, setVacations] = useState([])
  useEffect((token)=>{
    axios.get('https://vacation-planner-bw.herokuapp.com/api/vacations', {headers: {'Authorization' : token }})
      .then(res=> {
        setVacations(res.data)
      })
      .catch(err=> {
        console.log(err)
      })
  },[vacations.index])


  console.log(vacations.length)
  const userName = 'null'

  const userId = Number(localStorage.getItem('id'))
  console.log(userId)


  // console.log(userName)
  const userVacations = vacations.filter(vacation => userId === vacation.user_id )
  console.log(userVacations)
 
  return (
    <App>
      <div>
        <Header />
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' render={props => <Dashboard {...props}  userName={userName} vacations={userVacations} />}/>
      <Route path='/newtrip' render={props => <TravelForm {...props} setVacations={setVacations} vacations={vacations} />}/>
      <Route path='/card/:id' render={props => <VacationCard {...props}  vacations={vacations} />}/>
    </App>
  );
}

export default withRouter(App);
 