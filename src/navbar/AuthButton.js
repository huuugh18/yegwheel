import React from 'react';
import {connect} from 'react-redux'
import {authInstance, logout} from '../Auth/auth'

const AuthButton = (props) => {
    const {connected, disconnect} = props
    const text = connected ? "Logout" : "Login"
    const clickHandler = () => {
      if(!connected) authInstance.authorize()
      else disconnect()
    }
    return <div onClick={() => clickHandler()}>{text}</div>
}

const mapState =    state    => ({ connected: state.auth.connected })
const mapDispatch = dispatch => ({ disconnect: () => dispatch(logout()) })

export default connect(mapState, mapDispatch)(AuthButton)