import * as Types from './Types';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../reducers/RootReducer';
import User from '../../entities/User';

export interface GetUserAttempt extends Action {
  type: Types.GET_USER_ATTEMPT;
}

export interface GetUserSuccess extends Action {
  type: Types.GET_USER_SUCCESS;
  payload: User;
}

export interface GetUserFailure extends Action {
  type: Types.GET_USER_FAILURE;
}

export type GetUserAction = GetUserAttempt | GetUserSuccess | GetUserFailure;

export interface GetUserThunk extends ThunkAction<Promise<GetUserAction>, RootState, string, any> {
}

export const getUserAttempt: ActionCreator<GetUserAttempt> = () => ({
  type: Types.GET_USER_ATTEMPT,
});

export const getUserSuccess: ActionCreator<GetUserSuccess> = (user: User) => ({
  type: Types.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure: ActionCreator<GetUserFailure> = () => ({
  type: Types.GET_USER_FAILURE,
});

export const getUser: ActionCreator<GetUserThunk> = (userId: string): GetUserThunk => {

  return (dispatch: Dispatch<RootState>): Promise<GetUserAction> => {
    dispatch(getUserAttempt());
    return axios.

  };
};
