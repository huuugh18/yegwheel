export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED'
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK'

export const handleAuthenticationCallback = () => ({type: HANDLE_AUTHENTICATION_CALLBACK})

const reducer = (state={}, action) =>  {
  switch(action.type) {
    case USER_PROFILE_LOADED: return {...state, user: action.user}
    default: return state
  }
}

export default reducer