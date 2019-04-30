import {catalog} from '../data/defaultcatalog'

const defaultState = catalog

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  switch(type) {
    case 'SET_PRODUCTLIST': return  payload.productList; 
    default: return state; 
  }
}

export default reducer