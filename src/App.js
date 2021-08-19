import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './components/Home'
import Nav from "./components/Nav";

export default function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Home/>
            </Switch>
        </Router>
    );
}
