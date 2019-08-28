import {
  GET_USR_TXS,
  DEC_DATA,
  GET_PROFILE_DATA,
  SEND_DATA,
  FETCH_USR_TXS,
  FETCH_POSSIBLE_USERS,
  FETCH_IN_PENDING_TXS,
  FETCH_IN_APPROVED_TXS,
  FETCH_OUT_PENDING_TXS,
  FETCH_OUT_APPROVED_TXS,
} from '../constants/ActionTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case SEND_DATA:
      return { ...state, userData: action.payload }
    case FETCH_USR_TXS:
      return { ...state, userTxs: action.payload }
    case FETCH_POSSIBLE_USERS:
      return { ...state, possibleUsers: action.payload }
    case GET_PROFILE_DATA:
      return { ...state, profileInfo: action.payload }
    case GET_USR_TXS:
      return { ...state, txs: action.payload }
    case DEC_DATA:
      return { ...state }
    case FETCH_IN_PENDING_TXS:
      return { ...state, txsPendingIn: action.payload }
    case FETCH_IN_APPROVED_TXS:
      return { ...state, txsApprovedIn: action.payload }
    case FETCH_OUT_PENDING_TXS:
      return { ...state, txsPendingOut: action.payload }
    case FETCH_OUT_APPROVED_TXS:
      return { ...state, txsApprovedOut: action.payload }
    default:
      return state
  }
}
