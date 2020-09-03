import { GET_USER_ATTEMPT, GET_USER_FAILURE, GET_USER_SUCCESS } from '../actions/UserActionTypes';
import User from '../entities/User';

export interface GetUserState {
  loading: boolean,
  user?: User,
  error: boolean
}

const defaultState: GetUserState = {
  loading: false,
  error: false,
};

const userReducer = (state: GetUserState = defaultState, action: any): GetUserState => {
  switch (action.type) {
    case GET_USER_ATTEMPT:
      return { ...state, loading: true };
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, error: false, user: action.payload };
    default:
      return state;
  }

};

export default userReducer;
