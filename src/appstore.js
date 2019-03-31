import {createStore} from 'redux'
import produce from 'immer'

let defaultState = {
  cart: {
    name: '',
    email: '',
    phone: '',
    comments: '',
    items: []
  }
}

const ADD_ITEM = 'ADD_ITEM'
const RESET_CART = 'RESET_CART'

const reducer = (state=defaultState, action) =>  {
  console.log('the action is', action)
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case ADD_ITEM: 
        const {name, email, phone, comments, productCode} = payload
        draft.cart.name =name
        draft.cart.email =email
        draft.cart.phone = phone
        draft.cart.comments = comments
        draft.cart.items.push(productCode || 'unknown item')
        break;
      case RESET_CART:
        draft.cart.items = []
        break;
      default: break;
    }
  })
  return nextState
}



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())