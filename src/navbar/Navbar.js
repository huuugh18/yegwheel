import React, { } from 'react';
import {connect} from 'react-redux'
import {NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"
import { withStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge'


import './Navbar.css'
import logo from '../graphics/yegwheel_logo.svg'
// import logoText from '../graphics/logo_text.svg'


const styles = theme => ({
  badge: {
    top: '-6px',
    right: '-30',
    marginRight: '10px'

  }
})

const NavbarMain = ({itemQuantity,classes}) => {
    return <div className="navbar-container">
        <img src={logo} id="nav-logo" alt="logo" />
        {/* <img src={logoText} id="nav-title" alt="yegwheel"/> */}
        <div id="nav-title">yegwheel</div>
        <div id="nav-link-container">
          <NavLink to='/' exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
          <NavLink to='/learntowheel' className="nav-link" activeClassName="nav-link-active">Learn</NavLink>
          <NavHashLink to='/#home-purchase-container' className="nav-link" activeClassName="nav-link-active">Purchase</NavHashLink>
          <a href="https://forum.yegwheel.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Forum</a>
          <NavLink to='/cart' className="nav-link" activeClassName="nav-link-active">
            <Badge badgeContent={itemQuantity} color='primary'  className={classes.badge} >
              <ShoppingCartIcon />
            </Badge>  
            Cart
          </NavLink>
        </div>
    </div>
}

const mapState = state => {
  const {cart:{items}} = state
  const itemQuantity = items.length
  return {itemQuantity}
}
// const mapDispatch = () => ({})

export default connect(mapState, null)(withStyles(styles)(NavbarMain));