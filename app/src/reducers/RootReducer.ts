import { combineReducers } from 'redux';
import createUserReducer, { CreateUserState } from './User/CreateUserReducer';
import authenticateReducer, { AuthState } from './Auth/AuthReducer';

export interface RootState {
  createUser: CreateUserState;
  authentication: AuthState;
}

export const RootReducer = combineReducers({
  createUser: createUserReducer,
  authentication: authenticateReducer,
});
