import produce from 'immer'
import {addDelta} from '../functions'

const defaultState = {items:[]} 

const ADD_ITEM = 'ADD_ITEM'
const RESET_CART = 'RESET_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'

const addItem = (draft, {productCode, quantity, price}) => {
  const index = draft.items.findIndex(item => item.productCode === productCode)
  if(index < 0) draft.items.push({ productCode, quantity, price })
}

const resetCart = draft => draft.items = []

const deleteItem =(draft, payload) => {
  const {productCode} = payload
  const index = draft.items.findIndex(item => item && item.productCode === productCode)
  draft.items.splice(index, 1);
}

const adjustQuantity = (draft, payload) => {
  const {productCode, delta} = payload
  const index = draft.items.findIndex(item => item.productCode === productCode)
  const item = draft.items[index]
  item.quantity =  addDelta(item.quantity, delta)
  item.amount = Math.round(item.price * item.quantity * 100) / 100
}

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case ADD_ITEM:        addItem(draft, payload); break;
      case RESET_CART:      resetCart(draft); break;
      case DELETE_ITEM:     deleteItem(draft, payload); break;
      case ADJUST_QUANTITY: adjustQuantity(draft, payload); break;
      default: break;
    }
  })
  return nextState
}

export default reducer

