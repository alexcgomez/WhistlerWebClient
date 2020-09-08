import {
  AUTHENTICATION_ATTEMPT,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
} from '../../actions/Auth/AuthActionTypes';

export interface AuthState {
  loading: boolean,
  authenticated: boolean,
  error: boolean
}

const initialState: AuthState = {
  loading: false,
  authenticated: false,
  error: false,
};

const authenticateReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case AUTHENTICATION_ATTEMPT:
      return { ...state, loading: true, error: false };
    case AUTHENTICATION_SUCCESS:
      return { ...state, loading: false, authenticated: action.payload, error: false };
    case AUTHENTICATION_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default authenticateReducer;
