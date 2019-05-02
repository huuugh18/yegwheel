import {call, put, takeLatest} from 'redux-saga/effects'
import history from '../history'
import {addSaleUri} from '../constants'


const buildBody = (action) => {
  const {checkout, items} = action
  const {fullName, email, phone, address, city, province, country, postalCode, comments, token} = checkout
  const date = new Date().toLocaleDateString()
  return { 
    date,  
    name:fullName, email, phone, 
    address, city, province, country, postalCode,
    items, 
    comments,
    stripeToken: token
  }
}

const buildOrderOptions = (bodyValues) => {
  return {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyValues)
  }
}

function* finishOrderSaga(action){
  yield put({type: "SET_ORDER_START"})
  const bodyValues = buildBody(action)
  const fetchOptions = buildOrderOptions(bodyValues) 
  yield call(fetch, addSaleUri, fetchOptions)
  yield put({type: "SET_ORDER_COMPLETE"})
  yield call(history.push, '/')
}

export function* handle_SET_ORDER() {
  yield takeLatest("SET_ORDER", finishOrderSaga)  
}
