import { takeLatest, call, put } from 'redux-saga/effects'
import { HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED } from '../rdxstore/authReducer'
import { handleAuthentication } from '../Auth/auth';

export function* parseHash() {
  const user = yield call(handleAuthentication)
  yield put({type: USER_PROFILE_LOADED, user})
}

export function* handleAuthenticationCallback() {
  yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash)
}


// import {put, takeLatest} from 'redux-saga/effects'
// import jwt_decode from 'jwt-decode'
// import {auth0Client} from '../Auth/auth';


// function* setSession(action) {
//   const {authResult} = action.payload
//   localStorage.setItem('isLoggedIn', true)
//   const {expiresIn, accessToken, idToken} = authResult
//   const {sub:uid, nickname, given_name} = jwt_decode(authResult.idToken)
//   let expiresAt = (expiresIn * 1000) + new Date().getTime()
//   yield put({type: 'SET_CONNECTED', payload: {
//       accessToken, idToken, expiresAt, uid, nickname:getDisplayName(nickname, given_name),
//       value: true
//   }})
// }

// function* handleAuthentication(action) {
//   const {hash, history} = payload
//   const hasToken = /access_token|id_token|error/.test(hash)
//   if(!hasToken) return
//   const authResult = yield auth0Client.parseHash(err, authResult)

//   if(authResult && authResult.accessToken && authResult.idToken) {
//     dispatch(setSessionThunk(authResult))
//   }
//   else if(err) {
//     console.log(err)
//     alert('check console for error details')
//   }
//   history.replace('/')
// }



// export const handleAuthenticationThunk = (hash, history) => dispatch => {
//   const hasToken = /access_token|id_token|error/.test(hash)
//   if(!hasToken) return
//   auth0Client.parseHash((err, authResult)=> {
//     if(authResult && authResult.accessToken && authResult.idToken) {
//       dispatch(setSessionThunk(authResult))
//     }
//     else if(err) {
//       console.log(err)
//       alert('check console for error details')
//     }
//   })
//   history.replace('/')
// }



// function* finishOrderSaga(action){
//   yield put({type: "SET_ORDER_START"})
//   const {name, email, phone, items, total, comments, stripeToken} = action.payload
//   const url = "https://yeg.azurewebsites.net/api/sale"
//   const fieldValues = { name, email, phone, items, comments, stripeToken, total }
//   const postResponse = yield fetch(url,{
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(fieldValues)
//   })
//   if(postResponse.ok) {
//     yield put({type: "SET_ORDER_COMPLETE"})
//     return
//   }
//   yield put({type: "SET_ORDER_ERROR", payload: {error: postResponse.error}})
// }

// export function* handle_SET_ORDER() {
//   yield takeLatest("SET_ORDER", finishOrderSaga)  
// }
