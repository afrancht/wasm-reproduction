// Decides if user is logged in or not.
import { FETCH_USER } from '../constants/ActionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
