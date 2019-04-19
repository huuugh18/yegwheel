import produce from 'immer'

export const defaultState = {
  connected: false
}

const SET_CONNECTED = 'SET_CONNECTED'

const setConnected = (draft, payload)  => {
  const {value, accessToken, idToken, expiresAt, uid, nickname} = payload
  draft.connected = value
  draft.accessToken =   accessToken
  draft.idToken =   idToken
  draft.expiresAt =  expiresAt
  draft.uid = uid
  draft.nickname = nickname
}

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case SET_CONNECTED: setConnected(draft, payload); break;
      default: break;
    }
  })
  return nextState
}

export default reducer