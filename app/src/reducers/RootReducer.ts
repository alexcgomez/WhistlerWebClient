import { combineReducers } from 'redux';
import getUserReducer, { GetUserState } from './GetUserReducer';
import createUserReducer, { CreateUserState } from './CreateUserReducer';

export interface RootState {
  getUser: GetUserState;
  createUser: CreateUserState;
}

export const RootReducer = combineReducers({
  getUser: getUserReducer,
  createUser: createUserReducer,
})
