/*
 * Redux store with all the state of the frontend
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import RootReducer from '../reducers';

// Initial state, loaded when page is refreshed
const exampleInitialState = {
  user_id: 0,
  user_data: [],
  modalType: 'NONE', // 'NONE', 'NEW', NORMAL
  user_reqs: {},
};

// Creates a store by combining state, actions and reducers
export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}