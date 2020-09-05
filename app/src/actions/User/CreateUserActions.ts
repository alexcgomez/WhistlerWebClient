import { Dispatch } from 'redux';
import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  UserDispatchTypes,
} from './CreateUserActionTypes';
import axios from 'axios';

export const CreateUser = (user: any) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: CREATE_USER_ATTEMPT,
    });
    const newUserId = await axios.post('http://localhost:8080/v1/users/create', user);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: newUserId.data,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER_FAILURE,
    });
  }
};
