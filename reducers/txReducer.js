import { ACCEPT_TX, REJECT_TX } from '../constants/ActionTypes'

// const initialState = { userTxs: null }

export default function(state = {}, action) {
  switch (action.type) {
    case ACCEPT_TX:
      return { ...state, userTxs: action.payload }
    case REJECT_TX:
      return { ...state, userTxs: action.payload }
    default:
      return state
  }
}
