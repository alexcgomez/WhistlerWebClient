export const CREATE_USER_ATTEMPT = 'CREATE_USER_ATTEMPT';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

interface CreateUserAttempt {
  type: typeof CREATE_USER_ATTEMPT
}

interface CreateUserFail {
  type: typeof CREATE_USER_FAILURE
}

interface CreateUserSuccess {
  type: typeof CREATE_USER_SUCCESS,
  payload: string
}

export type UserDispatchTypes = CreateUserAttempt | CreateUserFail | CreateUserSuccess;
