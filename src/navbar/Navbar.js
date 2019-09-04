import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import logo from '../graphics/yegwheel_logo.svg'
import AuthButton from './AuthButton'
import './Navbar.css'

const Nav1 = (props) => <NavLink className="nav-link" activeClassName="nav-link-active" {...props}>{props.children}</NavLink>
const HomeLink =     () => <Nav1 to='/' exact>Home</Nav1>
const LearnLink =    () => <Nav1 to='/learntowheel'>Learn</Nav1>
const CalendarLink = () => <Nav1 to='/calendar'>Calendar</Nav1>
const RentalLink =   () => <Nav1 to='/rent'>Rentals</Nav1>
const ShopLink =     () => <Nav1 to='/shop'>Shop</Nav1>
const CartLink =     () => <Nav1 to='/cart'>Cart</Nav1>

const NavLinkContainer = ({children}) => <div id="nav-link-container">{children}</div>
const Title = () => <div id="nav-title">yegwheel</div>
const NavLogo = () => <img src={logo} id="nav-logo" alt="logo" />
const NavbarContainer = ({children}) => <div className="navbar-container">{children}</div>

class Navbar extends Component {
  render(){
    return (
      <NavbarContainer>
        <NavLogo />
        <Title />
        <NavLinkContainer>
          <HomeLink />
          <LearnLink />
          <CalendarLink />
          <ShopLink />          
          <RentalLink />
          <CartLink />          
          <AuthButton />
        </NavLinkContainer>
      </NavbarContainer>
    )
  }
}

export default Navbar