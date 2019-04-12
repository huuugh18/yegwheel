import React, { Component, useEffect } from 'react';
import { Route, withRouter, Link } from "react-router-dom";
import {connect } from 'react-redux'

import './App.css';
import Navbar from './navbar/Navbar'
import {Footer} from './footer/Footer'
import {Home} from './home/Home'
import Cart from './cart/Cart'
import Callback from './Callback'
import Checkout from './checkout/Checkout'
import {LearnHowTo} from './learnTo/LearnTo'

const GoodToGo = (props) => {
  useEffect(()=>{
    console.log('Props(in useEffect) are: ', props)
    props.dispatch({type: 'SET_CONNECTED', payload: {value: true}})
  })
  console.log('Props are', props)
  return <div>good to go!<Link to='/'>Home</Link></div>
}

const mapState = state=>state

const GoodToGoConnected = connect(mapState)(GoodToGo)


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
    const {auth, handleAuthentication, history} = this.props
    return (
      <div className="App" onClick={this.props.addItem}>
        <Navbar auth={auth} />
        <div className='bodyContainer' auth={auth}>
          <Route exact path='/'             render={props=><Home       auth={auth} {...props}/>} />
          <Route exact path='/goodtogo'     render={props=><GoodToGoConnected   auth={auth} {...props}/>} />
          <Route exact path='/cart'         render={props=><Cart       auth={auth} {...props}/>} />
          <Route exact path='/checkout'     render={props=><Checkout   auth={auth} {...props}/>} />
          <Route exact path='/learntowheel' render={props=><LearnHowTo auth={auth} {...props}/>} />
          <Route exact path='/callback'     render={props => {
            handleAuthentication(props, () => history.replace('/goodtogo'))
            return <Callback {...props} test="abc" />
          }}/>
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