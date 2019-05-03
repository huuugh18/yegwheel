import {call, put, takeLatest} from 'redux-saga/effects'
import history from '../history'

function* finishOrderSaga(action){
  const {productCode, quantity, price} = action.payload
  yield put({type:'ADD_ITEM', payload:{productCode, quantity, price}})
  yield call(history.push, '/cart')
}

export function* handle_ADD_TO_CART() {
  yield takeLatest("ADD_TO_CART", finishOrderSaga)  
}
