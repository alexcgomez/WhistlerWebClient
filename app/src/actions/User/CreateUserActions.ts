import { Dispatch } from 'redux';
import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  UserDispatchTypes,
} from './CreateUserActionTypes';
import axios from 'axios';

export const CreateUser = (user:any,history:any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: CREATE_USER_ATTEMPT,
    });
    const res = await axios.post('http://localhost:8080/v1/users/create', {
      email:user.email,
      password:user.password,
      firstName: user.firstName,
      lastName: user.lastName
      });
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
    history.push('/dashboard')
  } catch (e) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: e.message
    });
  }
};
