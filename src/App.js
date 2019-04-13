import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import {connect } from 'react-redux'

import './App.css';
import Navbar from './navbar/Navbar'
import {Footer} from './footer/Footer'
import {Home} from './home/Home'
import Cart from './cart/Cart'
import Callback from './Callback'
import Checkout from './checkout/Checkout'
import {LearnHowTo} from './learnTo/LearnTo'
import {renewSession} from './Auth/auth'

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('isLoggedIn') === 'true') renewSession(this.props.dispatch)
  }
  render() {
    return (
      <div className="App" onClick={this.props.addItem}>
        <Navbar />
        <div className='bodyContainer'>
          <Route exact path='/'             render={props=><Home       {...props}/>} />
          <Route exact path='/cart'         render={props=><Cart       {...props}/>} />
          <Route exact path='/checkout'     render={props=><Checkout   {...props}/>} />
          <Route exact path='/learntowheel' render={props=><LearnHowTo {...props}/>} />
          <Route exact path='/callback'     render={props=><Callback />} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(App))

/**
 So here is the problem....
 When the session connects everything hasbeen rendered already, and it doesn't signal 
 to anything that a re-render should occur.
 So the Navbar reflects the not-logged-in state.
 -- there seems to be a redirect that occurs at the end of the establish session....  itgoes to callback
 -- still a bit jumbled how the callbacks are occurring
 -- what makes the callback go away and be replaced with adifferent route
 -- redux has to know about connected state
 -- when we post welcome back, do we have all we need?
 -- can that component be manipulated from redux actions and thunks?

 */