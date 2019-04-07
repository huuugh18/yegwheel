import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import './App.css';
import {Navbar} from './navbar/Navbar'
import {Footer} from './footer/Footer'
import {Home} from './home/Home'
import Cart from './cart/Cart'
import Callback from './Callback'
import Checkout from './checkout/Checkout'
import {LearnHowTo} from './learnTo/LearnTo'


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login() {
    this.props.auth.login()
  }
  logout() {
    this.props.auth.logout()
  }
  componentDidMount() {
    const {renewSession} = this.props.auth
    if(localStorage.getItem('isLoggedIn') === 'true') renewSession()
  }
  render() {
    const {auth, handleAuthentication} = this.props
    const { isAuthenticated } = auth
    const connected = isAuthenticated()
    console.log('connected in app.js is ', connected)
    return (
      <div className="App" onClick={this.props.addItem}>
        <Navbar auth={auth} connected={connected} />
        <div className='bodyContainer' auth={auth}>
          <Route exact path='/'             render={props=><Home       auth={auth} {...props} />}/>
          <Route exact path='/cart'         render={props=><Cart       auth={auth} {...props}/>} />
          <Route exact path='/checkout'     render={props=><Checkout   auth={auth} {...props}/>} />
          <Route exact path='/learntowheel' render={props=><LearnHowTo auth={auth} {...props}/>} />
          <Route exact path='/callback'     render={props => {
            handleAuthentication(props)
            return <Callback {...props} test="abc" />
          }}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App)
