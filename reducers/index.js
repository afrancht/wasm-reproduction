import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import authenticateReducer from './authenticateReducer';
import txReducer from './txReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authenticateReducer,
  form: formReducer,
  txs: txReducer,
});

export default rootReducer;
