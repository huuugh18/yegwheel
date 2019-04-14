import React from 'react';
import {connect} from 'react-redux'
import {authInstance, logout} from '../Auth/auth'

const LoginButton = () => {
  const clickHandler = () => authInstance.authorize()
  return <div onClick={() => clickHandler()}>Login</div>
}

const AuthButton = (props) => {
    const {connected, disconnect} = props
    if(!connected) return <LoginButton />
    return <div onClick={() => disconnect()}>Logout {props.nickname}</div>
}

const mapState =    state    => {
  const connected = state.auth.connected
  if(!connected) return {connected}
  const {uid, nickname} = state.auth
  console.log(uid, nickname)
  return ({ connected, uid, nickname })
}
const mapDispatch = dispatch => ({ disconnect: () => dispatch(logout()) })

export default connect(mapState, mapDispatch)(AuthButton)