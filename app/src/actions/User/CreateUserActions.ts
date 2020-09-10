import { Dispatch } from 'redux';
import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  UserDispatchTypes,
} from './CreateUserActionTypes';
import axios from 'axios';

export const CreateUser = (user:any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: CREATE_USER_ATTEMPT,
    });
    const res = await axios.get('http://localhost:8080/login/', {data:{

      email:user.email,
      password:user.password,

      }});
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: e.message
    });
  }
};
