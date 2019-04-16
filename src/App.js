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
import {renewSessionThunk} from './Auth/auth'
import ShippingInfo from './checkout/ShippingInfo'
import PaymentInfo from './checkout/PaymentInfo'
import ReviewInfo from './checkout/ReviewInfo'

class App extends Component {
  componentDidMount() {
    const {renewSession} = this.props
    if(localStorage.getItem('isLoggedIn') === 'true') renewSession()
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
          <Route exact path='/checkout/shipping'     render={()=><ShippingInfo/>} />
          <Route exact path='/checkout/payment'     render={()=><PaymentInfo/>} />
          <Route exact path='/checkout/review'     render={()=><ReviewInfo/>} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({
  renewSession: ()=>dispatch(renewSessionThunk())
})

export default withRouter(connect(mapState, mapDispatch)(App))

