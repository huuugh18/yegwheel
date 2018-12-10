import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';
import {Navbar} from './navbar/Navbar'
import {Footer} from './footer/Footer'
import {Home} from './home/Home'
import {LearnHowTo} from './learnTo/LearnTo'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/learntowheel' component={LearnHowTo} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
