import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Elements, StripeProvider} from 'react-stripe-elements';

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
      <StripeProvider apiKey='something'>
      <Router>
        <div className="App" onClick={this.props.addItem}>
          <Navbar />
          <div className='bodyContainer'>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/learntowheel' component={LearnHowTo} />
          </div>
          <Footer />
        </div>
      </Router>
      </StripeProvider>
    );
  }
}

export default App
