import { combineReducers } from 'redux';
import getUserReducer, { GetUserState } from './User/GetUserReducer';
import createUserReducer, { CreateUserState } from './User/CreateUserReducer';
import authReducer, { AuthenticationState } from './Authentication/AuthReducer';

export interface RootState {
  getUser: GetUserState;
  createUser: CreateUserState;
  auth: AuthenticationState;
}

export const RootReducer = combineReducers({
  getUser: getUserReducer,
  createUser: createUserReducer,
  auth: authReducer,
})
