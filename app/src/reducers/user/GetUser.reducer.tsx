import User from '../../entities/User';
import { GetUserAction, GetUserSuccess } from '../../actions/user/GetUser.action';
import * as Types from '../../actions/user/Types';

export interface GetUserState {
  user?: User;
  loading: boolean;
  error: boolean;
}

const initialState: GetUserState = {
  loading: false,
  error: false,
};

export function GetUserReducer(
  state: GetUserState = initialState,
  action: GetUserAction): GetUserState {
  switch (action.type) {
    case Types.GET_USER_ATTEMPT:
      return {...state, loading: true, error: false};
    case Types.GET_USER_SUCCESS:
      const user: User = (action as GetUserSuccess).payload;
      return {...state, user: user, loading: false, error: false};
    case Types.GET_USER_FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}
