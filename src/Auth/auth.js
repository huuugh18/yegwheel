import auth0 from 'auth0-js';
import jwt_decode from 'jwt-decode'
import {clientID, domain, redirectUri}  from './authvars'

export const authInstance = new auth0.WebAuth({
  domain,
  clientID,
  redirectUri,
  responseType: 'token id_token',
  scope: 'openid profile'
});

const getDisplayName = (nickname, given_name) => {
  if(!given_name) return nickname
  if(!nickname) return given_name
  return nickname.length < given_name.length ? nickname : given_name
}

export const setSessionThunk = authResult => dispatch => {
  localStorage.setItem('isLoggedIn', true)
  const {expiresIn, accessToken, idToken} = authResult
  const {sub:uid, nickname, given_name} = jwt_decode(authResult.idToken)
  let expiresAt = (expiresIn * 1000) + new Date().getTime()
  dispatch({type: 'SET_CONNECTED', payload: {
      accessToken, idToken, expiresAt, uid, nickname:getDisplayName(nickname, given_name),
      value: true
  }})
}

export const handleAuthenticationThunk = (hash, history) => dispatch => {
  const hasToken = /access_token|id_token|error/.test(hash)
  if(!hasToken) return
  authInstance.parseHash((err, authResult)=> {
    if(authResult && authResult.accessToken && authResult.idToken) {
      dispatch(setSessionThunk(authResult))
    }
    else if(err) {
      console.log(err)
      alert('check console for error details')
    }
  })
  history.replace('/')
}

export const logout = () => dispatch => {
  dispatch({type: 'SET_CONNECTED', payload: {
    accessToken:null, idToken:null, expiresAt:0,
    value: false
  }})
  localStorage.removeItem('isLoggedIn')
  authInstance.logout({return_to:window.location.origin})
}

export const renewSessionThunk = () => dispatch => {
  authInstance.checkSession({}, (err, authResult) => {
    if(authResult && authResult.accessToken && authResult.idToken) dispatch(setSessionThunk(authResult))
    else if(err){
      dispatch(logout())
      console.log(err)
      alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
    }
  })
}

