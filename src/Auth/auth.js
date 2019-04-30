import auth0 from 'auth0-js';
import {clientID, domain, redirectUri, logoutUri}  from './authvars'

export const auth0Client = new auth0.WebAuth({
  domain,
  audience: 'https://yegwheel.auth0.com/userinfo',
  clientID,
  redirectUri,
  responseType: 'id_token',
  scope: 'openid profile email'
});
export function handleAuthentication(/*hash, history*/) {
  return new Promise((resolve, reject) => {
    auth0Client.parseHash((err, authResult)=> {
      if(err) return reject(err)
      if(!authResult || !authResult.idToken) return reject(err)
      const idToken = authResult.idToken
      const profile = authResult.idTokenPayload
      const expiresAt = authResult.idTokenPayload.exp * 1000
      resolve({ authenticated: true, idToken, profile, expiresAt })
    })
  })
}

export function signIn() {
  auth0Client.authorize()
}

export  function signOut() {
  auth0Client.logout({
    returnTo: logoutUri,
    clientID: clientID
  })
}
