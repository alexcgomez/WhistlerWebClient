import { Dispatch } from 'redux';
import axios from 'axios';
import {
  AuthenticateDispatchTypes,
  AUTHENTICATION_ATTEMPT,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
} from './AuthActionTypes';

export const userLogin = (email: string, password: string, history: any) => async (dispatch: Dispatch<AuthenticateDispatchTypes>) => {
  try {
    dispatch({
      type: AUTHENTICATION_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/v1/login', {
        email: email,
        password: password,
    });
    const resSites = await axios.post('http://localhost:8080/v1/sites/getUserSites', {
      userId: res.data.user.id,
    });
    res.data.userSites = resSites.data;
    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem('token',res.data.accessToken)
    history.push('/dashboard')
  } catch (e) {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};
