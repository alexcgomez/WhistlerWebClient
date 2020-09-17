import { Dispatch } from 'redux';
import axios from 'axios';
import {
  AuthenticateDispatchTypes,
  AUTHENTICATION_ATTEMPT,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
} from './AuthActionTypes';

export const Authenticate = (email: string, password: string) => async (dispatch: Dispatch<AuthenticateDispatchTypes>) => {
  try {
    dispatch({
      type: AUTHENTICATION_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/v1/login', {
        email: email,
        password: password,
    });
    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};
