import { combineReducers } from 'redux';
import userReducer, { GetUserState } from './UserReducer';

export interface RootState {
  getUser: GetUserState;
}

export const RootReducer = combineReducers({
  getUser: userReducer
})
