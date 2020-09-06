import Token from '../../entities/Token';
import User from '../../entities/User';
import {
  AUTHENTICATION_ATTEMPT, AUTHENTICATION_FAILURE,
  AUTHENTICATION_SUCCESS,
  LOGOUT,
} from '../../actions/Authentication/AuthenticationActionTypes';

export interface AuthenticationState {
  loading: boolean,
  token?: string,
  error: boolean,
  //loggedUser: User | null,
}

const defaultState: AuthenticationState = {
  loading: false,
  error: false,
};

const authReducer = (state: AuthenticationState = defaultState, action: any): AuthenticationState=> {
  switch (action.type) {
    case AUTHENTICATION_ATTEMPT:
      return { ...state, loading: true, error: false };
    case AUTHENTICATION_SUCCESS:
      const token: Token = action.payload.token;
     // const user: User = new User(action.payload.user)
      return {
        ...state,
        loading: false,
        token: '',
        error: false,
        //loggedUser: user,
      };
    case AUTHENTICATION_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }

};

export default authReducer;
