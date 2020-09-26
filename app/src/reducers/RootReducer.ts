import { combineReducers } from 'redux';
import createUserReducer, { CreateUserState } from './User/CreateUserReducer';
import authenticateReducer, { AuthState } from './Auth/AuthReducer';
import addSiteReducer, { AddSiteState } from './Sites/AddSiteReducer';
import deleteSiteReducer, { DeleteSiteState } from './Sites/DeleteSiteReducer';

export interface RootState {
  createUser: CreateUserState;
  authentication: AuthState;
  addSite: AddSiteState;
  deleteSite: DeleteSiteState;
}

export const RootReducer = combineReducers({
  createUser: createUserReducer,
  authentication: authenticateReducer,
  addSite: addSiteReducer,
  deleteSite: deleteSiteReducer,
});
