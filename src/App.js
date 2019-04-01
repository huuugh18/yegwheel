import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import {Navbar} from './navbar/Navbar'
import {Footer} from './footer/Footer'
import {Home} from './home/Home'
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import {LearnHowTo} from './learnTo/LearnTo'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" onClick={this.props.addItem}>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/learntowheel' component={LearnHowTo} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
