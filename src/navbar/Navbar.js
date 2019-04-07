import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"
import './Navbar.css'
import logo from '../graphics/yegwheel_logo.svg'
// import logoText from '../graphics/logo_text.svg'

// import Auth from '../Auth/auth'
// const auth = new Auth()
// console.log(auth)
// auth.login()


const AuthStuff = ({auth, connected}) => {
  console.log('connected = ', connected)
  const text = connected ? "Logout" : "Login"
  const clickHandler = () => {
    console.log('aloha', auth)
    if(!connected) auth.login()
    else auth.logout()
    //isAuthed ? auth.login() : auth.logout()
  }
  return <div onClick={() => clickHandler()}>
    Auth:{text}
  </div>
}

export class Navbar extends Component {
  render(){
    console.log('rendering the navbar')
    const {auth, connected} = this.props
    return (
      <div className="navbar-container">
        <img src={logo} id="nav-logo" alt="logo" />
        {/* <img src={logoText} id="nav-title" alt="yegwheel"/> */}
        <div id="nav-title">yegwheel</div>
        <div id="nav-link-container">
          <NavLink to='/' exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
          <NavLink to='/learntowheel' className="nav-link" activeClassName="nav-link-active">Learn</NavLink>
          <NavHashLink to='/#home-purchase-container' className="nav-link" activeClassName="nav-link-active">Purchase</NavHashLink>
          <a href="https://forum.yegwheel.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Forum</a>
          <NavLink to='/cart' className="nav-link" activeClassName="nav-link-active">Cart</NavLink>
          <AuthStuff auth={auth} connected={connected}/>
        </div>
      </div>
    )
  }
}

const mapState = () => ({})
const mapDispatch = () => ({})

export default connect(mapState, mapDispatch)(Navbar);