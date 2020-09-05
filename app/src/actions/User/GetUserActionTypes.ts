import User from '../../entities/User';

export const GET_USER_ATTEMPT = 'GET_USER_ATTEMPT';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

interface GetUserAttempt {
  type: typeof GET_USER_ATTEMPT
}

interface GetUserFail {
  type: typeof GET_USER_FAILURE
}

interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS,
  payload: User
}

export type UserDispatchTypes = GetUserAttempt | GetUserFail | GetUserSuccess;
