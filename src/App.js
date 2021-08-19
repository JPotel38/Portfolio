import React from 'react';
import './App.css';
import {Col, Collapse, Layout, Row, Typography} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Nav from "./components/Nav";
import Education from "./components/Education";
import Pro from "./components/Pro";
import Perso from "./components/Perso";
import Masques from "./components/Masques";
import Morningnews from "./components/Morningnews";
import Ticketac from "./components/Ticketac";
import Blackboard from "./components/Blackboard";
import Mymoviz from "./components/Mymoviz";
import Weatherapp from "./components/Weatherapp";
import Bikeshop from "./components/Bikeshop";
import NotFound from "./components/NotFound";
import Projets from "./components/Projets";

export default function App() {

    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/Portfolio" exact component={Home}/>
                <Route path="/pro" component={Pro}/>
                <Route path="/education" component={Education}/>
                <Route path="/perso" component={Perso}/>
                <Route path="/projets" component={Projets}/>
                <Route path="/masques" component={Masques}/>
                <Route path="/morningnews" component={Morningnews}/>
                <Route path="/ticketac" component={Ticketac}/>
                <Route path="/blackboard" component={Blackboard}/>
                <Route path="/mymoviz" component={Mymoviz}/>
                <Route path="/weatherapp" component={Weatherapp}/>
                <Route path="/bikeshop" component={Bikeshop}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}
