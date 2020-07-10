import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './screens/Home'
import Education from './screens/Education'
import Pro from './screens/Pro'
import Perso from './screens/Perso'
import Projets from './screens/Projets'
import Masques from './screens/Masques'
import Morningnews from './screens/Morningnews'
import Ticketac from './screens/Ticketac'
import Blackboard from './screens/Blackboard'
import Mymoviz from './screens/Mymoviz'
import Weatherapp from './screens/Weatherapp'
import Bikeshop from './screens/Bikeshop'

function App() {
  return (

      <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Education} path="/education"/>
          <Route component={Pro} path="/pro"/>
          <Route component={Perso} path="/perso"/>
          <Route component={Projets} path="/projets" />
          <Route component={Masques} path="/masques" />
          <Route component={Morningnews} path="/morningnews" />
          <Route component={Ticketac} path="/ticketac" />
          <Route component={Blackboard} path="/blackboard" />
          <Route component={Mymoviz} path="/mymoviz" />
          <Route component={Weatherapp} path="/weatherapp" />
          <Route component={Bikeshop} path="/bikeshop" />
        </Switch>
      </Router>
  );
}

export default App;
