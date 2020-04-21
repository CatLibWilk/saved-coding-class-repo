import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Discover from "./components/Discover.js";
import Search from "./components/Search";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            
            <Route exact path="/" component={Home} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
            
          </div>
      </Router>
    );
  }
}

export default App;
