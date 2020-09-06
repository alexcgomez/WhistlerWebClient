import Token from '../../entities/Token';
import User from '../../entities/User';
import {
  AUTHENTICATION_ATTEMPT, AUTHENTICATION_FAILURE,
  AUTHENTICATION_SUCCESS,
  LOGOUT,
} from '../../actions/Authentication/AuthenticationActionTypes';

export interface AuthenticationState {
  loading: boolean,
  token?: Token | null,
  error: boolean,
  loggedUser: User | null,
}

const defaultState: AuthenticationState = {
  loading: false,
  token: null,
  error: false,
  loggedUser: null,
};

const authReducer = (state: AuthenticationState = defaultState, action: any) => {
  switch (action.type) {
    case LOGOUT:
      return defaultState;
    case AUTHENTICATION_ATTEMPT:
      return { ...state, loading: true, error: false };
    case AUTHENTICATION_SUCCESS:
      const token: Token = action.payload.token;
      const user: User = new User(action.payload.user)
      return {
        ...state,
        token: token,
        loading: false,
        error: false,
        loggedUser: user,
      };
    case AUTHENTICATION_FAILURE:
      return { ...state, loading: false, error: true };
  }

};

export default authReducer;
