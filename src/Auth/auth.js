import auth0 from 'auth0-js';
import {clientID, domain, redirectUri}  from './authvars'

class Auth {
  accessToken;
  idToken;
  expiresAt;
  auth0 = new auth0.WebAuth({
    domain,
    clientID,
    redirectUri,
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getIdToken = this.getIdToken.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.renewSession =this.renewSession.bind(this)
    this.setSession = this.setSession.bind(this)  // <==== this seems like it should be there, but is not in the example
  }
  setSession(authResult, dispatch) {
    localStorage.setItem('isLoggedIn', true)
    let expiresAt =(authResult.expiresIn * 1000) + new Date().getTime()
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt =expiresAt
    dispatch({type: 'SET_CONNECTED', payload: {value: true}})
  }
  login() {
    this.auth0.authorize();
  }
  logout() {
    this.accessToken = null
    this.idToken = null
    this.expiresAt = 0
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
  isAuthenticated() {
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
  getAccessToken() {
    return this.accessToken
  }
  getIdToken() {
    return this.idToken
  }
  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) this.setSession(authResult)
      else if(err){
        this.logout()
        console.log(err)
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
      }
    })
  }
}

export default Auth