import React, { Component } from 'react';

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
                    <div className="nav-link">
                        About
                    </div>
                    <div className="nav-link">
                        Forum
                    </div>
                    <div className="nav-link">
                        How To
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;