import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
  user: userReducer
})

export default RootReducer;
