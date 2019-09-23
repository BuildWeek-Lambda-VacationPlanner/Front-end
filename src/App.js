import React from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js'
import TravelForm from './components/TravelForm'
import vacationCard from './components/vacationCard'
import { Route } from 'react-router-dom';

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
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/newtrip' component={TravelForm}/>
      <Route path='/dashboard/card' component={vacationCard}/>
    </div>
  );
}

export default withRouter(App);
