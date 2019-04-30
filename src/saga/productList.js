import {call, put, takeEvery} from 'redux-saga/effects'

export function* fetchProductList() {
  const endpoint = 'https://yeg.azurewebsites.net/api/products'
  const response = yield call(fetch, endpoint)  
  const data = yield response.json()
  yield put({type: 'SET_PRODUCTLIST', payload:{productList:data}})
}

export function* handle_GET_PRODUCTLIST() {
  yield takeEvery("GET_PRODUCTLIST", fetchProductList)
}
