import { CREATE_USER_ATTEMPT, CREATE_USER_FAILURE, CREATE_USER_SUCCESS } from '../User/CreateUserActionTypes';

export const LOGOUT = 'LOGOUT';
export const AUTHENTICATION_ATTEMPT = 'AUTHENTICATION_ATTEMPT';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';

interface Logout {
  type: typeof LOGOUT
}

interface AuthenticateAttempt {
  type: typeof AUTHENTICATION_ATTEMPT
}

interface AuthenticateFailure {
  type: typeof AUTHENTICATION_FAILURE
}

interface AuthenticateSuccess {
  type: typeof AUTHENTICATION_SUCCESS,
  payload: string
}

export type AuthenticationDispatchTypes = AuthenticateAttempt | AuthenticateFailure | AuthenticateSuccess;
