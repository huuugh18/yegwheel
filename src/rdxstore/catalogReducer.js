import produce from 'immer'
import {catalog} from '../data/defaultcatalog'

const defaultState = catalog

const reducer = (state=defaultState, action) =>  {
  const {type/*, payload*/} = action
  const nextState = produce(state, draft => {
    switch(type) {
      // no actions yet, just using default state
      default: break;
    }
  })
  return nextState
}

export default reducer