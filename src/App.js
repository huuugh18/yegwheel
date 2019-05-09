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
import LearnHowTo from './learnTo/LearnTo'
import Shop from './shop/Shop'
//import {renewSessionThunk} from './Auth/auth'

class App extends Component {
  componentDidMount() {
    const {/*renewSession, */loadProducts} = this.props
    //if(localStorage.getItem('isLoggedIn') === 'true') renewSession()
    loadProducts()
  }
  render() {
    return (
      <div className="App" onClick={this.props.addItem}>
        <Navbar />
        <div className='bodyContainer'>
          <Route exact path='/'             render={props=><Home       {...props}/>} />
          <Route exact path='/learntowheel' render={props=><LearnHowTo {...props}/>} />
          <Route exact path='/shop'         render={props=><Shop       {...props}/>} />
          <Route exact path='/callback'     render={props=><Callback />} />
          <Route exact path='/cart'         render={props=><Cart       {...props}/>} />
          <Route       path='/checkout'     render={()=><Checkout/>} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapState = state => ({})
const mapDispatch = dispatch => ({
  //renewSession: ()=>dispatch(renewSessionThunk()),
  loadProducts: () => dispatch({type:'GET_PRODUCTLIST'})
})

export default withRouter(connect(mapState, mapDispatch)(App))

