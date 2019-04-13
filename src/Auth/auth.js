import auth0 from 'auth0-js';
import {clientID, domain, redirectUri}  from './authvars'

export const authInstance = new auth0.WebAuth({
  domain,
  clientID,
  redirectUri,
  responseType: 'token id_token',
  scope: 'openid'
});

export const setSession = (authResult, dispatch) => {
  localStorage.setItem('isLoggedIn', true)
  const {expiresIn, accessToken, idToken} = authResult
  let expiresAt = (expiresIn * 1000) + new Date().getTime()
  dispatch({type: 'SET_CONNECTED', payload: {
      accessToken, idToken, expiresAt,
      value: true
  }})
}

export const handleAuthentication = (dispatch) => {
  authInstance.parseHash((err, authResult)=> {
    if(authResult && authResult.accessToken && authResult.idToken) setSession(authResult, dispatch)
    else if(err) {
      console.log(err)
      alert('check console for error details')
    }
  })
}

export const logout = (dispatch) => {
  dispatch({type: 'SET_CONNECTED', payload: {
    accessToken:null, idToken:null, expiresAt:0,
    value: false
  }})
  localStorage.removeItem('isLoggedIn')
  authInstance.logout({return_to:window.location.origin})
}

export const renewSession = (dispatch) => {
  authInstance.checkSession({}, (err, authResult) => {
    if(authResult && authResult.accessToken && authResult.idToken) setSession(authResult, dispatch)
    else if(err){
      logout(dispatch)
      console.log(err)
      alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
    }
  })
}

