import { combineReducers, Reducer } from 'redux';
import { GetUserReducer, GetUserState } from './user/GetUser.reducer';

export interface RootState {
  getUser: GetUserState;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  getUser: GetUserReducer,
});
