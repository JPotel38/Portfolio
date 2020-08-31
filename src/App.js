import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'
  
import Home from './screens/Home'
import Education from './screens/Education'
import Pro from './screens/Pro'
import Perso from './screens/Perso'
import Projets from './screens/Projets'
import GameZone from './screens/GameZone'
import Masques from './screens/Masques'
import Morningnews from './screens/Morningnews'
import Ticketac from './screens/Ticketac'
import Blackboard from './screens/Blackboard'
import Mymoviz from './screens/Mymoviz'
import Weatherapp from './screens/Weatherapp'
import Bikeshop from './screens/Bikeshop'
import Pendu from './screens/Pendu'
import NotFound from './screens/NotFound'


export default function App() {
  return (

      <Router>
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/education" component={Education} />
          <Route path="/pro" component={Pro} />
          <Route path="/perso" component={Perso} />
          <Route path="/projets" component={Projets}  />
          <Route path="/game" component={GameZone}  />
          <Route path="/masques" component={Masques}  />
          <Route path="/morningnews" component={Morningnews}  />
          <Route path="/ticketac" component={Ticketac}  />
          <Route path="/blackboard" component={Blackboard}  />
          <Route path="/mymoviz" component={Mymoviz}  />
          <Route path="/weatherapp" component={Weatherapp}  />
          <Route path="/bikeshop" component={Bikeshop}  />
          <Route path="/pendu" component={Pendu}  />
          <Route component={NotFound}/>
        </Switch>
      </Router>
  );
}
