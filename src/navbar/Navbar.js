import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import logo from '../graphics/yegwheel_logo.svg'
import AuthButton from './AuthButton'
import './Navbar.css'

class Navbar extends Component {
  render(){
    return (
      <div className="navbar-container">
        <img src={logo} id="nav-logo" alt="logo" />
        {/* <img src={logoText} id="nav-title" alt="yegwheel"/> */}
        <div id="nav-title">yegwheel</div>
        <div id="nav-link-container">
          <NavLink to='/' exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
          <NavLink to='/learntowheel' className="nav-link" activeClassName="nav-link-active">Learn</NavLink>
          <NavLink to='/shop' className="nav-link" activeClassName="nav-link-active">Shop</NavLink>
          <a href="https://forum.yegwheel.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Forum</a>
          <NavLink to='/cart' className="nav-link" activeClassName="nav-link-active">Cart</NavLink>
          <AuthButton />
        </div>
      </div>
    )
  }
}

export default Navbar