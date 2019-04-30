import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAuthenticationCallback } from './rdxstore/authReducer'

let Callback = ({dispatch, user}) => {
  if(user) return <Redirect to='/' />
  dispatch(handleAuthenticationCallback())
  return <div>Loading user profile</div>
}

const mapState = state => ({ user: state.auth.user })
export default connect(mapState)(Callback)
