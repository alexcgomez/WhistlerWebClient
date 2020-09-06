import { combineReducers } from 'redux';
import getUserReducer, { GetUserState } from './User/GetUserReducer';
import createUserReducer, { CreateUserState } from './User/CreateUserReducer';
import authReducer from './Authentication/AuthReducer';

export interface RootState {
  getUser: GetUserState;
  createUser: CreateUserState;
}

export const RootReducer = combineReducers({
  getUser: getUserReducer,
  createUser: createUserReducer,
  auth: authReducer,
})
