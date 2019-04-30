import React from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from '../Auth/auth'

const AuthButton = (props) => {
  const {user} = props
  if(!user) return <div onClick={signIn}>Login</div>
  return <div onClick={signOut}>Logout</div>
}

const mapState = state => ({user: state.auth.user})

export default connect(mapState)(AuthButton)