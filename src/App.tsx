import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import About from "./components/About";
import Masques from "./components/Masques";
import NotFound from "./components/NotFound";
import Portfolio from "./components/Portfolio";
import Pokedex from "./components/Pokedex";
import RPG from "./components/RPG";
import Contact from "./components/Contact";
import FilRouge from "./components/FilRouge";

export default function App() {

    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/about" component={About}/>
                <Route path="/projets" component={Portfolio}/>
                <Route path="/masques" component={Masques}/>
                <Route path="/filrouge" component={FilRouge}/>
                <Route path="/pokedex" component={Pokedex}/>
                <Route path="/rpg" component={RPG}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}
