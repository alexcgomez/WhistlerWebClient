import { combineReducers } from 'redux';
import createUserReducer, { CreateUserState } from './User/CreateUserReducer';
import authenticateReducer, { AuthState } from './Auth/AuthReducer';
import addSiteReducer, { AddSiteState } from './Sites/AddSiteReducer';

export interface RootState {
  createUser: CreateUserState;
  authentication: AuthState;
  addSite: AddSiteState;
}

export const RootReducer = combineReducers({
  createUser: createUserReducer,
  authentication: authenticateReducer,
  addSite: addSiteReducer,
});
