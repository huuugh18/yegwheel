import auth0 from 'auth0-js';
import {clientID, domain, redirectUri}  from './authvars'

export const authInstance = new auth0.WebAuth({
  domain,
  clientID,
  redirectUri,
  responseType: 'token id_token',
  scope: 'openid'
});

class Auth {
  accessToken;
  idToken;
  expiresAt;
  auth0 = authInstance

  constructor() {
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.renewSession =this.renewSession.bind(this)
    this.setSession = this.setSession.bind(this)  // <==== this seems like it should be there, but is not in the example
  }
  setSession(authResult, dispatch) {
    localStorage.setItem('isLoggedIn', true)
    const {expiresIn, accessToken, idToken} = authResult
    let expiresAt = (expiresIn * 1000) + new Date().getTime()
    this.accessToken = accessToken
    this.idToken =  idToken
    this.expiresAt = expiresAt
    dispatch({type: 'SET_CONNECTED', payload: {
        accessToken, idToken, expiresAt,
        value: true
    }})
  }
  logout(dispatch) {
    this.accessToken = null
    this.idToken = null
    this.expiresAt = 0
    dispatch({type: 'SET_CONNECTED', payload: {
      accessToken:null, idToken:null, expiresAt:0,
      value: false
    }})
    localStorage.removeItem('isLoggedIn')
    this.auth0.logout({return_to:window.location.origin})
  }
  handleAuthentication(dispatch) {
    this.auth0.parseHash((err, authResult)=> {
      if(authResult && authResult.accessToken && authResult.idToken) this.setSession(authResult, dispatch)
      else if(err) {
        console.log(err)
        alert('check console for error details')
      }
    })
  }
  renewSession(dispatch) {
    this.auth0.checkSession({}, (err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) this.setSession(authResult, dispatch)
      else if(err){
        this.logout(dispatch)
        console.log(err)
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
      }
    })
  }
}

const instance = new Auth()

export default instance