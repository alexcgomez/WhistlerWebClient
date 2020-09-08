export const AUTHENTICATION_ATTEMPT = 'AUTHENTICATION_ATTEMPT';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';

interface AuthenticationAttempt {
  type: typeof AUTHENTICATION_ATTEMPT
}

interface AuthenticationSuccess {
  type: typeof AUTHENTICATION_SUCCESS
}

interface AuthenticationFailed {
  type: typeof AUTHENTICATION_FAILED
}

export type AuthenticateDispatchTypes = AuthenticationAttempt | AuthenticationSuccess | AuthenticationFailed
