import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"


import './Navbar.css'
import logo from '../graphics/yegwheel_logo.svg'
// import logoText from '../graphics/logo_text.svg'


export class Navbar extends Component {
    render(){
        return (
            <div className="navbar-container">
                <img src={logo} id="nav-logo" alt="logo" />
                {/* <img src={logoText} id="nav-title" alt="yegwheel"/> */}
                <div id="nav-title">
                    yegwheel
                </div>
                <div id="nav-link-container">
                    <NavLink to='/' exact className="nav-link" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                    <NavLink to='/learntowheel' className="nav-link" activeClassName="nav-link-active">
                        Learn
                    </NavLink>
                    <NavHashLink to='/#home-purchase-container' className="nav-link" activeClassName="nav-link-active">
                        Purchase
                    </NavHashLink>
                    <a href="https://forum.yegwheel.com/" className="nav-link" target="_blank" rel="noopener noreferrer">
                        Forum
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;