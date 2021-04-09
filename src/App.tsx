import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import ContactMe from './containers/ContactMe'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './containers/Post';
import News from './containers/News';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/contact-me" component={ContactMe}/>
                <Route path="/post" component={Post}/>
            </div>
        </Router>
    )
}

export default App;
